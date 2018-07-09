<template>
  <div class="desDev">
    <div class="richScan"></div>
    <div class="text">
      <p>直接复制粘贴以太坊官方钱包Keystore文件内容至输入框。或者直接通过生成Keystore内容生成二维码，扫描录入</p>
      <!-- <textarea placeholder="Keystore文本内容"></textarea> -->
      <textarea ref="rememberText" @keyup="verify()" placeholder="Keystore文本内容"></textarea>
      <input type="password" @keyup="verify()" ref="rememberPass" placeholder="Keystore密码">
    </div>
    <button v-bind:class="{satisfy:index}" @click="keystoreTest"></button>
  </div>
</template>

<script>
import ethUtil from 'ethereumjs-util'
import scrypt from 'scryptsy'
import cryptoF from 'crypto'

export default {
  name: 'desDev',
  data () {
    return {
      index: false,
      privatekey: '',
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
    // Keystore导入
    keystoreTest (evt) {
      if (this.index) {
        let _this = this
        let fileString = this.$refs.rememberText.value
        let passString = this.$refs.rememberPass.value
        let wallet = JSON.parse(fileString)
        let crypto = wallet.Crypto
        let password = passString
        let derivedKey
        if (crypto.kdf === 'scrypt') {
          derivedKey = scrypt(
            Buffer.from(password),
            Buffer.from(crypto.kdfparams.salt, 'hex'),
            crypto.kdfparams.n,
            crypto.kdfparams.r,
            crypto.kdfparams.p,
            crypto.kdfparams.dklen
          )
        } else if (crypto.kdf === 'pbkdf2') {
          if (crypto.kdfparams.prf !== 'hmac-sha256') {
            throw new Error('Unsupported parameters to PBKDF2')
          }
          derivedKey = cryptoF.pbkdf2Sync(
            Buffer.from(password),
            Buffer.from(crypto.kdfparams.salt, 'hex'),
            crypto.kdfparams.c,
            crypto.kdfparams.dklen,
            'sha256'
          )
        } else {
          throw new Error('Unsupported key derivation scheme')
        }
        let ciphertext = Buffer.from(crypto.ciphertext, 'hex')
        let mac = ethUtil.sha3(
          Buffer.concat([derivedKey.slice(16, 32), ciphertext])
        )
        if (mac.toString('hex') !== crypto.mac) {
          throw new Error('Key derivation failed - possibly wrong passphrase')
        }
        let decipher = cryptoF.createDecipheriv(
          crypto.cipher,
          derivedKey.slice(0, 16),
          Buffer.from(crypto.cipherparams.iv, 'hex')
        )
        let privateKey = Buffer.concat([
          decipher.update(ciphertext),
          decipher.final()
        ]).toString('hex')
        while (privateKey.length < 32) {
          let nullBuff = Buffer.from([0x00])
          privateKey = Buffer.concat([nullBuff, privateKey])
        }
        this.privatekeyTest(privateKey)
      }
      this.$router.push({ path: '/KeystoreIn' })
    },
    privatekeyTest (privateKey) {
      let privatekeyNew = '0x' + privateKey
      if (privatekeyNew !== '') {
        let address = ethUtil.toChecksumAddress(
          ethUtil
            .privateToAddress(
              Buffer.from(privatekeyNew.substring(2), 'hex'),
              'hex'
            )
            .toString('hex')
        )
        let walletInformation = JSON.parse(localStorage.getItem('walletInformation'))
        this.walletInformation.privateKey = privateKey
        this.walletInformation.address = address
        walletInformation.push(this.walletInformation)
        localStorage.setItem('walletInformation', JSON.stringify(walletInformation))
      }
    },
    verify: function () {
      if (
        this.$refs.rememberText.value.length !== '' &&
        this.$refs.rememberPass.value.length !== ''
      ) {
        this.index = true
      } else {
        this.index = false
      }
    }
  }
}
</script>

<!-- Add 'scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.desDev {
  position: relative;
}
.desDev .richScan {
  position: absolute;
  top: -180px;
  right: 30px;
  height: 33px;
  width: 33px;
  background: url(../../../../static/images/icon5.png) no-repeat;
  background-size: contain;
}
.desDev .text {
  padding: 0 30px;
  margin-top: 50px;
}
.desDev .text p {
  color: #808080;
  font-size: 26px;
  letter-spacing: 3px;
  line-height: 30px;
  margin-bottom: 40px;
}
.desDev .text textarea {
  width: 649px;
  height: 200px;
  padding: 20px;
  color: #b3b3b3;
  font-size: 26px;
  border: 1px solid #b3b3b3;
  margin-bottom: 30px;
}
.desDev .text input {
  border: none;
  border-bottom: 1px solid #eee;
  width: 100%;
  outline: none;
  margin-bottom: 100px;
  height: 40px;
  line-height: 40px;
}
input::-webkit-input-placeholder {
  font-size: 26px;
}
.desDev button {
  width: 306px;
  height: 73px;
  background: url(../../../../static/images/icon10.png) no-repeat;
  background-size: cover;
  border-radius: 40px;
  border: none;
  outline: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.desDev button.satisfy {
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
