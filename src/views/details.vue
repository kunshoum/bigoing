<template>
    <div class="details">
        <header>
            <div><img src="../../static/images/jiantouleft.png" alt=""></div>
            <div>交易详情</div>
        </header>
        <aside>
            <div class="baise">
                <img src="../../static/images/chenggong.png" alt="">
                <div class="right">
                    <p>{{ String(this.$store.state.newHistory.value) }}</p>
                    <p>BTC</p>
                </div>
            </div>
            <div class="con1">
                <p>
                    <span>发款方:</span>
                    <span>{{ this.$store.state.newHistory.from }}</span>
                </p>
                <p>
                    <span>收款方:</span>
                    <span>{{ this.$store.state.newHistory.to }}</span>
                </p>
                <p>
                    <span>矿工费用:</span>
                    <span>{{ this.$store.state.newHistory.gasPrice }}</span>
                </p>
                <p>
                    <span>备注:</span>
                    <span></span>
                </p>
            </div>
            <div class="con2">
                <p>
                    <span>交易号:</span>
                    <span>{{ this.$store.state.newHistory.hash }}</span>
                </p>
                <p>
                    <span>区块:</span>
                    <span>{{ this.$store.state.newHistory.blockNumber }}</span>
                </p>
                <p>
                    <span>交易时间:</span>
                    <span>06/12/2018&nbsp;&nbsp;&nbsp;&nbsp;14:34:18</span>
                </p>
            </div>
            <div class="foot">
                <img src="../../static/images/erweima.png" alt="">
                <p><img src="../../static/images/url.png" alt=""></p>
            </div>
        </aside>
    </div>
</template>
<script>
let TxHash = ''

export default {
    beforeCreate () {
        this.$store.dispatch('registerWeb3')
    },
    data () {
        return {
            TxHash: '0xf2d70f41d2ae6ecb66518fdcb9f9e318429e6c75c8f6532d6311f0a094c637bf'
        }
    },
    computed: {
        currentWeb3: function () {
          return this.$store.state.web3index
        }
    },
    watch: {
        currentWeb3: function () {
            this.$store.dispatch('getTransaction', this.TxHash)
        }
    }
}
</script>
<style lang="scss" scoped>
    .details{
        //头部
        height:1350px;
        background: url("../../static/images/bg.png") no-repeat;
        background-size: 100% 100%;
        header{
            width: 100%;
            height:88px;
            display: flex;
            justify-content: center;
            align-items:center;
            position: relative;
            div:nth-child(1){
                position: absolute;
                left: 30px;
                img{
                    width: 18px;
                    height: 33px;
                }
            }
            div:nth-child(2){
                color: #fff;
                font-size: 32px;
                text-align: center;
            }
        }
        aside{
            width: 626px;
            height: 1122px;
            background: url("../../static/images/baise.png") no-repeat;
            background-size: 100% 100%;
            margin: 0 auto;
            margin-top: 47px;
            position: relative;
            .baise{
                // border: 1px solid;
                width: 100%;
                display: flex;
                justify-content: space-around;
                img{
                    position: absolute;
                    width: 248px;
                    height: 248px;
                    top:-60px;
                    left: 0;
                }
                .right{
                    // border: 1px solid;
                    margin-top: 90px;
                    margin-left:300px;
                    p:nth-child(1){
                        font-size: 50px;
                        color: #d02200
                    }
                    p:nth-child(2){
                        margin-top: 27px;
                        float: right;
                        color: #111;
                        font-size: 30px;
                    }
                }
            }
            .con1{
                padding:30px 30px;
                // border: 1px solid blue;
                p{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    line-height:60px;
                    span:nth-child(1){
                       color: #666;
                       font-size: 26px;
                    }
                    span:nth-child(2){
                        color: #111;
                        font-size: 24px;
                    }
                }
            }
            .con2{
                padding: 30px 30px;
                // border: 1px solid red;
                p{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    line-height: 60px;
                    span:nth-child(1){
                       color: #666;
                       font-size: 26px;
                    }
                    span:nth-child(2){
                        color: #111;
                        font-size: 24px;
                    }
                }
                p:nth-child(1){
                    span:nth-child(2){
                       color: #fe3c00;
                    }
                }
            }
            .foot{
                text-align: center;
                margin-top: 30px;
                img{
                    width: 207px;
                    height: 198px;
                    margin-top:60px;
                }
                p{
                    margin-top: -50px;
                    img{
                        width: 183px;
                        height: 57px;
                    }
                }
            }
        }
    }
</style>
