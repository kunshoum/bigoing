import Web3 from 'web3'
import { commonABI, exchangeABI, ethAddress } from '../assets/js/commonConfig'

const Tx = require('ethereumjs-tx')
const coder = require('web3/lib/solidity/coder.js')
const sha3 = require('web3/lib/utils/sha3.js')
const sha256 = require('js-sha256').sha256
const async = require(typeof window === 'undefined' ? 'async' : 'async/dist/async.min.js')
const BigNumber = require('bignumber.js')
const secp256k1 = require('secp256k1')
const pubToAddress = require('ethereumjs-util').pubToAddress

export const TYPE_METAMASK = 'MetaMask'
export const TYPE_NANO = 'nano'

export function ExchangeChain () {
  const self = this

  self.init = (addressExchange, ethGasPrice, gasWithdraw) => {
    self.type = null
    self.web3 = null
    self.httpProviders = null
    self.addressExchange = addressExchange
    self.contractExchange = null
    self.ethAddr = ethAddress
    self.ethGasPrice = ethGasPrice
    self.gasWithdraw = gasWithdraw
    self.nonce = null
  }

  const loadContract = () => {
    self.contractExchange = self.web3.eth.contract(exchangeABI).at(self.addressExchange)
  }

  self.setWeb3 = (web3Wrap) => {
    self.web3 = web3Wrap.web3()
    self.injectedWeb3 = web3Wrap.injectedWeb3
    self.httpProviders = web3Wrap.providers
    self.nonce = null
    loadContract()
  }

  self.autoConnectWeb3 = () => {
    if (self.providers) {
      for (let i = 0; i < self.providers.length; i++) {
        self.web3.setProvider(new Web3.providers.HttpProvider(self.providers[i]))
        if (self.web3.isConnected()) {
            return true
        }
      }
    }

    return false
  }

  self.getBlockNumberAsync = () => new Promise((resolve, reject) => {
    self.web3.eth.getBlockNumber((err, result) => {
        if (err) reject(err)
        resolve(result)
    })
  })

  self.getBalanceAsync = (account, token) => new Promise((resolve, reject) => {
    if (token === self.ethAddr) {
      self.web3.eth.getBalance(account, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    } else {
      self.web3.eth.contract(commonABI).at(token).balanceOf(account, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    }
  })

  self.exchange_balanceOfAsync = (token, account) => new Promise((resolve, reject) => {
    self.contractExchange.balanceOf(token, account, (err, result) => {
      if (err) reject(err)
      resolve(result)
    })
  })

  self.getCoinbaseAsync = () => new Promise((resolve, reject) => {
    self.web3.eth.getCoinbase((err, result) => {
        if (err) reject(err)
        resolve(result)
    })
  })

  self.exchange_depositAsync = (token, amount, account, pk, kind, gasDeposit, ethGasPrice) => new Promise((resolve, reject) => {
    if (amount.lte(0)) {
      reject(new Error('You must specify a valid amount to deposit.'))
    }
    // 充以太
    if (token === self.ethAddr) {
      self.web3.eth.getBalance(account, (err, result) => {
        if (err) {
          console.log(err.stack)
        }
        let balanceLessGas = result.minus(new BigNumber(ethGasPrice).times(gasDeposit))
        if (amount.gt(balanceLessGas) && amount.lt(balanceLessGas.times(new BigNumber(1.1)))) {
          amount = balanceLessGas
        }
        if (amount.lte(result)) {
          self.send(self.web3, self.ledgerEth, self.contractExchange, self.addressExchange, 'deposit',
            [{ gas: gasDeposit, gasPrice: ethGasPrice, value: amount.toNumber() }], account, pk, kind, self.nonce, function (errSend, resultSend) {
              self.nonce = resultSend.nonce
              if (errSend) reject(errSend)
              resolve(resultSend)
          })
        } else {
          reject(new Error('You can\'t deposit more Ether than you have.'))
        }
      })
    } else {
      // 先查配额
      self.web3.eth.contract(commonABI).at(token).allowance(account, self.addressExchange, (errA, resultA) => {
        if (resultA && resultA.gt(0) && amount.gt(resultA)) {
          amount = resultA
        }
        // 看钱包余额
        self.web3.eth.contract(commonABI).at(token).balanceOf(account, (errB, resultB) => {
          if (amount.gt(resultB) && amount.lt(resultB.times(new BigNumber(1.1)))) {
            amount = resultB
          }
          // 余额足够
          if (amount.lte(resultB)) {
            let txs = []
            async.series([function (callbackSeries) {
              // 先配额
              if (resultA.eq(0)) {
                self.send(self.web3, self.ledgerEth, self.web3.eth.contract(commonABI).at(token), token, 'approve',
                [self.addressExchange, amount, { gas: 750000, gasPrice: ethGasPrice, value: 0 }],
                account, pk, kind, self.nonce, function (errSend, resultSend) {
                  self.nonce = resultSend.nonce
                  txs.push(resultSend)
                  callbackSeries(null, { errSend: errSend, resultSend: resultSend })
                })
              } else {
                callbackSeries(null, void 0)
              }
              // 充进合约
            }, function (callbackSeries) {
              self.send(self.web3, self.ledgerEth, self.contractExchange, self.addressExchange, 'depositToken',
              [token, amount, { gas: gasDeposit, gasPrice: ethGasPrice, value: 0 }], account, pk, kind, self.nonce, function (errSend, resultSend) {
                self.nonce = resultSend.nonce
                txs.push(resultSend)
                callbackSeries(null, { errSend: errSend, resultSend: resultSend })
              })
            }], function (err, results) {
              if (err) {
                console.log(err.stack)
              }
              let _results = _slicedToArray(results, 2)
              let tx1 = _results[0]
              let tx2 = _results[1]
              let errSend1 = tx1 ? tx1.errSend1 : null
              let errSend2 = tx2 ? tx2.errSend1 : null
              let errSend = errSend1 || errSend2
              if (errSend) reject(errSend)
              resolve(txs)
            })
          } else {
            // 余额不足
            reject(new Error('You can\'t deposit more tokens than you have.'))
          }
        })
      })
    }
  })

  self.exchange_withdrawAsync = (token, amount, account, pk, kind, gasWithdraw, ethGasPrice) => new Promise((resolve, reject) => {
    if (amount.lte(0)) {
      reject(new Error('You must specify a valid amount to withdraw.'))
    }
    self.contractExchange.balanceOf(token, account, (err, result) => {
      if (err) reject(err)
      let balance = result
      if (amount.gt(balance)) {
        amount = balance
      }
      if (amount.lte(0)) {
        reject(new Error('You don\'t have anything to withdraw.'))
      }
      if (token === self.ethAddr) {
        self.send(self.web3, self.ledgerEth, self.contractExchange, self.addressExchange,
          'withdraw', [amount, { gas: gasWithdraw, gasPrice: ethGasPrice, value: 0 }],
          account, pk, kind,
          self.nonce, function (errSend, resultSend) {
            self.nonce = resultSend.nonce
            if (errSend) reject(errSend)
            resolve(resultSend)
        })
      } else {
        self.send(self.web3, self.ledgerEth, self.contractExchange, self.addressExchange,
          'withdrawToken', [token, amount, { gas: gasWithdraw, gasPrice: ethGasPrice, value: 0 }],
          account, pk, kind,
          self.nonce, function (errSend, resultSend) {
            self.nonce = resultSend.nonce
            if (errSend) reject(errSend)
            resolve(resultSend)
        })
      }
    })
  })

  self.signOrderAsync = (tokenGet, tokenGive, amountGet, amountGive, expires, orderNonce, account, pk, kind) => new Promise((resolve, reject) => {
    if (!account) {
      reject(new Error('You haven\'t selected an account. Make sure you have an account selected from the Accounts dropdown in the upper right.'))
    }
    self.contractExchange.balanceOf(tokenGive, account, (err, result) => {
      if (err) {
        console.log(err.stack)
      }
      if (result.lt(new BigNumber(amountGive))) {
        reject(new Error('You do not have enough funds to send this order. Please DEPOSIT first using the Deposit form in the upper left. Enter the amount you want to deposit and press the \'Deposit\' button.'))
      } else {
        let condensed = pack([self.addressExchange, tokenGet, amountGet, tokenGive, amountGive, expires, orderNonce], [160, 160, 256, 160, 256, 256, 256])
        let hash = sha256(Buffer.from(condensed, 'hex'))
        sign(self.web3, self.ledgerEth, account, pk, kind, hash, function (errSign, sig) {
          if (errSign) {
            console.log(errSign)
            reject(new Error('Order signing failed. Make sure you have an account selected from the Accounts dropdown in the upper right.'))
          } else {
            let order = {
              contractAddr: self.addressExchange,
              tokenGet: tokenGet,
              amountGet: amountGet,
              tokenGive: tokenGive,
              amountGive: amountGive,
              expires: expires,
              nonce: orderNonce,
              v: sig.v,
              r: sig.r,
              s: sig.s,
              user: account
            }
            resolve(order)
          }
        })
      }
    })
  })
  /*
  self.call = (web3In, contract, address, functionName, args, callback) => new Promise((resolve, reject) => {
    try {
      let data = contract[functionName].getData.apply(null, args)
      web3In.eth.call({ to: address, data: data }, function (err, result) {
          if (err) reject(err)
          else {
              let functionAbi = contract.abi.find(function (element) {
                return element.name === functionName
              })
              let solidityFunction = new SolidityFunction(web3In.Eth, functionAbi, address)
              try {
                  let unsafeResult = solidityFunction.unpackOutput(result)
                  let safeResult = xss(sanitizer.sanitize(unsafeResult))
                  let finalResult = ((unsafeResult.constructor.name === 'BigNumber') || (unsafeResult.constructor.name === 'Number')) ? new BigNumber(safeResult) : safeResult
                  callback(null, finalResult)
              } catch (errJson) { reject(errJson) }
          }
      })
    } catch (err) { reject(err) }
  })
  */
  const getNextNonce = function (web3, address, callback) {
    try {
        web3.eth.getTransactionCount(address, 'pending', function (err, result) {
            if (err) callback(err, null)
            else {
                let nextNonce = Number(result)
                callback(null, nextNonce)
            }
        })
    } catch (err) { callback(err, null) }
  }

  self.getTransactionHistory = (txHash) => new Promise((resolve, reject) => {
    self.web3.eth.getTransaction(txHash, (err, result) => {
      if (err) reject(err)
      resolve(result)
    })
  })

  self.send1 = function (web3, ledgerEth, contract, address, functionName, argsIn, fromAddress, privateKeyIn, addrKind, nonceIn, callback) {
    self.raw_send(web3, ledgerEth, contract, address, functionName, argsIn, fromAddress, privateKeyIn, addrKind, nonceIn, function (err, result) {
      // 如果是nonce不够，就再做一次
      if (err && (err.message === 'replacement transaction underpriced' || err.message === 'nonce too low')) {
        self.nonce = result.nonce
        self.raw_send(web3, ledgerEth, contract, address, functionName, argsIn, fromAddress, privateKeyIn, addrKind, self.nonce, callback)
      } else {
        callback(err, result)
      }
    })
  }

  self.send = function (web3, ledgerEth, contract, address, functionName, argsIn, fromAddress, privateKeyIn, addrKind, nonceIn, callback) {
    function encodeConstructorParams (abi, params) {
      return abi.filter(function (json) {
        return json.type === 'constructor' && json.inputs.length === params.length
      }).map(function (json) {
        return json.inputs.map(function (input) { return input.type })
      }).map(function (types) { return coder.encodeParams(types, params) })[0] || ''
    }
    let privateKey = privateKeyIn && privateKeyIn.substring(0, 2) === '0x' ? privateKeyIn.substring(2, privateKeyIn.length) : privateKeyIn
    let args = Array.prototype.slice.call(argsIn).filter(function (a) { return a !== null })
    let options = {}

    if (innerTypeof(args[args.length - 1]) === 'object' && args[args.length - 1].gas) {
      args[args.length - 1].gasPrice = args[args.length - 1].gasPrice || self.ethGasPrice
      args[args.length - 1].gasLimit = args[args.length - 1].gas
      delete args[args.length - 1].gas
    }

    if (isObject(args[args.length - 1])) {
      options = args.pop()
    }

    getNextNonce(web3, fromAddress, function (err, nextNonce) {
      let nonce = nonceIn
      if (nonceIn === null || nonceIn < nextNonce) {
        nonce = nextNonce
      }
      options.nonce = nonce
      if (functionName === 'constructor') {
        options.data.slice(0, 2) !== '0x' && (options.data = '0x' + options.data)
        let encodedParams = encodeConstructorParams(contract.abi, args)
        console.log(encodedParams)
        options.data += encodedParams
      } else if (contract && functionName) {
        options.to = address
        let inputTypes = contract.abi.find(function (element) {
          return element.name === functionName
        }).inputs.map(function (x) {
          return x.type
        })
        let typeName = inputTypes.join()
        options.data = '0x' + sha3(functionName + '(' + typeName + ')').slice(0, 8) + coder.encodeParams(inputTypes, args)
      } else {
        options.to = address
      }
      try {
        let post = function (serializedTx) {
          if (web3.currentProvider) {
            web3.eth.sendRawTransaction('0x' + serializedTx, function (errSend, hash) {
              errSend ? callback(errSend, { txHash: null, nonce: nonce })
                : callback(null, { txHash: hash, nonce: nonce + 1 })
            })
          }
        }
        if (web3.currentProvider && addrKind === 'MetaMask') {
          options.from = fromAddress
          options.gas = options.gasLimit
          delete options.gasLimit
          web3.eth.sendTransaction(options, function (errSend, hash) {
            errSend ? callback(errSend, { txHash: null, nonce: nonce })
              : callback(null, { txHash: hash, nonce: nonce + 1 })
          })
        } else if (ledgerEth && addrKind === 'Ledger') {
        } else if (privateKeyIn) {
            let _tx = new Tx(options)
          signTx(web3, fromAddress, _tx, privateKey, function (errSignTx, txSigned) {
            if (errSignTx) {
              console.log(err)
              const ftsterr = 'Failed to sign transaction'
              callback(ftsterr, { txHash: null, nonce: nonce })
            } else {
              let serializedTx = txSigned.serialize().toString('hex')
              post(serializedTx)
            }
          })
        } else {
          const ftsterr = 'Failed to sign transaction'
          callback(ftsterr, { txHash: null, nonce: nonce })
        }
      } catch (errCatch) {
        callback(errCatch, { txHash: null, nonce: nonce })
      }
    })
  }

  self.exchange_tradeAsync = (orderKind, order, amount, account, pk, kind, gasTrade, ethGasPrice) => new Promise((resolve, reject) => {
    if (!account) {
      reject(new Error('You haven\'t selected an account. Make sure you have an account selected from the Accounts dropdown in the upper right.'))
    }

    self.contractExchange.balanceOf(order.tokenGet, account, (err, result) => {
      if (err) {
        console.log(err.stack)
      }
      let availableBalance = result
      self.contractExchange.availableVolume(order.tokenGet, order.amountGet, order.tokenGive,
        order.amountGive, order.expires, order.nonce, order.user, order.v, order.r, order.s, (errAvailableVolume, resultAvailableVolume) => {
        let availableVolume = resultAvailableVolume
        amount.gt(availableBalance.divToInt(1.0031)) && (amount = availableBalance.divToInt(1.0031))
        amount.gt(availableVolume) && (amount = availableVolume)
        let v = order.v || 0
        let r = order.r || '0x0'
        let s = order.s || '0x0'

        self.contractExchange.testTrade(order.tokenGet, order.amountGet, order.tokenGive, order.amountGive, order.expires, order.nonce, order.user, v, r, s, amount, account, (errTestTrade, resultTestTrade) => {
          let reportedAvailableVolume = new BigNumber(orderKind === 'buy' ? order.availableVolumeBase : order.availableVolume)
          if (availableVolume.lt(reportedAvailableVolume.div(4))) {
            reject(new Error('You cannot trade this order because it already traded. Someone else already traded this order and the order book hasn\'t updated yet.'))
          } else if (availableBalance.lte(new BigNumber(0))) {
            reject(new Error('You cannot trade this order because you don\'t have enough funds. Please DEPOSIT first using the Deposit form in the upper left. Enter the amount you want to deposit and press the \'Deposit\' button.'))
          } else if (!resultTestTrade || amount.lte(new BigNumber(0))) {
            reject(new Error('You cannot trade this order because it already traded. Someone else already traded this order and the order book hasn\'t updated yet.'))
          } else {
            self.send(self.web3, self.ledgerEth, self.contractExchange, self.addressExchange, 'trade', [order.tokenGet, order.amountGet, order.tokenGive, order.amountGive, order.expires, order.nonce, order.user, v, r, s, amount, { gas: gasTrade, gasPrice: ethGasPrice, value: 0 }],
              account, pk, kind, self.nonce, function (errSend, resultSend) {
              if (typeof (resultSend.txHash) !== 'undefined') {
                // self.dummyTrade({ txHash: resultSend.txHash, order: order, amount: amount, user: self.accounts[self.selectedAccount].addr })
              }
              self.nonce = resultSend.nonce
              if (errSend) reject(errSend)
              resolve(resultSend)
              // self.addPending(errSend, { txHash: resultSend.txHash })
              // self.alertTxResult(errSend, resultSend)
            })
          }
        })
      })
    })
  })

  self.getBlockAsync = (blockNumber) => new Promise((resolve, reject) => {
    self.web3.eth.getBlock(blockNumber, (err, result) => {
      if (err) reject(err)
      resolve(result)
    })
  })

  self.getBlockTransactionCountAsync = (blockNumber) => new Promise((resolve, reject) => {
    self.web3.eth.getBlockTransactionCount(blockNumber, (err, result) => {
      if (err) reject(err)
      resolve(result)
    })
  })

  self.loadTradeAsync = (address) => new Promise((resolve, reject) => {
    let filter = web3.eth.filter({fromBlock: 0, toBlock: 'latest', address: '0x4D6641feF0b2949B613e38d0441B22CB307E3EFD'})
    console.log('filter begin：')

    filter.get(function (err, results) {
      console.log('filter results：' + results)
      if (err) {
        console.log('get ERROR: ', err)
        reject(err)
      }

      resolve(results)
    })
  })

  const signTx = function (web3, address, txIn, privateKey, callback) {
    let tx = txIn
    if (privateKey) {
      tx.sign(Buffer.from(privateKey, 'hex'))
      callback(null, tx)
    } else {
      let msgHash = '0x' + tx.hash(!1).toString('hex')
      web3.eth.sign(address, msgHash, function (err, sigResult) {
        if (err) {
          callback(err, null)
        } else {
          try {
            let r = sigResult.slice(0, 66)
            let s = '0x' + sigResult.slice(66, 130)
            let v = web3.toDecimal('0x' + sigResult.slice(130, 132))
            v !== 27 && v !== 28 && (v += 27)
            tx.r = r
            tx.s = s
            tx.v = v
            callback(null, tx)
          } catch (errTry) {
            callback(errTry, null)
          }
        }
      })
    }
  }

  const fromRpcSig = function (sig) {
    if ((sig = toBuffer(sig)).length !== 65) {
      throw new Error('Invalid signature length')
    }
    let v = sig[64]
    v < 27 && (v += 27)
    return { v: v, r: sig.slice(0, 32), s: sig.slice(32, 64) }
  }

  const zeros = function (bytes) {
    // let buf = new Buffer(bytes)
    let buf = Buffer.alloc(bytes)
    return buf.fill(0), buf
  }

  const padToEven = function (a) {
    return a.length % 2 && (a = '0' + a), a
  }

  const isHexPrefixed = function (str) {
    return str.slice(0, 2) === '0x'
  }

  const stripHexPrefix = function (str) {
    return typeof str !== 'string' ? str : isHexPrefixed(str) ? str.slice(2) : str
  }

  const intToBuffer = function (i) {
    let hex = exports.intToHex(i)
    // return new Buffer(hex.slice(2), 'hex')
    return Buffer.from(hex.slice(2), 'hex')
  }

  const toBuffer = function (v) {
    if (!Buffer.isBuffer(v)) {
      if (typeof v === 'string') {
        // v = new Buffer(padToEven(stripHexPrefix(v)), 'hex')
        v = Buffer.from(padToEven(stripHexPrefix(v)), 'hex')
      } else if (typeof v === 'number') {
        v = intToBuffer(v)
      } else if (v === null || v === void 0) {
        // v = new Buffer([])
        v = Buffer.alloc([])
      } else {
        if (!v.toArray) {
          throw new Error('invalid type')
        }
        // v = new Buffer(v.toArray())
        v = Buffer.alloc(v.toArray())
      }
    }
    return v
  }

  const setLength = function (msg, length, right) {
    let buf = zeros(length)
    return msg = toBuffer(msg), right ? msg.length < length ? (msg.copy(buf), buf) : msg.slice(0, length) : msg.length < length ? (msg.copy(buf, length - msg.length), buf) : msg.slice(-length)
  }

  const ecrecover = function (msgHash, v, r, s) {
    let signature = Buffer.concat([setLength(r, 32), setLength(s, 32)], 64)
    let recovery = v - 27
    if (recovery !== 0 && recovery !== 1) {
      throw new Error('Invalid signature v value')
    }
    let senderPubKey = secp256k1.recover(msgHash, signature, recovery)
    return secp256k1.publicKeyConvert(senderPubKey, !1).slice(1)
  }

  const add = function (x, y, base) {
    for (let z = [], n = Math.max(x.length, y.length), carry = 0, i = 0; i < n || carry;) {
        let zi = carry + (i < x.length ? x[i] : 0) + (i < y.length ? y[i] : 0)
        z.push(zi % base),
        carry = Math.floor(zi / base),
        i += 1
    }
    return z
  }

  const multiplyByNumber = function (numIn, x, base) {
    let num = numIn
    if (num < 0) {
      return null
    }
    if (num === 0) {
      return []
    }
    for (let result = [], power = x; ;) {
        if (num & 1 && (result = add(result, power, base)), (num >>= 1) === 0) {
          break
        }
        power = add(power, power, base)
    }
    return result
  }

  const parseToDigitsArray = function (str, base) {
    for (let digits = str.split(''), ary = [], i = digits.length - 1; i >= 0; i -= 1) {
        let n = parseInt(digits[i], base)
        if (isNaN(n)) {
          return null
        }
        ary.push(n)
    }
    return ary
  }

  const convertBase = function (str, fromBase, toBase) {
    let digits = parseToDigitsArray(str, fromBase)
    if (digits === null) {
      return null
    }
    for (let outArray = [], power = [1], i = 0; i < digits.length; i += 1) digits[i] && (outArray = add(outArray, multiplyByNumber(digits[i], power, toBase), toBase)),
    power = multiplyByNumber(fromBase, power, toBase)
    for (let out = '',
    _i = outArray.length - 1; _i >= 0; _i -= 1) out += outArray[_i].toString(toBase)
    return out === '' && (out = 0),
    out
  }

  const sign = function (web3, ledgerEth, address, privateKeyIn, addrKind, msgToSignIn, callback) {
    function prefixMessage (msgIn) {
      let msg = msgIn
      msg = Buffer.from(msg.slice(2), 'hex')
      msg = Buffer.concat([Buffer.from('Ethereum Signed Message:\n' + msg.length.toString()), msg])
      msg = web3.sha3('0x' + msg.toString('hex'), { encoding: 'hex' })
      return '0x' + (msg = Buffer.from(msg.slice(2), 'hex')).toString('hex')
    }

    function testSig (msg, sig) {
      let addr = pubToAddress(ecrecover(msg, sig.v, sig.r, sig.s)).toString('hex')
      return '0x' + addr === address.toLowerCase()
    }
    let msgToSign = msgToSignIn.substring(0, 2) !== '0x' ? '0x' + msgToSignIn : msgToSignIn
    if (web3.currentProvider && addrKind === 'MetaMask') {
      web3.version.getNode(function (error, node) {
        if (error) {
          console.log(error.stack)
        }
        node && (node.match('TestRPC') || node.match('MetaMask')) && (msgToSign = prefixMessage(msgToSign))
        web3.eth.sign(address, msgToSign, function (err, sigResult) {
          if (err) {
            let errMsg = 'Failed to sign message'
            callback(errMsg, null)
          } else {
            let sigHash = sigResult
            let sig = fromRpcSig(sigHash)
            let msg = null
            msg = node && (node.match('TestRPC') || node.match('MetaMask')) ? Buffer.from(msgToSign.slice(2), 'hex') : Buffer.from(prefixMessage(msgToSign).slice(2), 'hex')
            if (testSig(msg, sig)) {
              let r = '0x' + sig.r.toString('hex')
              let s = '0x' + sig.s.toString('hex')
              let v = sig.v
              callback(null, { r: r, s: s, v: v })
            } else {
              let errMsg = 'Failed to sign message'
              callback(errMsg, null)
            }
          }
        })
      })
    } else if (ledgerEth && addrKind === 'Ledger') {
    } else if (privateKeyIn) {
      let privateKey = privateKeyIn.substring(0, 2) === '0x' ? privateKeyIn.substring(2, privateKeyIn.length) : privateKeyIn
      msgToSign = prefixMessage(msgToSign)
      try {
          let sig = ecsign(Buffer.from(msgToSign.slice(2), 'hex'), Buffer.from(privateKey, 'hex'))

          let msg = Buffer.from(msgToSign.slice(2), 'hex')
          if (testSig(msg, sig)) {
            let r = '0x' + sig.r.toString('hex')
            let s = '0x' + sig.s.toString('hex')
            let v = sig.v

            callback(null, { r: r, s: s, v: v })
          } else {
            let errMsg = 'Failed to sign message'
            callback(errMsg, null)
        }
      } catch (err) { callback(err, null) }
    } else {
      let errMsg = 'Could not sign message'
      callback(errMsg, null)
    }
  }

  let innerTypeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj }
  function isObject (value) {
    let type = typeof value; return value != null && (type === 'object' || type === 'function')
  }

  let _slicedToArray = (function () {
    function sliceIterator (arr, i) {
      let _arr = []
      let _n = !0
      let _d = !1
      // let _e = void 0
      try {
        let _s
        let _i = arr[Symbol.iterator]()

        for (; !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i); _n = !0) {
        }
      } catch (err) {
        _d = !0
        // _e = err
      } finally {
        try {
          !_n && _i.return && _i.return()
        } finally {
          if (_d) {
            // throw _e
          }
        }
      }
      return _arr
    }
    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr
      }
      if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i)
      }
      throw new TypeError('Invalid attempt to destructure non-iterable instance')
    }
  }())

  const zeroPad = (num, places) => {
    const zero = (places - num.toString().length) + 1
    return Array(+(zero > 0 && zero)).join('0') + num
  }

  const decToHex = (dec, lengthIn) => {
    let length = lengthIn
    if (!length) {
      length = 32
    }
    if (dec < 0) {
        // return convertBase((Math.pow(2, length) + decStr).toString(), 10, 16)
        return (new BigNumber(2)).pow(length).add(new BigNumber(dec)).toString(16)
    }
    let result = null
    try {
        result = convertBase(dec.toString(), 10, 16)
    } catch (err) {
        result = null
    }
    return result || new BigNumber(dec).toString(16)
  }

  const pack = (dataIn, lengths) => {
    let packed = ''
    const data = dataIn.map(x => x)
    for (let i = 0; i < lengths.length; i += 1) {
        if (typeof (data[i]) === 'string' && data[i].substring(0, 2) === '0x') {
            if (data[i].substring(0, 2) === '0x') data[i] = data[i].substring(2)
            packed += zeroPad(data[i], lengths[i] / 4)
        } else if (typeof (data[i]) !== 'number' && !(data[i] instanceof BigNumber) && /[a-f]/.test(data[i])) {
            if (data[i].substring(0, 2) === '0x') {
              data[i] = data[i].substring(2)
            }
            packed += zeroPad(data[i], lengths[i] / 4)
        } else {
            // packed += zeroPad(new BigNumber(data[i]).toString(16), lengths[i]/4)
            packed += zeroPad(decToHex(data[i], lengths[i]), lengths[i] / 4)
        }
    }
    return packed
  }

  const ecsign = (msgHash, privateKey) => {
    let sig = secp256k1.sign(msgHash, privateKey)
    let ret = {}
    ret.r = sig.signature.slice(0, 32)
    ret.s = sig.signature.slice(32, 64)
    ret.v = sig.recovery + 27
    return ret
  }
}

export const getWeb3 = (type, httpProviders) => new Promise(function (resolve, reject) {
  let web3

  // 约定用metamask
  if (type === TYPE_METAMASK) {
    if (window && typeof window.web3 !== 'undefined') {
      web3 = new Web3(window.web3.currentProvider)
      console.log(self.web3.currentProvider)
      resolve({
        injectedWeb3: true,
        web3: () => {
          return web3
        },
        providers: []
      })
    }
    reject(new Error('无法连接到Metamask'))
  } else if (type === TYPE_NANO) {
    // 约定nano
    reject(new Error('无法连接到nano'))
  } else {
    // 约定http web3
    web3 = new Web3(new Web3.providers.HttpProvider(''))
    for (let i = 0; i < httpProviders.length; i++) {
      web3.setProvider(new Web3.providers.HttpProvider(httpProviders[i]))
      if (web3.isConnected()) {
        resolve({
          injectedWeb3: false,
          web3: () => {
            return web3
          },
          providers: httpProviders
        })
        return
      }
    }
    reject(new Error('无法连接到web3'))
  }
})
