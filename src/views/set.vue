<template>
    <div class="set">
        <!-- 头部 -->
        <header>
            <div>
                <router-link :to="{path:'/cloudMe'}">
                    <img src="../../static/images/jiantouleft.png" alt="">
                </router-link>
            </div>
            <div>设置</div>
        </header>
        <!-- 内容 -->
        <aside>
            <ul>
                <router-link tag="li" to="">
                    <span>登录密码</span>
                    <img src="../../static/images/jiantouright.png" alt="">
                </router-link>
                <router-link tag="li" to="">
                    <span>手机号</span>
                    <img src="../../static/images/jiantouright.png" alt="">
                </router-link>
                <router-link tag="li" to="">
                    <span>邮箱</span>
                    <img src="../../static/images/jiantouright.png" alt="">
                </router-link>
            </ul>
        </aside>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
.set{
    background: #f2f2f2;
    height:18rem;
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
        margin-top: 12px;
        ul{
            background: #fff;
            color: #333;
            li{
                display: flex;
                justify-content: space-between;
                align-items:center;
                height: 101px;
                span{ font-size: 28px; }
                img{
                    width: 13px;
                    height: 25px;
                }
            }
            li:nth-child(1){
                margin: 0 auto;
                width: 92%;
                border-bottom: 1px solid #e6e6e6;
                span{
                    font-size: 28px;
                    padding: 0 15px;
                }
                img{
                    width: 13px;
                    height: 25px;
                    padding: 0 15px;
                }
            }
            li:nth-child(2){
                margin: 0 auto;
                width: 92%;
                border-bottom: 1px solid #e6e6e6;
                span{
                    font-size: 28px;
                    padding: 0 15px;
                }
                img{
                    width: 13px;
                    height: 25px;
                    padding: 0 15px;
                }
            }
            li:nth-child(3){
                margin: 0 auto;
                width: 92%;
                span{
                    font-size: 28px;
                    padding: 0 15px;
                }
                img{
                    width: 13px;
                    height: 25px;
                    padding: 0 15px;
                }
            }
        }
    }
}
</style>
