<template>
  <div class="privateKeyIn" >
      <!-- 头部 -->
      <div class="header">
          <div class="hTop">
                <span @click="cancel"></span>
                <div class="title">指令密码</div>
          </div>
      </div>
      <!-- 主体部分 -->
      <div class="main">
          <div class="hintTop">
              <span></span>
              <p>密码用于保护私钥和交易授权，请尽量提高您的密码安全等级</p>
          </div>
          <div class="circle"></div>
          <div class="createAWallet">
                <p class="topKeystoreHint">私钥导入成功</p>
                <p class="topKeystoreHint">请设置您的钱包信息</p>
                <input ref="walletName" @keyup="nameVerify" type="text" placeholder="钱包名称">
                <input ref="walletPass" @keyup="passVerify" type="password" placeholder="密码">
                <p class="fontHint" v-show="paddHint">不少于8位密码，建议混合大小写字母、数字、符号</p>
                <p class="fontStrength">{{fontStrength}}</p>
                <div class="strength">
                    <ul>
                        <li v-bind:class="{StrengthHigh:high}"></li>
                        <li v-bind:class="{StrengthIntermediate:intermediate}"></li>
                        <li v-bind:class="{StrengthLow:low}"></li>
                        <li v-bind:class="{StrengthFeeble:feeble}"></li>
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
      </div>
      <div class="footer">
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
      // passCloneOne: false,
      // 判断第二次输入密码与第一次是否一致
      passClone: false,
      // 密码提示
      passHint: false,
      // 是否勾选协议
      agrees: false,
      i: 0,
      btnShow: false,
      wallet: [{
        name: '',
        passOne: '',
        passHint: '',
        numbreImg: ''
      }]
    }
  },
  methods: {
    cancel: function () {
      this.$router.push({ path: '/keyPrivate' })
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
      let walletInformation = JSON.parse(localStorage.getItem('walletInformation'))
      let walletIndex = walletInformation.length - 1
      if (this.btnShow) {
        walletInformation[walletIndex].name = this.$refs.walletName.value
        walletInformation[walletIndex].passOne = this.$refs.walletPass.value
        walletInformation[walletIndex].passHint = this.$refs.passHint.value
        walletInformation[walletIndex].numbreImg = this.numbreImg
        localStorage.setItem('walletInformation', JSON.stringify(walletInformation))
        localStorage.setItem('LoginAccount', JSON.stringify(walletInformation[walletIndex]))
        this.$router.push({ path: '/porperty' })
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
      this.passCloneVerify()
      if (this.i % 2 === 0 && this.$refs.walletName.value.length > 0) {
        this.agrees = true
      } else {
        this.agrees = false
      }
      this.verify()
    },
    // 判断两次输入密码是否一致
    passCloneVerify: function () {
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
  }
}
</script>
<style lang="scss" scoped>
.createWallet {
  height: 100%;
}
.header {
  background: url(../../../static/images/icon1.png) no-repeat;
  height: 390px;
  width: 100%;
  background-size: cover;
}
.header .hTop {
  height: 88px;
  position: relative;
  line-height: 88px;
}
.header .hTop span {
  position: absolute;
  background: url(../../../static/images/icon12.png) no-repeat;
  left: 30px;
  width: 18px;
  height: 33px;
  background-size: 18px 33px;
  top: 50%;
  transform: translateY(-50%);
}
.header .hTop .title {
  width: 100%;
  color: #f2f2f2;
  font-size: 32px;
  text-align: center;
}
.main {
  background: url(../../../static/images/icon4.png) no-repeat;
  background-size: cover;
  height: 1073px;
  width: 100%;
  position: absolute;
  top: 270px;
}
.main .hintTop {
  position: absolute;
  height: 75px;
  background-color: #fff;
  top: -175px;
  padding: 0 30px;
  box-sizing: border-box;
  width: 100%;
}
.main .hintTop span:nth-child(1) {
  height: 29px;
  width: 27px;
  background: url(../../../static/images/icon13.png) no-repeat;
  background-size: cover;
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translateY(-50%);
}
.main .hintTop p:nth-child(2) {
  line-height: 75px;
  color: #ff2900;
  font-size: 22px;
  padding-left: 40px;
  box-sizing: border-box;
  width: 100%;
}
.main .circle {
  position: absolute;
  height: 123px;
  width: 123px;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  background: url(../../../static/images/icon8.png) no-repeat;
  background-size: cover;
  border-radius: 50%;
}
.main .createAWallet p.topKeystoreHint {
  font-size: 28px;
  color: #333;
  letter-spacing: 2px;
  width: 320px;
  margin: 0 auto;
  line-height: 40px;
  text-align: center;
}
.main .createAWallet {
  width: 100%;
  box-sizing: border-box;
  height: 754px;
  background-color: #fff;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 0 30px;
  position: relative;
}
.main .createAWallet .fontStrength {
  position: absolute;
  right: 95px;
  top: 225px;
  color: #ff9000;
}
.main .createAWallet .strength {
  position: absolute;
  right: 60px;
  top: 215px;
}
.main .createAWallet .strength ul li {
  height: 6px;
  width: 22px;
  background-color: #e5e5e5;
  border-radius: 30px;
  margin: 5px 0;
}
// 密码等级Li
.main .createAWallet .strength ul li.StrengthFeeble {
  background-color: #ff0000;
}
.main .createAWallet .strength ul li.StrengthLow {
  background-color: #ff6000;
}
.main .createAWallet .strength ul li.StrengthIntermediate {
  background-color: #ff9000;
}
.main .createAWallet .strength ul li.StrengthHigh {
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
  top: 130px;
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
  position: absolute;
  top: -3px;
  height: 30px;
  width: 30px;
  background: url(../../../static/images/icon6.png) no-repeat;
  background-size: contain;
}
.main .createAWallet .agreement > span.agree {
  position: absolute;
  top: -3px;
  height: 30px;
  width: 30px;
  background: url(../../../static/images/icon7.png) no-repeat;
  background-size: contain;
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
.footer button {
  width: 306px;
  height: 73px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 192px;
  background: url(../../../static/images/icon10.png) no-repeat;
  background-size: cover;
  border-radius: 40px;
  border: none;
  outline: none;
}
.footer button.satisfy {
  width: 306px;
  height: 73px;
  background: url(../../../static/images/icon22.png) no-repeat;
  background-size: cover;
  border-radius: 40px;
  border: none;
  outline: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
