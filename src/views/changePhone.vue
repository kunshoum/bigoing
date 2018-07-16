<template>
    <div class="changePhone">
        <!--头部-->
        <header>
            <div @click="back"><img src="../../static/images/jiantouleft.png"></div>
            <div>更换邮箱</div>
        </header>
        <aside>
            <ul>
                <li>
                    <span>绑定手机</span>
                    <span>132****7659</span>
                </li>
                <li>
                    <span>验证码</span>
                    <input type="text" placeholder="填写接收的验证码">
                    <div class="yan">
                        <span v-show="show" @click="getCode">获取验证码</span>
                        <span v-show="!show" class="count">{{count}}s</span>
                    </div>
                </li>
            </ul>
            <!-- 下一步 -->
            <router-link to="changeMailbox" tag="div" class="div1">
                <img src="../../static/images/next.png" alt="">
            </router-link>
        </aside>
    </div>
</template>
<script>
export default {
    data () {
        return {
            show: true,
            count: '',
            timer: null
        }
    },
    methods: {
        // 验证码倒计时
        getCode () {
            const TIME_COUNT = 5;
            if (!this.timer) {
                this.count = TIME_COUNT;
                this.show = false;
                this.timer = setInterval(() => {
                    if (this.count > 0 && this.count <= TIME_COUNT) {
                        this.count--;
                    } else {
                        this.show = true;
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                }, 1000)
            }
        },
        back () {
          this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
.changePhone{
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
    aside{
        margin-top: 30px;
        ul{
            background: #fff;
            color: #333;
            li{
                font-size: 30px;
                height: 120px;
            }
            li:nth-child(1){
                display: flex;
                justify-content: flex-start;
                align-items:center;
                margin: 0 auto;
                width: 92%;
                border-bottom: 1px solid #e6e6e6;
                span{padding: 0 20px;}
                span:nth-child(2){margin-left: 20px;color: rgb(153, 153, 153);}
            }
            li:nth-child(2){
                display: flex;
                justify-content: space-between;
                align-items:center;
                margin: 0 auto;
                width: 92%;
                border-bottom: 1px solid #e6e6e6;
                span:nth-child(1){padding: 0 20px;}
                input{
                    width:280px;
                    border: none;
                    outline: none;
                }
                .yan{
                    span:nth-child(1){
                        display: block;
                        line-height: 43px;
                        background: rgb(241, 84, 36);
                        border-radius: 10px;
                        text-align: center;
                        color: #fff;
                        font-size: 24px;
                    }
                    .count{
                        display: block;
                        width: 160px;
                        line-height: 43px;
                        background: #ccc;
                        border-radius: 10px;
                        text-align: center;
                        color: #fff;
                        font-size: 24px;
                    }
                }
            }
        }
        input::-webkit-input-placeholder{
            color: rgb(153, 153, 153);
        }
        .div1{
            margin-top: 616px;
            text-align: center;
            img{
                width: 420px;
                height: 90px;
                margin: 0 auto;
            }
        }
    }
}
</style>
