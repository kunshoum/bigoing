<template>
  <div class="backup">
        <!-- 头部 -->
        <div class="header">
            <span @click="cancel"></span>
            <div class="title">备份钱包</div>
        </div>
        <!-- 主体 -->
        <div class="main">
            <div class="imgHeader"></div>
            <p class="fontHint">"备份"工具可以帮助您保护数据免受意外的损失。请按照提示要求备份数据</p>
            <h3>请输入指令密码</h3>
            <input type="password" ref="passCode">
            <ul>
                <li @click="cancel">取消</li>
                <li @click="compare">下一步</li>
            </ul>
        </div>
  </div>
</template>
<script>
import bip39 from 'bip39'
import hdkey from 'hdkey'
import util from 'ethereumjs-util'
// import test from '../assets/js/test'
export default {
  data () {
    return {

    }
  },
  methods: {
    test: function (walletInformation, walletIndex) {
      let mnemonic = bip39.generateMnemonic()
      let seed = bip39.mnemonicToSeed(mnemonic)
      let hdWallet = hdkey.fromMasterSeed(seed)
      let key1 = hdWallet.derive("m/44'/60'/0'/0/0")
      let address1 = util.pubToAddress(key1._publicKey, true)
      let address1hex = util.toChecksumAddress(address1.toString('hex'))
      walletInformation[walletIndex].TheMnemonicWord = mnemonic
      walletInformation[walletIndex].address = address1hex
      walletInformation[walletIndex].privateKey = key1._privateKey.toString('hex')
      localStorage.setItem('walletInformation', JSON.stringify(walletInformation))
    },
    cancel: function () {
      this.$router.push({ path: '/createWallet' })
    },
    compare: function () {
      let walletInformation = JSON.parse(localStorage.getItem('walletInformation'))
      let LoginAccount = JSON.parse(localStorage.getItem('LoginAccount'))
      let walletIndex = walletInformation.length - 1
      let passCode = this.$refs.passCode.value
      if (walletInformation[walletIndex].passOne === passCode) {
        this.test(walletInformation, walletIndex)
        this.$router.push({ path: '/mnemonic' })
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.backup {
  width: 100%;
  height: 1334px;
  background: url(../../../static/images/icon23.png) no-repeat;
  background-size: cover;
}
.header {
  background-size: cover;
  height: 88px;
  width: 100%;
  line-height: 88px;
  position: relative;
}
.header span {
  position: absolute;
  background: url(../../../static/images/icon12.png) no-repeat;
  left: 30px;
  width: 18px;
  height: 33px;
  background-size: 18px 33px;
  top: 50%;
  transform: translateY(-50%);
}
.header .title {
  width: 100%;
  color: #f2f2f2;
  font-size: 32px;
  text-align: center;
}
.main {
  width: 624px;
  height: 594px;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 90px;
  padding: 40px 40px 0 40px;
}
.main .imgHeader {
  height: 114px;
  width: 107px;
  margin: 0 auto;
  background: url(../../../static/images/icon26.png) no-repeat;
  background-size: contain;
  margin-bottom: 47px;
}
.main p.fontHint {
  width: 100%;
  text-align: center;
  color: #ff2a00;
  font-size: 28px;
  letter-spacing: 1px;
  line-height: 33px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e6e6e6;
}
.main h3 {
  font-size: 30px;
  color: #333;
  margin: 40px 0;
}
.main input {
  width: 100%;
  box-sizing: border-box;
  height: 60px;
  border: 1px solid #aaa;
  margin-bottom: 40px;
  padding-left: 30px;
  outline: none;
}
.main ul {
  border-top: 1px solid #e6e6e6;
  display: flex;
}
.main ul li {
  flex: 1;
  text-align: center;
  height: 75px;
  line-height: 75px;
  font-size: 30px;
}
.main ul li:nth-child(1) {
  border-right: 1px solid #e6e6e6;
  color: #666;
}
.main ul li:nth-child(2) {
  color: #ff2a00;
}
</style>
