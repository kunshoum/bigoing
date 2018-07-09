<template>
  <div class="memory">
    <div class="text">
      <textarea ref="remember" @keyup="verify()" placeholder="助记词，按空格键分割"></textarea>
    </div>
    <button v-bind:class="{satisfy:index}" @click="mnemonicTest"></button>
  </div>
</template>

<script>
import bip39 from 'bip39'
import hdkey from 'hdkey'
import ethUtil from 'ethereumjs-util'

export default {
  name: 'memory',
  data () {
    return {
      index: false,
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
    // 助记词导入
    mnemonicTest () {
      let walletInformation = JSON.parse(localStorage.getItem('walletInformation'))
      this.mnemonic = this.$refs.remember.value
      let mnemonic = this.mnemonic
      if (this.index) {
        let seedBuffer = bip39.mnemonicToSeed(mnemonic)
        let hdWallet = hdkey.fromMasterSeed(Buffer.from(seedBuffer, 'hex'))
        let key1 = hdWallet.derive("m/44'/60'/0'/0/0")
        let address1 = ethUtil.pubToAddress(key1._publicKey, true)
        let address1hex = ethUtil.toChecksumAddress(address1.toString('hex'))
        this.walletInformation.address = address1hex
        this.walletInformation.privateKey = key1._privateKey.toString('hex')
        walletInformation.push(this.walletInformation)
        localStorage.setItem('walletInformation', JSON.stringify(walletInformation))
        this.$router.push({ path: '/mnemonicIn' })
      }
    },
    verify: function () {
      let regMemory = /^([A-Za-z]+\s){11}[A-Za-z]+$/
      let content = this.$refs.remember.value
      let isMity = regMemory.test(content)
      if (isMity) {
        this.index = true
      } else {
        this.index = false
      }
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.memory {
  position: relative;
}
.memory .text {
  padding: 0 30px;
  margin-top: 50px;
}
.memory .text textarea {
  width: 649px;
  height: 200px;
  padding: 20px;
  color: #b3b3b3;
  font-size: 26px;
  border: 1px solid #b3b3b3;
  margin-bottom: 100px;
}
.memory button {
  width: 306px;
  height: 73px;
  background: url(../../../../static/images/icon11.png) no-repeat;
  background-size: cover;
  border-radius: 40px;
  border: none;
  outline: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.memory button.satisfy {
  width: 306px;
  height: 73px;
  background: url(../../../../static/images/icon3.png) no-repeat;
  background-size: cover;
  border-radius: 40px;
  border: none;
  outline: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
