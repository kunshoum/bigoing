<template>
    <div class="key">
        <ul>
            <li class="keyText">
                <p>离线保存</p>
                <p>请复制粘贴Keystore文件到安全、离线的地方保存。切勿保存至邮箱、记事本、网盘、聊天工具等，非常危险</p>
            </li>
            <li class="keyText">
                <p>请勿使用网络传输</p>
                <p>请勿通过网络工具传输Keystore文件，一旦被黑客获取将造成不可挽回的资产损失。建议离线设备通过扫描二维码方式传输。</p>
            </li>
            <li class="keyText">
                <p>密码保险箱保存</p>
                <p>如需在线保存，则建议使用安全等级更高的1password 等密码保管软件保存Keystore</p>
            </li>
        </ul>
        <textarea class="keyPwd" ref="ctrlC" v-model="testText"></textarea>
        <button type="button" class="ctrlC" @click="copyUrl2">复制Keystore</button>
        <!-- 弹框 -->
        <div class=""></div>
    </div>
</template>
<script>
import util from 'ethereumjs-util'
import randomBytes from 'randombytes'
import scrypt from 'scryptsy'
import cryptoF from 'crypto'
import uuidV4 from 'uuid/v4'
export default {
  data () {
    return {
      password: '',
      address: '',
      privateKey: '',
      testText: ''
    }
  },
  methods: {
     qianbao () {
        this.$messagebox.confirm ('', {title: '请输入指令密码', message: '', showInput: true, confirmButtonText: '确认', confirmButtonClass: 'yes', showCancelButton: true}).then (action=>{
            this.test()
        })
    },
    test: function () {
      this.testText = JSON.stringify(this.toV3())
      localStorage.setItem('keyStory', JSON.stringify(this.toV3()))
    },
    toV3: function () {
      let salt = randomBytes(32)
      let iv = randomBytes(16)
      let derivedKey
      let kdf = 'scrypt'
      let kdfparams = {
        dklen: 32,
        salt: salt.toString('hex')
      }

      kdfparams.n = 8192
      kdfparams.r = 8
      kdfparams.p = 1
      derivedKey = scrypt(
        Buffer.from(this.password),
        salt,
        kdfparams.n,
        kdfparams.r,
        kdfparams.p,
        kdfparams.dklen
      )

      let cipher = cryptoF.createCipheriv(
        'aes-128-ctr',
        derivedKey.slice(0, 16),
        iv
      )
      if (!cipher) {
        throw new Error('Unsupported cipher')
      }
      let ciphertext = Buffer.concat([
        cipher.update(Buffer.from(this.privateKey.toString(), 'hex')),
        cipher.final()
      ])
      let mac = util.sha3(
        Buffer.concat([
          derivedKey.slice(16, 32),
          Buffer.from(ciphertext, 'hexss')
        ])
      )
      return {
        version: 3,
        id: uuidV4({
          random: randomBytes(16)
        }),
        address: this.address,
        Crypto: {
          ciphertext: ciphertext.toString('hex'),
          cipherparams: {
            iv: iv.toString('hex')
          },
          cipher: 'aes-128-ctr',
          kdf: kdf,
          kdfparams: kdfparams,
          mac: mac.toString('hex')
        }
      }
    },
    copyUrl2 () {
        this.$refs.ctrlC.select()
        document.execCommand('Copy')
        console.log(this.$refs.ctrlC.innerText)
    }
  },
  mounted () {
    this.qianbao()
    let walletInformation = JSON.parse(
      window.localStorage.getItem('LoginAccount')
    )
    this.address = walletInformation.address.slice(2)
    this.privateKey = walletInformation.privateKey
  }
}
</script>
<style>
.key {
  padding: 0 25px;
}
ul {
  margin: 30px auto 0;
}
ul li {
  list-style: none;
}
li > p:nth-child(1) {
  color: #333;
  font-size: 26px;
}
li > p:nth-child(2) {
  color: #666;
  font-size: 24px;
  line-height: 40px;
  margin: 28px 0;
}
.keyPwd {
  width: 650px;
  height: 310px;
  border: 1.5px solid #666;
  border-bottom: 0;
  border-radius: 10px;
  margin: 50px auto;
  padding: 20px 20px;
  overflow: hidden;
  word-break:break-all;
  line-height: 30px
}
.ctrlC {
  width: 690px;
  height: 70px;
  display: block;
  margin: -60px auto 0;
  border-radius: 10px;
  border: 0;
  background: #f15424;
  color: #fff;
}
</style>
