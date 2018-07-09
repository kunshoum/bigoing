<template>
    <div class="all">
            <div class="header">
            <img src="../../../static/images/return.png">
            <span>ETH</span>
            <span></span>
        </div>
        <div class="nav">
            <span>0.0036</span><span>≈￥2.33</span>
        </div>
        <div class="content">
            <p v-bind:class="{upload:flag}" ref="flexible">
               {{text.length>textLength?text.substring(0,100)+'...':text}}
            </p>
            <a @click="flexible">{{content}}</a>
        </div>
        <div class="main" ref="main">
            <div class="mainTwo" v-for="(item,key) in zhi" :key="key" v-bind:class="{uplade:flag}" ref="flex" v-if="key<num">
            <div class="mainTop">
                 <div>{{item.left}}</div>
                <div></div>
                <div>
                    <span>{{item.time}}</span>
                    <div class="spa"></div>
                </div>
            </div>
            <ul class="mainThr">
                <li>
                 <img :src=item.img>
                 <div>
                     <p class="top">{{item.top}}</p>
                     <p class="but">{{item.but}}</p>
                 </div>
                </li>
                <li>
                     <div>{{item.amount}}</div>
                     <div>{{item.capital}}</div>
                 </li>
            </ul>
            </div>
            <div class="more">
            <div class="toLoad" ref="stretch" @click="flex" v-show="num==3">{{content}}</div>
            <button><img src="../../../static/images/¥@2x.png"></button>
            </div>
        </div>
        <div class="footer">
            <button>转账</button>
            <button>收款</button>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            flag: true,
            content: '查看更多',
            cont: true,
            zhi: [],
            num: 3,
            text: 'Ethereum (以太坊是一个平台)和一种编程语言，使开发人员能够建立和发布下一代分布式应用。Etherum可以用来编程，分散，担保和交易任何事物：投票、域名，金融交易所、众筹、公司管理、合同和大部分的协议、知识产权Ethereum (以太坊是一个平台)和一种编程语言，使开发人员能够建立和发布下一代分布式应用。Etherum可以用来编程，分散，担保和交易任何事物：投票、域名，金融交易所、众筹、公司管理、合同和大部分的协议、知识产权Ethereum (以太坊是一个平台)和一种编程语言，使开发人员能够建立和发布下一代分布式应用。Etherum可以用来编程，分散，担保和交易任何事物：投票、域名，金融交易所、众筹、公司管理、合同和大部分的协议、知识产权',
            textLength: 100
       }
    },
    methods: {
        flexible: function () {
            if (this.textLength === 100) {
               this.textLength = 999999
                this.content = '收起更多'
            } else {
                this.content = '查看更多'
              this.textLength = 100
            }
        },
         flex: function () {
             this.num = 100
        }
    },
    mounted () {
        this.$http.get('../../../static/information.json').then((result) => {
            // console.log(result.data);
            this.zhi = result.data.data
            console.log(this.zhi)
        })
    }
}
</script>
<style lang='scss'>
body{
     background: ghostwhite;
          .all{
         width: 100%;
        .header{
            // width:100%;
            height: 88px;
            background: url("../../../static/images/header.png") no-repeat;
            background-size:cover;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 32px;
            color: #ffffff;
             img{
            width: 18px;
            height:33px;
            margin-left: 30px;
        }
        }
        .nav{
            text-align: center;
            color: #f04324;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 40px;
            margin-bottom: 34px;
            span:nth-of-type(1){
                font-size: 60px;
            }
            span:nth-of-type(2){
                font-size: 30px;
                margin-left: 8px;
            }
        }
        .content{
            width:692px;
            // height: 280px;
            background: url("../../../static/images/ewm.png");
            background-size:100% 100%;
            margin: 0 auto;
            border-radius: 15px;
            padding: 10px;
            p{
                font-size: 26px;
                line-height: 35px;
                overflow : hidden;
                text-overflow: ellipsis;
                white-space: wrap;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                color: #ffffff;
                letter-spacing:3px;
                margin-left: 15px;
                color: #fdad98;
                transition: all 0.5s;
            }
            p.upload{
                font-size: 26px;
                padding:20px;
                padding-bottom: 0px;
                overflow : hidden;
                text-overflow: ellipsis;
                transition: all 0.5s;
                white-space: wrap;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                color: #ffffff;
                letter-spacing:3px;
                margin-left: 15px;
                color: #fdad98;
            }
            a{
                margin-left: 560px;
                font-size:24px;
                color: #fdad98;
            }
        }
        .main{
             width:692px;
             margin: 0 auto;
             background: #ffffff;
             margin-top: 42px;
             border-radius:12px;
             .uplade{
                width: 100%;
                height: 190px;
                overflow: hidden;
                text-overflow: ellipsis;
                transition: all 0.5s;
                white-space: wrap;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
             }
             .mainTwo{
                width: 100%;
                height: 190px;
                overflow: hidden;
                text-overflow: ellipsis;
                transition: all 0.5s;
                white-space: wrap;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            .mainTop{
                display: flex;
                justify-content: space-between;
                padding: 16px 26px;
                position: relative;
                font-size: 24px;
                color: #666666;
                .spa{
                    width:55px;
                    height: 20px;
                    border-top: 1px solid #ff2a00;
                    position: absolute;
                    top: 80%;
                    left: 89%;
                }
            }
            .mainThr{
                list-style: none;
                display: flex;
                justify-content: space-between;
                border-bottom: 1px solid gainsboro;
                li:nth-of-type(1){
                        display: flex;
                        margin-left: 25px;
                        color: #666666;
                        font-size: 24px;
                        margin-bottom: 25px;
                     img{
                         width:64px;
                         height:64px;
                     }
                     div{
                          .top{
                                margin: 0;
                                margin-left: 18px;
                          }
                        .but{
                            margin: 0;
                            margin-left: 18px;
                            margin-top: 5px;
                          }
                     }
                }
                li:nth-of-type(2){
                        padding-right: 18px;
                    div:nth-of-type(1){
                            font-size: 30px;
                            color: #f04324;
                            margin: 0;
                            text-align: right;
                     }
                   div:nth-of-type(2){
                          font-size: 24px;
                          color: #fdad98;
                           margin: 0;
                            margin-top: 5px;
                            text-align: right;
                     }
                }
            }
        }
            .more{
                width: 100%;
                .toLoad{
                text-align: center;
                color: #f04324;
                font-size: 24px;
                padding: 30px;
            }
            button{
                position: fixed;
                left: 65%;
                top: 77%;
                background: none;
                border:none;
                img{
                    width: 122px;
                    height: 122px;
                }
            }
            }
        }
       .footer{
           display: flex;
           justify-content: space-around;
            margin-left: 30px;
            margin-top: 40px;
                button:nth-of-type(1){
                   background: #009944;
                   border: 1px solid #009944;
                   width: 306px;
                   height: 73px;
                   border-radius:50px;
                   color: white;
                   font-size: 30px;
               }
                button:nth-of-type(2){
                   background: #f14e24;
                   width: 306px;
                   height: 73px;
                   border: 1px solid #f14e24;
                   border-radius:50px;
                   color: white;
                   font-size: 30px;
               }
       }
    }
    }
</style>
