<template>
    <div class="setPassword">
        <!-- 头部 -->
        <header>
            <div @click="back"><img src="../../static/images/jiantouleft.png" alt=""></div>
            <div>登录密码</div>
        </header>
        <aside>
            <ul>
                <li>
                    <span>原登录密码</span>
                    <input type="password">
                </li>
                <li>
                    <span>新登录密码</span>
                    <input type="password">
                </li>
                <li>
                    <span>重复新密码</span>
                    <input type="password">
                </li>
            </ul>
            <div><img src="../../static/images/ok.png" alt=""></div>
        </aside>
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        back () {
          this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
.setPassword{
    //头部
    header{
        width: 100%;
        height:88px;
        background: url("../../static/images/nav.png") no-repeat left top;
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
        ul{
            padding: 0 30px;
            li{
                height: 130px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #f2f2f2;
                margin: 0 auto;
                span{
                    font-size: 30px;
                    color: #222;
                    margin-bottom: -40px;
                    padding: 0 30px;
                }
                input{
                    margin-left: 40px;
                    height: 40px;
                    margin-bottom: -40px;
                    border: none;
                    outline:none;
                }
            }
            li:nth-child(1){
                margin-top: 30px;
            }
        }
        div{
            margin-top: 485px;
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
