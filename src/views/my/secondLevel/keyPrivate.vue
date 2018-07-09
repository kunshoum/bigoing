<template>
  <div class="keyPrivate">
    <div class="text">
       <textarea ref="remember" @keyup="verify()" placeholder="明文私钥"></textarea>
    </div>
    <button v-bind:class="{satisfy:index}" @click="privatekeyTest"></button>
  </div>
</template>

<script>
import ethUtil from 'ethereumjs-util'

export default {
  name: 'keyPrivate',
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
    // 私钥导入
    privatekeyTest () {
      let walletInformation = JSON.parse(localStorage.getItem('walletInformation'))
      let privatekey = this.$refs.remember.value
      if (this.index) {
        let address = ethUtil.toChecksumAddress(
          ethUtil
            .privateToAddress(
              Buffer.from(privatekey, 'hex'),
              'hex'
            )
            .toString('hex')
        )
        this.walletInformation.address = address
        this.walletInformation.privateKey = privatekey
        walletInformation.push(this.walletInformation)
        localStorage.setItem('walletInformation', JSON.stringify(walletInformation))
        this.$router.push({ path: '/privateKeyIn' })
      }
    },
    verify: function () {
      if (this.$refs.remember.value.length >= 64) {
        this.index = true
      } else {
        this.index = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.keyPrivate {
  position: relative;
}
.keyPrivate .text {
  padding: 0 30px;
  margin-top: 50px;
}
.keyPrivate .text textarea {
  width: 649px;
  height: 200px;
  padding: 20px;
  color: #b3b3b3;
  font-size: 26px;
  border: 1px solid #b3b3b3;
  margin-bottom: 100px;
}
.keyPrivate button {
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

.keyPrivate button.satisfy {
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
