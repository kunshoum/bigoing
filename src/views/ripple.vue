<template>
    <div class="ripple">
        <!--头部-->
        <header>
            <div><img src="../../static/images/jiantouleft.png"></div>
            <div>瑞波币</div>
        </header>
        <aside>
            <div class="top">
                <div class="left">
                    <p><b>￥3.419</b><b> - 3.21%</b></p>
                    <p>市值： ￥1314 亿</p>
                    <p>24H交易额：314 亿</p>
                </div>
                <div class="right">
                    <img src="../../static/images/zixuan.png" alt="">
                </div>
            </div>
            <!-- 文字部分  展开、收起-->
            <div class="con">
                <p v-bind:class="{upload:flag}" ref="fiexible">
                    {{text.length>textLength?text.substring(0,80)+'. . .':text}}
                </p>
                <a @click="flexible">{{content}}</a>
            </div>

            <div class="down">
                <ul>
                    <li>
                        <span>项目启动日期</span>
                        <span>2018.08</span>
                    </li>
                    <li>
                        <span>基础链</span>
                        <span>Ethereum</span>
                    </li>
                    <li>
                        <span>总量</span>
                        <span>2,037,654,028 FT</span>
                    </li>
                    <li>
                        <span>流通率</span>
                        <span>65%</span>
                    </li>
                    <li>
                        <span>换手率</span>
                        <span>1204.28%</span>
                    </li>
                    <li>
                        <span>最大量</span>
                        <span>10.000.000.000 FT</span>
                    </li>
                    <li>
                        <span>上架交易所数量</span>
                        <span>88</span>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
</template>

<script>
export default {
    data () {
        return {
            flag: true,
            'content': '展开',
            num: 3,
            text: '瑞波币是Ripple网络的基础货币，它可以在整ripple网火种流通，总数量1000亿，并随着交易的增多而逐步减少，瑞波币的运营公司为Ripple Labs瑞波币是Ripple网络的基础货币，它可以在整ripple网火种流通，总数量1000亿，并随着交易的增多而逐步减少，瑞波币的运营公司为Ripple Labs瑞波币是Ripple网络的基础货币',
            textLength: 100
        }
    },
    methods: {
        flexible: function () {
            if (this.textLength === 100) {
                this.textLength = 999
                this.content = '收起'
                this.flag = false
            } else {
                this.content = '展开'
                this.textLength = 100
                this.flag = true
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.ripple{
    //头部
    header{
        width: 100%;
        height:88px;
        background: url("../../static/images/nav.png") no-repeat left top;
        display: flex;
        justify-content: center;
        align-items:center;
        position: fixed;
        top: 0;
        left: 0;
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
        margin-top: 88px;
        .top{
            padding: 36px 52px;
            display: flex;
            justify-content: space-between;
            .left{
                p:nth-child(1){
                    font-weight:bold;
                    color: rgb(237, 30, 18);
                    b:nth-child(1){
                        margin-left: -10px;
                        font-size: 60px;
                    }
                    b:nth-child(2){font-size: 30px;}
                }
                p:nth-child(2){
                    font-weight:bold;
                    margin-top: 34px;
                    font-size: 26px;
                    color: rgb(34, 34, 34);
                }
                p:nth-child(3){
                    font-weight:bold;
                    margin-top: 24px;
                    font-size: 26px;
                    color: rgb(34, 34, 34);
                }
            }
            .right{
                img{
                    width: 134px;
                    height: 44px;
                    margin-top: 60px;
                }
            }
        }
        .con{
            padding: 20px 40px;
            background: url("../../static/images/wenzi.png") no-repeat 50% 50%;
            background-size: 95% 95%;
            color: #fff;
            margin:0 auto;
            line-height: 45px;
            font-size: 28px;
            margin: 0 auto;
            p{
                font-size: 28px;
                height: 320px;
                overflow : hidden;
                text-overflow: ellipsis;
                white-space: wrap;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                color: #fff;
                transition: all .3s;
            }
            p.upload{
                font-size: 28px;
                height: 140px;
                overflow : hidden;
                text-overflow: ellipsis;
                white-space: wrap;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                color: #fff;
                transition: all .3s;
            }
            a{
                display: flex;
                justify-content: flex-end;
                margin-top: -50px;
                margin-right: 20px;
                font-size:26px;
                text-decoration: underline;
                color: rgb(196, 194, 194);
            }
        }
        .down{
            ul{
                margin-top: 38px;
                li{
                  width: 696px;
                  line-height: 104px;
                  margin: 0 auto;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                    span:nth-child(1){
                      color: rgb(102, 102, 102);
                      font-size: 28px;
                      margin-left:24px;
                    }
                    span:nth-child(2){
                      color: rgb(34, 34, 34);
                      font-size: 28px;
                      margin-right: 24px;
                    }
                }
                li:nth-child(odd){
                    background: rgb(255, 248, 247);
                }
            }
        }
    }
}
</style>
