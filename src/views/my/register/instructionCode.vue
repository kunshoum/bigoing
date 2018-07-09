<template>
  <div class="instructionCode" >
    <div class="header">
        <span @click="cancel"></span>
        设置指令密码
    </div>
    <div class="main">
      <div class="notice">
        <h2>注意</h2>
        <p>指令密码十分重要，后续使用时的敏感操作均需验证指令密码，官方不会保存您的指令密码，遗忘后无法找回，请您一定要进行备忘，如抄写在纸上。</p>
      </div>
      <ul>
        <li class="phone">
          <input ref="walletPass" @keyup="passVerify" type="password" placeholder="设置指令密码">
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
        </li>
        <li class="verify">
          <input ref="walletPassClone" type="password" placeholder="再次输入">
        </li>
        <li class="verify">
          <input ref="passHint" type="text" placeholder="密码提示信息（可不填）">
        </li>
      </ul>
    </div>
    <div class="footer">
    <button @click="allVerify">完成</button>
    </div>
  </div>
</template>
<script>
import bip39 from 'bip39'
import hdkey from 'hdkey'
import util from 'ethereumjs-util'
export default {
  data () {
    return {
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
      btnShow: false,
      walletInformation: [{
        cloudWallet: 1,
        name: '云钱包',
        passOne: '',
        passHint: '',
        numbreImg: '',
        address: '',
        privateKey: '',
        TheMnemonicWord: '',
        assets: [ '0xd8912c10681d8b21fd3742244f44658dba12264e', '0xdac17f958d2ee523a2206206994597c13d831ec7' ],
        quotes: [ '0xd8912c10681d8b21fd3742244f44658dba12264e', '0xdac17f958d2ee523a2206206994597c13d831ec7' ]
      }]
    }
  },
  mounted: function () {
    let numbreImg = Math.ceil(Math.random() * 17)
    let headImageUrl =
      '../../../static/images/headSculpture/' + numbreImg + '.png'
    this.numbreImg = headImageUrl
  },
  methods: {
    // 生成地址私钥
    test: function (walletInformation) {
      let mnemonic = bip39.generateMnemonic()
      let seed = bip39.mnemonicToSeed(mnemonic)
      let hdWallet = hdkey.fromMasterSeed(seed)
      let key1 = hdWallet.derive("m/44'/60'/0'/0/0")
      let address1 = util.pubToAddress(key1._publicKey, true)
      let address1hex = util.toChecksumAddress(address1.toString('hex'))
      for (let i in this.walletInformation) {
        // this.walletInformation[i].TheMnemonicWord = mnemonic
        this.walletInformation[i].address = address1hex
        this.walletInformation[i].privateKey = key1._privateKey.toString('hex')
      }
    },
    cancel: function () {
      this.$router.push({ path: '/loginPassword' })
    },
    qianbaomima () {
      this.$messagebox({title: '密码格式输入有误，请重新输入', message: '   ', showInput: false, confirmButtonText: '确认', confirmButtonClass: 'yes', confirmButtonText: '确定'})
    },
    qianbaochongfumima () {
      this.$messagebox({title: '两次输入密码不一致，请重新输入', message: '   ', showInput: false, confirmButtonText: '确认', confirmButtonClass: 'yes', confirmButtonText: '确定'})
    },
    allVerify: function () {
      this.passCloneVerify()
      if (this.btnShow) {
        for (let i in this.walletInformation) {
          this.walletInformation[i].passOne = this.$refs.walletPass.value
          this.walletInformation[i].passHint = this.$refs.passHint.value
          this.walletInformation[i].numbreImg = this.numbreImg
        }
        this.test()
        let LoginAccount = this.walletInformation[0]
        localStorage.setItem('walletInformation', JSON.stringify(this.walletInformation))
        localStorage.setItem('LoginAccount', JSON.stringify(LoginAccount))
        this.$router.push({ path: '/yunWallet' })
      } else if (this.passClone === false) {
        this.qianbaochongfumima()
      } else if (this.paddHint) {
        this.qianbaomima()
      }
    },
    verify: function () {
      if (this.passClone && this.paddHint === false) {
        this.btnShow = true
      } else {
        this.btnShow = false
      }
    },
    // 验证两次输入密码是否一致
    passCloneVerify: function () {
      let walletPassClone = this.$refs.walletPassClone.value
      let walletPass = this.$refs.walletPass.value
      if (walletPassClone === walletPass) {
        this.passClone = true
      } else {
        this.passClone = false
      }
      this.verify()
    },
    // 第一次输入密码
    passVerify: function () {
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
        this.verify()
    }
  }
}
</script>
<style lang="scss" scoped>
.main ul li.phone .fontStrength {
  position: absolute;
  right: 60px;
  top: 45px;
  color: #ff9000;
}
.main ul li.phone .strength {
  position: absolute;
  right: 25px;
  top: 70px;
}
.main ul li.phone .strength ul li {
  height: 6px;
  width: 22px;
  background-color: #e5e5e5;
  border-radius: 30px;
  margin-bottom: 5px;
}
// 密码等级Li
.main ul li.phone .strength ul li.strengthFeeble {
  background-color: #ff0000;
}
.main ul li.phone .strength ul li.strengthLow {
  background-color: #ff6000;
}
.main ul li.phone .strength ul li.strengthIntermediate {
  background-color: #ff9000;
}
.main ul li.phone .strength ul li.strengthHigh {
  background-color: #ffb400;
}

.header {
  height: 82px;
  width: 100%;
  background: url(../../../../static/images/icon2.2.png) no-repeat;
  background-size: cover;
  padding-top: 47px;
  text-align: center;
  color: #fff;
  font-size: 34px;
  position: relative;
}
.header span {
  position: absolute;
  background: url(../../../../static/images/icon12.png) no-repeat;
  left: 30px;
  width: 18px;
  height: 33px;
  background-size: 18px 33px;
  top: 50%;
  transform: translateY(-50%);
}
::-webkit-input-placeholder {
  color: rgb(153, 153, 153);
  font-size: 28px;
}
.main {
  padding: 0 30px;
  box-sizing: border-box;
}
.main .notice {
  padding: 32px 15px 0 15px;
  margin: 48px 0 32px 0;
  height: 220px;
  width: 100%;
  box-sizing: border-box;
  background: url(../../../../static/images/icon2.4.png) no-repeat;
  background-size: cover;
}
.main .notice h2 {
  font-size: 30px;
  color: #fff;
  margin-bottom: 10px;
}
.main .notice p {
  color: #ffffff;
  font-size: 25px;
  letter-spacing: 2px;
  line-height: 33px;
}
.main > ul > li {
  position: relative;
  height: 90px;
  line-height: 90px;
  padding-top: 44px;
  border-bottom: 1px solid #eeeeee;
}
.main > ul > li.phone {
  position: relative;
}
.main > ul > li.phone .fontHint {
  position: absolute;
  top: 100px;
  right: 10px;
  width: 100%;
  margin-top: 20px;
  font-size: 18px;
  color: #ff4848;
  text-align: right;
}
.main > ul > li input {
  height: 30px;
  line-height: 30px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  padding-left: 40px;
  border: none;
}
.main > ul .verify button {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  /* background: url() no-repeat; */
  height: 43px;
  width: 143px;
  border: none;
  outline: none;
}
.footer {
  margin-top: 232px;
}
.footer button {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 430px;
  height: 90px;
  background: url(../../../../static/images/icon2.3.png) no-repeat;
  background-size: cover;
  color: #fff;
  border: none;
  outline: none;
  font-size: 36px;
}
</style>
