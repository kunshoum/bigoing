import Vue from 'vue'
import Vuex from 'vuex'
import { ExchangeChain, getWeb3 } from '../util/exchangeChain'
import { commonToken, exchangeAddress } from '../assets/js/commonConfig'
import { weiToEth, getLoginAccount, getLoginPrivateKey } from '../assets/js/commonFunctions'

Vue.use(Vuex)

let exchangeChain = new ExchangeChain()
exchangeChain.init(exchangeAddress, 0, 0)
const Token = JSON.parse(window.localStorage.getItem('GoldData'))
export const store = new Vuex.Store({
  strict: true,
  state: {
      tokenBalanceIndex: 1,
      web3index: 1,
      setting: {web3_type: 'http', web3_httpProviders: ['https://mainnet.infura.io/4iqu143uAN87joCmTFy2'], account: getLoginAccount()},
      token: Token,
      tokenBalance: {
      },
      blockNumber: 0,
      block: '',
      blockList: '',
      newHistory: {}
  },
  mutations: {
      registerWeb3Instance (state, payload) {
          state.setting.web3_type = 'http'
          state.setting.account = getLoginAccount()
          state.setting.pk = getLoginPrivateKey()

          exchangeChain.setWeb3(payload)
          state.coinbase = payload.coinbase
          state.web3index++
      },
      getBlockNumberInstance (state, result) {
        state.blockNumber = result
      },
      getnewsHistory (state, result) {
        console.log(result)
        result.gasPrice = weiToEth(result.gasPrice)
        state.newHistory = result
      },
      getTokenBalanceInstance (state, [id, balance]) {
          if (state.token[id].balance !== balance) {
            state.token[id].balance = balance
            state.tokenBalanceIndex++
          }
      }
  },
  actions: {
    registerWeb3 ({commit, rootState}) {
        getWeb3(rootState.setting.web3_type, rootState.setting.web3_httpProviders).then(result => {
          commit('registerWeb3Instance', result)
        }).catch(e => {
          console.log('error in action registerWeb3', e)
        })
    },
    getBlockNumber ({commit, rootState}) {
      exchangeChain.getBlockNumberAsync().then(result => {
        commit('getBlockNumberInstance', result)
      }).catch(e => console.log(e))
    },
    getTransaction ({commit, rootState}, tokenAddr) {
      exchangeChain.getTransactionHistory(tokenAddr).then(result => {
        commit('getnewsHistory', result)
      }).catch(e => console.log(e))
    },
    getAllTokenBalance ({commit, rootState}) {
      for (let i in rootState.token) {
        exchangeChain.getBalanceAsync(rootState.setting.account, rootState.token[i].addr).then(result => {
          let balance = weiToEth(result).toString()
          console.log('balance��', balance)
          commit('getTokenBalanceInstance', [i, balance])
        }).catch(e => console.log(e))
      }
    },
    getFilter ({commit, rootState}) {
      exchangeChain.loadTradeAsync().then(result => {

      }).catch(e => console.log(e))
    }
  }
})

store.exchangeChain = exchangeChain
