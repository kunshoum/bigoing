<template>
    <div class="deal">
       <header>
            <div><img src="../../static/images/jiantouleft.png" alt=""></div>
            <div>交易记录</div>
            <div @click="open">
                <img src="../../static/images/rili@2x.png" alt="">
            </div>
        </header>
        <!-- 内容 -->
        <aside>
           <ul>
               <li v-for="(item,index) in list" :key="index" ref="flex">
                    <div class="red">
                        <img :src=item.imgs alt="">
                    </div>
                    <div class="content">
                        <div class="left">
                            <p>{{item.counterparty}}</p>
                            <p>{{item.time}}</p>
                        </div>
                        <div class="right">
                            <p>{{item.money}}</p>
                            <p>{{item.capital}}</p>
                        </div>
                    </div>
               </li>
           </ul>
        </aside>

        <div class="duo" @click="init">+加载更多</div>

        <!--选时间的模板-->
        <!-- 遮罩层 -->
        <div class="shade"></div>
        <!-- 遮罩层内容 -->
        <div class="time">
            <div class="top">
                <span class="cancel" @click="close">取消</span>
                <span class="confirm" @click="sure">确定</span>
            </div>
            <mt-picker
                ref="picker"
                :slots="slots"
                v-model="pickerValue"
                @change="onValuesChange">
            </mt-picker>
        </div>
    </div>
</template>

<script>
export default {
    beforeCreate () {
        this.$store.dispatch('registerWeb3')
    },
    data () {
        return {
            list: [],
            pickerValue: true,
            values: 0,
            shuju: '',
            showtoolbar: true,
            slots: [
                {
                    flex: 1,
                    // 月份默认值
                    defaultIndex: 0,
                    values: ['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月', '10月', '11月', '12月']
                }
            ]
        }
    },
    methods: {
        init () {
            console.log('begin')
            this.$store.dispatch('getFilter')
        },
        // 打开遮罩层
        open () {
            $('.shade').show()
            $('.time').show()
        },
        // 关闭遮罩层
        close () {
            $('.shade').hide()
            $('.time').hide()
        },
        onValuesChange (picker, values) {
            console.log(picker)
            console.log(values)
            this.shuju = values[0]
        },
        sure () {
            console.log(this.shuju)
            $('.shade').hide()
            $('.time').hide()
            // console.log("111")
        },
        add: function () {
            this.list.push(
                {
                    'imgs': '../../static/images/redmoney@2x.png',
                    'counterparty': 'asdfghjkl...qwertyuiop',
                    'time': '06/25',
                    'money': '+400.0000',
                    'capital': 'BTC'
                },
                {
                    'imgs': '../../static/images/redmoney@2x.png',
                    'counterparty': 'asdfghjkl...qwertyuiop',
                    'time': '06/25',
                    'money': '+400.0000',
                    'capital': 'BTC'
                },
                {
                    'imgs': '../../static/images/redmoney@2x.png',
                    'counterparty': 'asdfghjkl...qwertyuiop',
                    'time': '06/25',
                    'money': '+400.0000',
                    'capital': 'BTC'
                },
                {
                    'imgs': '../../static/images/redmoney@2x.png',
                    'counterparty': 'asdfghjkl...qwertyuiop',
                    'time': '06/25',
                    'money': '+400.0000',
                    'capital': 'BTC'
                }
            )
        }
    },
    mounted () {
        this.$http.get('../../../static/deal.json')
        .then((result) => {
            // console.log(result.data)
            this.list = result.data.data
            // console.log(this.list)
        })
    }
}
</script>

<style lang="scss" scoped>
    .deal{
        header{
            width: 100%;
            height:88px;
            background: url("../../static/images/nav.png") no-repeat left top;
            display: flex;
            justify-content: space-around;
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
            }
             div:nth-child(3){
                position: absolute;
                right: 30px;
                img{
                    width: 35px;
                    height: 35px;
                }
            }
        }

        aside{
            margin-top: 88px;
            ul{
                li{
                    width: 100%;
                    height: 103px;
                    display:flex;
                    border-bottom:1px solid #e6e6e6;
                    padding: 27px 0;
                    .red{
                        width: 20%;
                        display:flex;
                        justify-content:center;
                        align-items: center;
                        img{
                            width: 64px;
                            height: 64px;
                        }
                    }
                    .content{
                        width:85%;
                        display:flex;
                        justify-content:space-between;
                        align-items: center;
                        border-left:1px solid #e6e6e6;
                        .left{
                            padding:0 40px;
                            line-height: 40px;
                            color: #808080;
                            p:nth-child(1){ font-size: 26px;}
                            p:nth-child(2){ font-size: 24px;}
                        }
                        .right{
                            padding:0 40px;
                            line-height: 40px;
                            color: #ff2a00;
                            p:nth-child(1){font-size: 30px;}
                            p:nth-child(2){
                               float: right;
                               font-size: 22px;
                            }
                        }
                    }
                }
                li:nth-child(3){
                   .right{color: #333;}
                }
                li:nth-child(5){
                    .right{color: #333;}
                }
            }
        }

        // 加载更多
        .duo{
            margin-top:30px;
            color: #ff2a00;
            text-align: center;
            font-size: 24px;
        }
    }
</style>
