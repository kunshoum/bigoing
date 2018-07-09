<template>
  <div class="createWallet" >
        <!-- 头部 -->
        <div class="header">
          <span @click="cancel"></span>
            <div class="title">创建钱包</div>
        </div>
        <!-- 主体 -->
        <div class="main">
            <div class="hintTop">
              <span></span>
              <p>密码用于保护私钥和交易授权，请尽量提高您的密码安全等级</p>
            </div>
            <div class="createAWallet">
                <img  class="headPortraits" ref="headPortraits">
                <div class="circle"></div>
                <input ref="walletName" @keyup="nameVerify" type="text" placeholder="钱包名称">
                <input ref="walletPass" @keyup="passVerify" type="password" placeholder="密码">
                <p class="fontHint" v-show="paddHint">不少于8位密码，建议混合大小写字母、数字、符号</p>
                <p class="fontStrength">{{fontStrength}}</p>
                <div class="strength">
                    <ul>
                        <li v-bind:class="{strengthHigh:high}"></li>
                        <li v-bind:class="{strengthIntermediate:intermediate}"></li>
                        <li v-bind:class="{strengthLow:low}"></li>
                        <li v-bind:class="{strengthFeeble:feeble}"></li>
                    </ul>
                </div>
                <input ref="walletPassClone" @keyup="clearsHind" type="password" placeholder="重复密码">
                <input ref="passHint" type="text" placeholder="密码提示信息（可不填）">
                <div v-bind:class="{clear:clears}" @click="clearAll()"></div>
                <div class="agreement">
                    <span @click="clearsYes" v-bind:class="{agree:agrees}"></span>
                    <p>我已仔细阅读并同意<a>服务及隐私条款</a></p>
                </div>
            </div>
            <button v-bind:class="{satisfy:btnShow}" @click="allVerify"></button>
        </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // 是否显示X
      clears: false,
      // 钱包名称
      clearwAlletName: false,
      // 密码强度
      fontStrength: '',
      high: false,
      intermediate: false,
      low: false,
      feeble: false,
      // 密码超过8位让提示文字隐藏
      paddHint: true,
      // 判断第一次输入密码与第二次是否一致
      passCloneOne: false,
      // 判断第二次输入密码与第一次是否一致
      passClone: false,
      // 密码提示
      passHint: false,
      // 是否勾选协议
      agrees: false,
      i: 0,
      btnShow: false,
      walletInformation: {
        cloudWallet: 0,
        name: '',
        passOne: '',
        passHint: '',
        numbreImg: '',
        address: '',
        privateKey: '',
        TheMnemonicWord: '',
        assets: [ '0xd8912c10681d8b21fd3742244f44658dba12264e', '0xdac17f958d2ee523a2206206994597c13d831ec7' ],
        quotes: [ '0xd8912c10681d8b21fd3742244f44658dba12264e', '0xdac17f958d2ee523a2206206994597c13d831ec7' ]
      }
    }
  },
  methods: {
    cancel: function () {
      this.$router.push({ path: '/manageWallet' })
    },
    qianbaominngchen () {
      this.$messagebox({title: '钱包名称格式有误，请重新输入', message: '   ', showInput: false, confirmButtonText: '确认', confirmButtonClass: 'yes', confirmButtonText: '确定'})
    },
    qianbaomima () {
      this.$messagebox({title: '密码格式输入有误，请重新输入', message: '   ', showInput: false, confirmButtonText: '确认', confirmButtonClass: 'yes', confirmButtonText: '确定'})
    },
    qianbaochongfumima () {
      this.$messagebox({title: '两次输入密码不一致，请重新输入', message: '   ', showInput: false, confirmButtonText: '确认', confirmButtonClass: 'yes', confirmButtonText: '确定'})
    },
    qianbaoagrees () {
      this.$messagebox({title: '是否同意服务及隐私条款', message: '   ', showInput: false, confirmButtonText: '确认', confirmButtonClass: 'yes', confirmButtonText: '确定'})
    },
    allVerify: function () {
      let walletInformation = JSON.parse(localStorage.getItem('walletInformation')) || []
      let walletIndex = walletInformation.length === 0 ? 0 : walletInformation.length - 1
      if (this.btnShow) {
        this.walletInformation.name = this.$refs.walletName.value
        this.walletInformation.passOne = this.$refs.walletPass.value
        this.walletInformation.passHint = this.$refs.passHint.value
        walletInformation.push(this.walletInformation)
        localStorage.setItem('walletInformation', JSON.stringify(walletInformation))
        // localStorage.setItem('LoginAccount', JSON.stringify(this.walletInformation))
        this.$router.push({ path: '/backup' })
      } else if (this.clearwAlletName === false) {
        this.qianbaominngchen()
      } else if (this.agrees === false) {
        this.qianbaoagrees()
      } else if (this.passClone === false) {
        this.qianbaochongfumima()
      } else if (this.paddHint) {
        this.qianbaomima()
      }
    },
    verify: function () {
      if (this.clearwAlletName && this.agrees && this.paddHint === false && this.passClone) {
        this.btnShow = true
      } else {
        this.btnShow = false
      }
    },
    // 钱包名称
    nameVerify: function () {
      this.i = 0
      let walletName = this.$refs.walletName.value
      if (walletName.length > 0) {
        this.clears = true
        if (walletName.length <= 20 && walletName.length >= 0) {
          this.clearwAlletName = true
        } else {
          this.clearwAlletName = false
        }
      } else {
        this.clears = false
      }
      this.clearsYes()
    },
    // 清除文本框内容
    clearAll: function () {
      this.i = 0
      this.$refs.walletName.value = ''
      this.clears = false
      this.clearsYes()
    },
    // 重复输入密码
    clearsHind: function () {
      this.i = 0
      this.clearsYes()
    },
    // 判断是否同意协议
    clearsYes: function () {
      this.i++
      this.PassCloneVerify()
      if (this.i % 2 === 0 && this.$refs.walletName.value.length > 0) {
        this.agrees = true
      } else {
        this.agrees = false
      }
      this.verify()
    },
    // 判断两次输入密码是否一致
    PassCloneVerify: function () {
      let walletPassClone = this.$refs.walletPassClone.value
      let walletPass = this.$refs.walletPass.value
      if (walletPassClone === walletPass) {
        this.passClone = true
      } else {
        this.passClone = false
      }
    },
    // 第一次输入密码
    passVerify: function () {
      this.i = 0
      //   字母
      let isLetter = this.$refs.walletPass.value.search(/[a-zA-Z]+/)
      //   数字
      let isNumber = this.$refs.walletPass.value.search(/[0-9]+/)
      //   符号
      let isSymbol = this.$refs.walletPass.value.search(/['.','_']+/)
      // // 文本框中的值
      let inputText = this.$refs.walletPass.value.length
      //   输入内容显示X
        if (inputText > 7) {
          this.paddHint = false
          this.fontStrength = '弱'
          this.feeble = true
          this.low = false
          this.intermediate = false
          this.high = false
          if (isNumber >= 0) {
            this.fontStrength = '低'
            this.feeble = true
            this.low = true
            this.intermediate = false
            this.high = false
            if (isLetter >= 0) {
              this.fontStrength = '中'
              this.feeble = true
              this.low = true
              this.intermediate = true
              this.high = false
              if (isSymbol >= 0) {
                this.fontStrength = '高'
                this.feeble = true
                this.low = true
                this.intermediate = true
                this.high = true
              } else {
                this.fontStrength = '中'
                this.feeble = true
                this.low = true
                this.intermediate = true
                this.high = false
              }
            } else if (isSymbol >= 0) {
              this.fontStrength = '中'
              this.feeble = true
              this.low = true
              this.intermediate = true
              this.high = false
              if (isLetter >= 0) {
                this.fontStrength = '高'
                this.feeble = true
                this.low = true
                this.intermediate = true
                this.high = true
              } else {
                this.fontStrength = '中'
                this.feeble = true
                this.low = true
                this.intermediate = true
                this.high = false
              }
            } else {
              this.fontStrength = '低'
              this.feeble = true
              this.low = true
              this.intermediate = false
              this.high = false
            }
          } else if (isLetter >= 0) {
            this.fontStrength = '低'
            this.feeble = true
            this.low = true
            this.intermediate = false
            this.high = false
            if (isNumber >= 0) {
              this.fontStrength = '中'
              this.feeble = true
              this.low = true
              this.intermediate = true
              this.high = false
              if (isSymbol >= 0) {
                this.fontStrength = '高'
                this.feeble = true
                this.low = true
                this.intermediate = true
                this.high = true
              } else {
                this.fontStrength = '中'
                this.feeble = true
                this.low = true
                this.intermediate = true
                this.high = false
              }
            } else if (isSymbol >= 0) {
              this.fontStrength = '中'
              this.feeble = true
              this.low = true
              this.intermediate = true
              this.high = false
              if (isNumber >= 0) {
                this.fontStrength = '高'
                this.feeble = true
                this.low = true
                this.intermediate = true
                this.high = true
              } else {
                this.fontStrength = '中'
                this.feeble = true
                this.low = true
                this.intermediate = true
                this.high = false
              }
            } else {
              this.fontStrength = '低'
              this.feeble = true
              this.low = true
              this.intermediate = false
              this.high = false
            }
          } else if (isSymbol >= 0) {
            this.fontStrength = '低'
            this.feeble = true
            this.low = true
            this.intermediate = false
            this.high = false
            if (isNumber >= 0) {
              this.fontStrength = '中'
              this.feeble = true
              this.low = true
              this.intermediate = true
              this.high = false
              if (isLetter >= 0) {
                this.fontStrength = '高'
                this.feeble = true
                this.low = true
                this.intermediate = true
                this.high = true
              } else {
                this.fontStrength = '中'
                this.feeble = true
                this.low = true
                this.intermediate = true
                this.high = false
              }
            } else if (isLetter >= 0) {
              this.fontStrength = '中'
              this.feeble = true
              this.low = true
              this.intermediate = true
              this.high = false
              if (isNumber >= 0) {
                this.fontStrength = '高'
                this.feeble = true
                this.low = true
                this.intermediate = true
                this.high = true
              } else {
                this.fontStrength = '中'
                this.feeble = true
                this.low = true
                this.intermediate = true
                this.high = false
              }
            } else {
              this.fontStrength = '低'
              this.feeble = true
              this.low = true
              this.intermediate = false
              this.high = false
            }
          } else {
            this.fontStrength = '弱'
            this.feeble = true
            this.low = false
            this.intermediate = false
            this.high = false
          }
        } else {
          this.paddHint = true
          this.fontStrength = ''
          this.feeble = false
          this.low = false
          this.intermediate = false
          this.high = false
        }
      this.clearsYes()
    }
  },
  mounted: function () {
    let numbreImg = Math.ceil(Math.random() * 17)
    let headImageUrl =
      '../../../static/images/headSculpture/' + numbreImg + '.png'
    this.numbreImg = headImageUrl
    this.$refs.headPortraits.src = this.numbreImg
     for (let i in this.walletInformation) {
        this.walletInformation.numbreImg = headImageUrl
     }
  }
}
</script>
<style lang="scss" scoped>
.createWallet {
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
  width: 100%;
  position: relative;
}
.main .hintTop {
  height: 75px;
  background-color: #fff;
  position: relative;
}
.main .hintTop span:nth-child(1) {
  height: 29px;
  width: 27px;
  background: url(../../../static/images/icon13.png) no-repeat;
  background-size: cover;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  left: 30px;
}
.main .hintTop p:nth-child(2) {
  line-height: 75px;
  padding-left: 70px;
  color: #ff2900;
  font-size: 22px;
}
.main .createAWallet {
  width: 562px;
  height: 754px;
  background-color: #fff;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 0 50px;
  position: relative;
  padding-top: 60px;
}
.main .createAWallet .fontStrength {
  position: absolute;
  right: 95px;
  top: 215px;
  color: #ff9000;
}
.main .createAWallet .headPortraits {
  width: 150px;
  height: 150px;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
}
.main .createAWallet .strength {
  position: absolute;
  right: 60px;
  top: 208px;
}
.main .createAWallet .strength ul li {
  height: 6px;
  width: 22px;
  background-color: #e5e5e5;
  border-radius: 30px;
  margin-bottom: 5px;
}
// 密码等级Li
.main .createAWallet .strength ul li.strengthFeeble {
  background-color: #ff0000;
}
.main .createAWallet .strength ul li.strengthLow {
  background-color: #ff6000;
}
.main .createAWallet .strength ul li.strengthIntermediate {
  background-color: #ff9000;
}
.main .createAWallet .strength ul li.strengthHigh {
  background-color: #ffb400;
}
.main .createAWallet input {
  border-bottom: 1px solid #b3b3b3;
  width: 100%;
  height: 60px;
  line-height: 60px;
  outline: none;
  margin-top: 38px;
}
.clear {
  position: absolute;
  height: 27px;
  width: 27px;
  background: url(../../../static/images/icon16.png) no-repeat;
  background-size: contain;
  top: 120px;
  right: 65px;
}
input::-webkit-input-placeholder {
  font-size: 26px;
  color: #b3b3b3;
}
.main .createAWallet .fontHint {
  width: 100%;
  margin-top: 20px;
  font-size: 18px;
  color: #ff4848;
  text-align: right;
}
.main .createAWallet .agreement {
  margin-top: 70px;
  position: relative;
}
.main .createAWallet .agreement > span {
  top: -3px;
  position: absolute;
  height: 31px;
  width: 30px;
  background: url(../../../static/images/icon6.png) no-repeat;
  background-size: cover;
}
.main .createAWallet .agreement > span.agree {
  top: -3px;
  position: absolute;
  height: 31px;
  width: 30px;
  background: url(../../../static/images/icon7.png) no-repeat;
  background-size: cover;
}
.main .createAWallet .agreement > p {
  position: absolute;
  left: 40px;
  color: #b3b3b3;
  font-size: 22px;
}
.main .createAWallet .agreement > p a {
  margin-left: 10px;
  font-size: 22px;
  color: #f16824;
}
.main button {
  width: 306px;
  height: 73px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 91px;
  background: url(../../../static/images/icon25.png) no-repeat;
  background-size: cover;
  border-radius: 40px;
  border: none;
  outline: none;
}
.main button.satisfy {
  width: 306px;
  height: 73px;
  background: url(../../../static/images/icon24.png) no-repeat;
  background-size: cover;
  border-radius: 40px;
  border: none;
  outline: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
