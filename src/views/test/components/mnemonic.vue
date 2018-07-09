<template>
    <div>
        <button @click="test">
            生成新测试助记词与账号
        </button>
    </div>
</template>

<script>
import bip39 from 'bip39'
import hdkey from 'hdkey'
import util from 'ethereumjs-util'

export default {
  data () {
      return {

      }
  },
  methods: {
    test () {
        let mnemonic = bip39.generateMnemonic()
        let seed = bip39.mnemonicToSeed(mnemonic)
        let hdWallet = hdkey.fromMasterSeed(seed)
        let key1 = hdWallet.derive("m/44'/60'/0'/0/0")
        let address1 = util.pubToAddress(key1._publicKey, true)
        let address1hex = util.toChecksumAddress(address1.toString('hex'))

        console.log('助记词是：' + mnemonic)
        console.log('地址是：' + address1hex)
        console.log('公钥是：' + key1._publicKey.toString('hex'))
        console.log('秘钥是：' + key1._privateKey.toString('hex'))
    }
  }
}
</script>
<style>
</style>
