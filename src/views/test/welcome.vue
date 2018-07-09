<template>
  <div class="Welcome" >
    <h1>欢迎页面</h1>
    <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
  </div>
</template>
<script>
import { initLocalStorage } from '../../assets/js/commonFunctions'

export default {
  beforeCreate () {
    initLocalStorage()

    let testLoginAccount = {}

    testLoginAccount.accountName = 'test'
    testLoginAccount.privateKey = 'fe2a07ff45aa80cbd49b2be177a444a1a98d317e9860ed86beac091020d0b91c'
    // testLoginAccount.address = '0x63580Ef2C535E816AF848f1888A62943bA5Cf4f6'
    testLoginAccount.address = '0x1773e4876a011737A4044968DDeC6545CfCa09d1'
    testLoginAccount.headImg = 'qqqqqq.jpg'
    testLoginAccount.prompt = 'my1111111'
    testLoginAccount.assets = ['0xd8912c10681d8b21fd3742244f44658dba12264e', '0xdac17f958d2ee523a2206206994597c13d831ec7']
    testLoginAccount.quotes = ['0xd8912c10681d8b21fd3742244f44658dba12264e', '0xdac17f958d2ee523a2206206994597c13d831ec7']

    console.log(JSON.stringify(testLoginAccount))

    window.localStorage.setItem('LoginAccount', JSON.stringify(testLoginAccount))
  },
  methods: {
    onValuesChange (picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0])
      }
    }
  },
  data () {
    return {
      slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
