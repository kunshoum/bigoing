<template>
    <div class="bindingPhone">
        <!--头部-->
        <header>
            <div @click="back"><img src="../../static/images/jiantouleft.png"></div>
            <div>绑定邮箱</div>
        </header>
        <div class="phone">
            <span>邮箱</span>
            <span>1324096759@qq.com</span>
            <span @click="show()">更换邮箱</span>
        </div>
        <!-- 遮罩层 -->
        <div class="shade1" v-show="showCont">
            <!-- 遮罩层内容 -->
            <div class="yzm">
                <ul>
                    <li>选择您要接收验证码的方式</li>
                    <router-link to="changePhone" tag="li">
                        <div :class="{active:shows == 1}" @click="yuanshow()">
                            <span>绑定手机</span>
                        </div>
                    </router-link>
                    <router-link to="bindingMailbox" tag="li">
                        <div :class="{active:shows == 2}" @click="bangshow()">
                            <span>原绑定邮箱</span>
                        </div>
                    </router-link>
                    <li @click="hidden()">取消</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            showCont: false,
            shows: 0
        }
    },
    methods: {
        // 打开遮罩层
        show () {
            this.showCont = true
        },
        // 关闭遮罩层
        hidden () {
            let that = this
            that.showCont = false
        },
        yuanshow: function () {
            console.log(11111)
            this.shows = 1
        },
        bangshow: function () {
            console.log(22222)
            this.shows = 2
        },
        back () {
          this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
.bindingPhone{
    //头部
    header{
        width: 100%;
        height:88px;
        background: url("../../static/images/nav.png") no-repeat left top;
        display: flex;
        justify-content: center;
        align-items:center;
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
    .phone{
        width: 85%;
        height: 130px;
        border-bottom: 1px solid #f2f2f2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px;
        margin: 0 auto;
        span:nth-child(1){
            font-size: 30px;
            color: rgb(34, 34, 34);
            margin-bottom: -40px;
        }
        span:nth-child(2){
            margin-bottom: -40px;
            color: rgb(153, 153, 153);
            font-size: 30px;
        }
        span:nth-child(3){
            font-size: 24px;
            margin-bottom: -40px;
            color: rgb(241, 84, 36);
        }
    }
    // 点击手机号   显示遮罩层
    .shade1{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background:rgba(0,0,0,0.6);
        filter:Alpha(opcity=60);
        .yzm{
            width: 631px;
            border-radius: 10px;
            margin-top:30px;
            height: 430px;
            position: fixed;
            top:30%;
            left: 70px;
            z-index:900;
            background: #fff;
            text-align: center;
            ul{
                li{
                    img{width: 320px;height: 69px;}
                }
                li:nth-child(1){margin-top: 50px;font-size: 32px;}
                li:nth-child(2){
                    margin-top: 55px;
                    div{
                        width: 320px;
                        line-height: 69px;
                        border-radius: 34px;
                        border: 2px solid rgb(241, 84, 36);
                        margin: 0 auto;
                        span{
                            font-size: 32px;
                            color: rgb(241, 84, 36);
                        }
                    }
                    .active{
                        background:rgb(241, 84, 36);
                        span{color: #fff;}
                    }
                }
                li:nth-child(3){
                    margin-top: 30px;
                    div{
                        width: 320px;
                        line-height: 69px;
                        border-radius: 34px;
                        border: 2px solid rgb(241, 84, 36);
                        margin: 0 auto;
                        span{
                            font-size: 32px;
                            color: rgb(241, 84, 36);
                        }
                    }
                    .active{
                        background:rgb(241, 84, 36);
                        span{color: #fff;}
                    }
                }
                li:nth-child(4){
                    margin-top: 50px;
                    font-size: 32px;
                    color: rgb(241, 84, 36)
                }
            }
        }
    }
}
</style>
