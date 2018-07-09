<template>
  <div class="mnemonic">
        <!-- 头部 -->
        <div class="header">
            <span @click="cancel"></span>
            <div class="title">{{message}}</div>
        </div>
        <!-- 主体 -->
        <div class="main">
            <div class="imgHeader"></div>
            <p class="fontHint">助记词用于恢复钱包或重置钱包密码将它准确的抄写在纸上，并存放在只有你知道的安全地方</p>
            <h3>您的助记词</h3>
            <div class="textarea">{{mnemonic}}</div>
            <button @click="querenzhujici"></button>
        </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: '备份助记词',
      mnemonic: ''
    }
  },
  mounted () {
    let walletInformation = JSON.parse(
      localStorage.getItem('walletInformation')
    )
    let walletIndex = walletInformation.length - 1
    this.mnemonic = walletInformation[walletIndex].TheMnemonicWord
  },
  methods: {
    cancel: function () {
      this.$router.push({ path: '/createWallet' })
    },
    querenzhujici: function () {
      this.$messagebox
        .confirm('', {
          title: '',
          message: '你已确认抄写助记词，是否确认从BEGOING中移除该助记词',
          confirmButtonText: '确认',
          confirmButtonClass: 'yes',
          showCancelButton: true
        })
        .then(action => {
          if (action === 'confirm') {
            let walletInformation = JSON.parse(
              localStorage.getItem('walletInformation')
            )
            let walletIndex = walletInformation.length - 1
            delete walletInformation[walletIndex].TheMnemonicWord
            delete walletInformation[walletIndex].privateKey
            this.mnemonic = walletInformation[walletIndex].TheMnemonicWord
            localStorage.setItem('walletInformation', JSON.stringify(walletInformation))
            localStorage.setItem('LoginAccount', JSON.stringify(walletInformation[walletIndex]))
            this.$router.push({ path: '/porperty' })
          }
        })
        .catch(err => {
          if (err === 'cancel') {}
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.mnemonic {
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
  position: relative;
  width: 624px;
  height: 790px;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 90px;
  padding: 40px 30px 0 30px;
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
  font-size: 26px;
  line-height: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e6e6e6;
}
.main h3 {
  font-size: 30px;
  color: #333;
  margin: 40px 0;
}
.main .textarea {
  width: 100%;
  box-sizing: border-box;
  height: 120px;
  border: 1px solid #aaa;
  margin-bottom: 40px;
  padding: 10px;
  outline: none;
  color: #111;
  font-size: 26px;
  margin-bottom: 50px;
}
::-webkit-input-placeholder {
  color: #111;
  font-size: 26px;
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
.main button {
  background: url(../../../static/images/icon27.png) no-repeat;
  background-size: cover;
  height: 73px;
  width: 306px;
  border-radius: 36px;
  border: none;
  outline: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
