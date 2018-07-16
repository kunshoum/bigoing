<template>
    <div>
        <div>
            请输入指令密码：<input type="text" name="" id="mnemonic" v-model="mnemonic" value="" />
            请输入私钥：<input type="text" name="" id="privateKey" v-model="privateKey" value="" />
            <button @click="keystoreTest">
                加密
            </button>
            <button @click="mnemonicTest">
                解密
            </button>
        </div>
    </div>
</template>

<script>
import { encrypt, decrypt } from '../../../assets/js/commonFunctions'

export default {
    data () {
        return {
          mnemonic: '',
          privateKey: ''
        }
    },
    methods: {
        keystoreTest () {
          // let decipher = cryptoF.publicEncrypt('qqqqqq', Buffer.from('065adc0fb433dd25a9306221c8e5f47b55315768f3831b9e1464399cbb6ac1fb'))

          // let ciphertext = tripledes.encrypt('aaaaaeeeee', '123').toString()
          // let plaintext = tripledes.decrypt(ciphertext, '123').toString(CryptoJS.enc.Utf8)

          // let key = CryptoJS.enc.Utf8.parse('key111111')
          // let iv = CryptoJS.enc.Utf8.parse('qweqweqwqwe')

          // let word = CryptoJS.enc.Utf8.parse('aaaaaeeeee')

          // let encrypted = CryptoJS.AES.encrypt(word, key,
          // {
          //     iv: iv,
          //     mode: CryptoJS.mode.CBC,
          //     padding: CryptoJS.pad.Pkcs7
          // })

          // // let wordq = CryptoJS.enc.Hex.parse(encrypted)
          // // let aaaa = CryptoJS.enc.Base64.stringify(wordq)

          // let baseResult = CryptoJS.enc.Base64.parse(encrypted.toString())
          // let ciphertext = CryptoJS.enc.Base64.stringify(baseResult)

          // let decrypted = CryptoJS.AES.decrypt(encrypted, key,
          // {
          //     iv: iv,
          //     mode: CryptoJS.mode.CBC,
          //     padding: CryptoJS.pad.Pkcs7
          // })

          let aaaa = encrypt('wwwwww', 'zhiling1111')
          let rrrr = decrypt('bfd11f7a2fe21675ed42982ef83a6825', 'zhiling1111')

          // console.log('加密：' + aaaa)
          console.log('解密：' + rrrr)
        },
        mnemonicTest () {

        }
    }
}
</script>
<style>
</style>
