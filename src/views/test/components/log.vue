<template>
    <div>
        <div>
            <button @click="keystoreTest">
                获取
            </button>
        </div>
    </div>
</template>

<script>
const etherscanapi = require('etherscan-api').init('GCGR1C9I17TYIRNYUDDEIJH1K5BRPH4UDE')

export default {
    props: ['data'],
    data () {
        return {
          mnemonic: '',
          privateKey: ''
        }
    },
    methods: {
        keystoreTest () {
          const StartService = async () => {
            let account = '0x4D6641feF0b2949B613e38d0441B22CB307E3EFD'

            let ret = await etherscanapi.account.txlist(account,
            this.data,
            'latest',
            'desc'
            )

            if (ret.status === '1') {
                for (let i = 0; i < ret.result.length; ++i) {
                    let item = ret.result[i]

                    let other = null
                    let direction = null
                    if (item.from === account) {
                        other = item.to
                        direction = '=>'
                    } else {
                        other = item.from
                        direction = '<='
                    }

                    if (item.value > 0 && item.input === '0x') {
                        // ETH 转账
                        console.log('[ETH转账] %s %s %s value: %s hash：%s time：%s', account, direction, other, item.value, item.hash, item.timeStamp)
                    }/* else if (item.input !== '0x') {
                        // 调用 transfer 函数
                        let fun = item.input.substr(0, 34);
                        if (fun === '0xa9059cbb000000000000000000000000') {
                            let target = '0x' + item.input.substr(34, 40);
                            let value = new BigNumber('0x' + item.input.substr(74)).toString();
                            console.log('[Token转账] [%s] %s %s %s value: %s', other, account, direction, target, value);
                        }
                    } */
                }
            }

            let ret1 = await etherscanapi.account.tokentx(account, null, // 可以填一个具体合约地址在这，null是全部
                this.data,
                'latest',
                'desc'
                )

            if (ret1.status === '1') {
                for (let i = 0; i < ret1.result.length; ++i) {
                    let item = ret1.result[i]

                    let other = null
                    let direction = null
                    if (item.from === account) {
                        other = item.to
                        direction = '=>'
                    } else {
                        other = item.from
                        direction = '<='
                    }

                    if (item.value > 0) {
                        // ETH 转账
                        console.log('[%s转账] token=%s %s %s %s value: %s hash：%s time：%s', item.tokenSymbol, item.contractAddress, account, direction, other, item.value, item.hash, item.timeStamp)
                    }
                }
            }
          }

          StartService()
        }
    }
}
</script>
<style>
</style>
