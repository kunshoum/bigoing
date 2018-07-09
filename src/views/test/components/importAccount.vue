<template>
    <div>
        <div>
            请输入助记符<input type="text" name="" id="mnemonic" v-model="mnemonic" value="" />
            <button @click="mnemonicTest">
                助记符找回账号
            </button>
        </div>
        <div>
            请输入密钥<input type="text" name="" id="privatekey" v-model="privatekey" value="" />
            <button @click="privatekeyTest">
                密钥找回账号
            </button>
        </div>
        <div>
            上传文件 ： <input type="file" name="file" id="fileId"/>
            <input type="text" name="" id="keyPassword" v-model="keyPassword" value="" />
            <button  type="submit" name="btn" value="提交" id="btnId" @click="keystoreTest" >
                提交
            </button>
        </div>
    </div>
</template>

<script>
import bip39 from 'bip39'
import hdkey from 'hdkey'
import ethUtil from 'ethereumjs-util'
import $ from 'jquery'
import scrypt from 'scryptsy'
import cryptoF from 'crypto'

export default {
    data () {
        return {
            mnemonic: '',
            privatekey: '',
            keyPassword: ''
        }
    },
    methods: {
        mnemonicTest () {
            let mnemonic = this.mnemonic

            if (mnemonic !== '') {
                let seedBuffer = bip39.mnemonicToSeed(mnemonic)
                let seedAsHex = seedBuffer.toString('hex')
                let hdWallet = hdkey.fromMasterSeed(Buffer.from(seedBuffer, 'hex'))
                let key1 = hdWallet.derive("m/44'/60'/0'/0/0")
                let address1 = ethUtil.pubToAddress(key1._publicKey, true)
                let address1hex = ethUtil.toChecksumAddress(address1.toString('hex'))

                console.log('种子是：' + seedAsHex)
                console.log('地址是：' + address1hex)
                console.log('公钥是：' + key1._publicKey.toString('hex'))
                console.log('秘钥是：' + key1._privateKey.toString('hex'))
            }
        },
        privatekeyTest () {
            let privatekey = '0x' + this.privatekey

            if (privatekey !== '') {
                let address = ethUtil.toChecksumAddress(ethUtil.privateToAddress(Buffer.from(privatekey.substring(2), 'hex'), 'hex').toString('hex'))

                console.log('地址是：' + address)
            }
        },
        keystoreTest () {
            let _this = this
            let objFile = document.getElementById('fileId')
            if (objFile.value === '') {
                alert('不能空')
            }

            let files = $('#fileId').prop('files')
            if (files.length === 0) {
                alert('请选择文件')
            } else {
                let reader = new FileReader()
                reader.readAsText(files[0], 'UTF-8')
                reader.onload = function (evt) {
                    let fileString = evt.target.result

                    let wallet = JSON.parse(fileString)
                    let crypto = wallet.Crypto

                    let password = _this.keyPassword

                    let derivedKey
                    if (crypto.kdf === 'scrypt') {
                        derivedKey = scrypt(Buffer.from(password), Buffer.from(crypto.kdfparams.salt, 'hex'), crypto.kdfparams.n, crypto.kdfparams.r, crypto.kdfparams.p, crypto.kdfparams.dklen)
                    } else if (crypto.kdf === 'pbkdf2') {
                        if (crypto.kdfparams.prf !== 'hmac-sha256') {
                            throw new Error('Unsupported parameters to PBKDF2')
                        }
                        derivedKey = cryptoF.pbkdf2Sync(Buffer.from(password), Buffer.from(crypto.kdfparams.salt, 'hex'), crypto.kdfparams.c, crypto.kdfparams.dklen, 'sha256')
                    } else {
                        throw new Error('Unsupported key derivation scheme')
                    }
                    let ciphertext = Buffer.from(crypto.ciphertext, 'hex')
                    let mac = ethUtil.sha3(Buffer.concat([derivedKey.slice(16, 32), ciphertext]))
                    if (mac.toString('hex') !== crypto.mac) {
                        throw new Error('Key derivation failed - possibly wrong passphrase')
                    }
                    let decipher = cryptoF.createDecipheriv(crypto.cipher, derivedKey.slice(0, 16), Buffer.from(crypto.cipherparams.iv, 'hex'))
                    let privateKey = Buffer.concat([decipher.update(ciphertext), decipher.final()]).toString('hex')
                    while (privateKey.length < 32) {
                        let nullBuff = Buffer.from([0x00])
                        privateKey = Buffer.concat([nullBuff, privateKey])
                    }

                    console.log('密钥是：' + privateKey)
                }
            }
        },
        generateDerivedScryptKey (password, salt, n, r, p, dkLen) {

        },
        stringToByte (str) {
            let bytes = new Array()
            let len, c
            len = str.length
            for (let i = 0; i < len; i++) {
                c = str.charCodeAt(i)
                if (c >= 0x010000 && c <= 0x10FFFF) {
                    bytes.push(((c >> 18) & 0x07) | 0xF0)
                    bytes.push(((c >> 12) & 0x3F) | 0x80)
                    bytes.push(((c >> 6) & 0x3F) | 0x80)
                    bytes.push((c & 0x3F) | 0x80)
                } else if (c >= 0x000800 && c <= 0x00FFFF) {
                    bytes.push(((c >> 12) & 0x0F) | 0xE0)
                    bytes.push(((c >> 6) & 0x3F) | 0x80)
                    bytes.push((c & 0x3F) | 0x80)
                } else if (c >= 0x000080 && c <= 0x0007FF) {
                    bytes.push(((c >> 6) & 0x1F) | 0xC0)
                    bytes.push((c & 0x3F) | 0x80)
                } else {
                    bytes.push(c & 0xFF)
                }
            }
            return bytes
        },
        byteToString (arr) {
            if (typeof arr === 'string') {
                return arr
            }
            let str = ''
            let _arr = arr
            for (let i = 0; i < _arr.length; i++) {
                let one = _arr[i].toString(2)
                let v = one.match(/^1+?(?=0)/)
                if (v && one.length === 8) {
                    let bytesLength = v[0].length
                    let store = _arr[i].toString(2).slice(7 - bytesLength)
                    for (let st = 1; st < bytesLength; st++) {
                        store += _arr[st + i].toString(2).slice(2)
                    }
                    str += String.fromCharCode(parseInt(store, 2))
                    i += bytesLength - 1
                } else {
                    str += String.fromCharCode(_arr[i])
                }
            }
            return str
        },
        get16 (data) {
            let len = data.length

            for (let i = 0; i < 16 - len; i++) {
                data.push(0)
            }

            return data
        }
    }
}
</script>
<style>
</style>
