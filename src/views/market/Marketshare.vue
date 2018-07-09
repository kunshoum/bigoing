<template>
    <div class="all">
        <div class="header"></div>
        <div class="content">
            <newCom :data="data"></newCom>
        </div>
        <div class="img">
        <img src="../../../static/images/foot.png">
        </div>
        <div class="footer">
                <div class="imgFot">
                    <router-link :to="{path:'/market'}">
                    <img src="../../../static/images/jian.png">
                    </router-link>
                </div>
            <div>
                <img src="../../../static/images/wechat.png">
            </div>
            <div>
                <img src="../../../static/images/Circle.png">
            </div>
            <div>
                <img src="../../../static/images/qq.png">
            </div>
            <div>
                <img src="../../../static/images/save.png">
            </div>
        </div>
    </div>

</template>
<script>
import axios from 'axios'
import newCom from './newCom'
export default {

    data () {
        return {
            data: []
        }
    },
      created () {
             axios.get('/static/test.json').then((res) => {
                this.data = res.data.data
                console.log(this.zhi)
            })
        },
     components: {
            newCom
        }
}
</script>
<style lang='scss'>
    .all{
        width: 100%;
        .header{
            width: 100%;
            height: 522px;
            background: url("../../../static/images/real.png") no-repeat;
            background-size:100% 100%;
        }
        .content{
            width: 685px;
            height: 705px;
            background: url("../../../static/images/circular.png") no-repeat;
            background-size:100% 100%;
            margin-top:-140px;
            margin-left: 40px;
            margin-right: 40px;
        }
        .img{
            width: 696px;
            height: 193px;
            margin-top: 30px;
            margin-left: 33px;
            margin-right: 33px;
            img{
                 width: 100%;
                 height: 193px;
            }
        }
        .footer{
            width:100%;
            height: 101px;
            background: url("../../../static/images/footer.png") no-repeat;
            background-size:100% 101px;
            margin-top: 46px;
            display: flex;
            justify-content: space-around;
            align-items: center;
                div{
                    width: 15%;
                    margin-top: 10px;

                img{
                    width: 40%;
                }
                }
                .imgFot{
                    width: 15%;
                    margin-left: 30px;
                    margin-top: 10px;
                    img{
                        width: 15%;
                    }
                }
            }
        }
</style>
