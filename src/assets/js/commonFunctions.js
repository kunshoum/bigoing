import BigNumber from 'bignumber.js'
import { commonToken } from '../js/commonConfig'

export function zeroPad (num, places) {
  const zero = (places - num.toString().length) + 1
  return Array(+(zero > 0 && zero)).join('0') + num
}

export function weiToEth (weiIn, divisorIn, fixIn) {
  let fix = fixIn || 3
  let wei = new BigNumber(String(weiIn))
  let divisor = new BigNumber(divisorIn || 1e18)
  return fixIn ? wei.div(divisor).toNumber().toFixed(fix) : wei.div(divisor)
}

export function ethToWei (ethIn, divisorIn) {
  let eth = new BigNumber(String(ethIn))
  let divisor = new BigNumber(divisorIn || 1e18)
  return eth.mul(divisor)
}

export function setCookie (cname, cvalue, exdays) {
  let d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  let expires = 'expires=' + d.toUTCString()
  // console.info(cname + '=' + cvalue + '; ' + expires)
  document.cookie = cname + '=' + cvalue + '; ' + expires
  // console.info(document.cookie)
}

export function getCookie (cname) {
  let name = cname + '='
  let ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) !== -1) {
      // console.log('privateKey是' + c.substring(name.length, c.length))
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

export function clearCookie () {
  this.setCookie('privateKey', '', -1)
}

export function checkCookie () {
  let privateKey = this.getCookie('privateKey')
  if (privateKey !== '') {
    alert(privateKey)
  } else {
    privateKey = prompt('Please enter your name:', '')
    if (privateKey !== '' && privateKey != null) {
      this.setCookie('privateKey', privateKey, 365)
    }
  }
}

export function getClassifiedFundsByKind (fundList) {
  let kinds = {}
  let newList = []

  if (fundList.length > 0) {
    fundList.forEach(function (item) {
        let kindItems = kinds[item.kind]
        if (!kindItems) {
          kindItems = []
          kinds[item.kind] = kindItems
          newList.push({
            kind: item.kind,
            items: kindItems
          })
        }

        kindItems.push(item)
    })
  }

  return newList
}

export function getClassifiedFundsByTokenGet (fundList) {
  let tokenGets = {}
  let newList = []

  if (fundList.length > 0) {
    fundList.forEach(function (item) {
        let tokenItems = tokenGets[item.tokenGet]
        if (!tokenItems) {
          tokenItems = []
          tokenGets[item.tokenGet] = tokenItems
          newList.push({
            tokenGet: item.tokenGet,
            items: tokenItems
          })
        }

        tokenItems.push(item)
    })
  }

  return newList
}

export function getFundsByUser (fundList) {
  let newList = []

  if (fundList.length > 0) {
    newList = fundList.filter(function (e) {
      return e.user === getCookie('web3_account').toLowerCase()
    })
  }

  return newList
}

export function getStatisticalFunds (fundList) {
  let lines = ''

  if (fundList.length > 0) {
    lines = fundList.map(function (tokenGet) {
      let prices = tokenGet.items.map(function (item) {
          return item.price
      })

      // return 'tokenGet[' + tokenGet.tokenGet + '] - ' + String(sumPrice(prices))
      return '[{"tokenGet":"' + tokenGet.tokenGet + '","price":"' + String(sumPrice(prices)) + '"}]'
    })
  }
  return lines
}

export function mergeJsonArr (arr1, arr2) {
  let arr3 = []

  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i])
  }

  for (let j = 0; j < arr2.length; j++) {
    arr3.push(arr2[j])
  }

  return arr3
}

export function timetrans (dateNum) {
  let date = new Date(dateNum)
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' '
  let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
  let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
  let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
  return Y + M + D + h + m + s
}

export function sumPrice (arr) {
  let result = new BigNumber(0)

  arr.forEach(function (item, index) {
    let price = new BigNumber(String(item))
    result = result.plus(price)
  })

  return result
}

export function getTokenNameByAddr (addr) {
  let result = ''
  commonToken.forEach(function (item) {
    if (item.addr === addr) {
      result = item.name
    }
  })

  return result
}

export function getFundStatusByKind (kind) {
  if (kind === 'Deposit') {
    return '充值'
  } else if (kind === 'Withdraw') {
    return '提币'
  }

  return ''
}

export function sortByKey (array, key) {
  return array.sort(function (a, b) {
      let x = b[key]
      let y = a[key]
      return ((x < y) ? -1 : ((x > y) ? 1 : 0))
  })
}

export function initLocalStorage () {
  if (!window.localStorage) {
    window.localStorage = {
      getItem: function (sKey) {
        if (!sKey || !this.hasOwnProperty(sKey)) { return null }
        return unescape(document.cookie.replace(new RegExp('(?:^|.*;\\s*)' + escape(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*'), '$1'))
      },
      key: function (nKeyId) {
        return unescape(document.cookie.replace(/\s*\=(?:.(?!;))*$/, '').split(/\s*\=(?:[^;](?!;))*[^;]?;\s*/)[nKeyId])
      },
      setItem: function (sKey, sValue) {
        if (!sKey) { return }
        document.cookie = escape(sKey) + '=' + escape(sValue) + '; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/'
        this.length = document.cookie.match(/\=/g).length
      },
      length: 0,
      removeItem: function (sKey) {
        if (!sKey || !this.hasOwnProperty(sKey)) { return }
        document.cookie = escape(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
        this.length--
      },
      hasOwnProperty: function (sKey) {
        return (new RegExp('(?:^|;\\s*)' + escape(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(document.cookie)
      }
    }
    window.localStorage.length = (document.cookie.match(/\=/g) || window.localStorage).length
  }
}

export function getLoginAccount () {
  let loginAccount = JSON.parse(window.localStorage.getItem('LoginAccount')) || []
  let accountName = ''
  if (loginAccount.length !== 0) {
    accountName = loginAccount.accountName
  }

  return accountName
}

export function getLoginPrivateKey () {
  let loginAccount = JSON.parse(window.localStorage.getItem('LoginAccount')) || []
  let privateKey = ''
  if (loginAccount.length !== 0) {
    privateKey = loginAccount.privateKey
  }

  return privateKey
}
