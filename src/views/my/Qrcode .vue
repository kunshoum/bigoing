<template>
    <div class="bigQuan">
        <div class="header">
            <div class="headEr">
                <router-link :to="{path:'/porperty'}">
                    <img src="../../../static/images/fanhui.png">
                </router-link>
            <p>我的二维码</p>
           <p></p>
           </div>
        </div>
        <div class="conten">
                 <img src="../../../static/images/touxiang.png">
                 <div class="zi">{{show}}</div>
                 <div class="contenEwm">
                      <canvas id="canvas"></canvas>
                 </div>
                 <button type="button" v-clipboard:copy="message"
                     v-clipboard:success="onCopy"
                     v-clipboard:error="onError">
                     复制收款地址
                 </button>
        </div>
    </div>
</template>
<script>
import QRCode from 'qrcode'
let Info = JSON.parse(window.localStorage.getItem('LoginAccount'))
export default {
     data () {
        return {
                message: Info.address,
                show: ''
        }
    },
    mounted () {
           this.show = Info.address
           QRCode.toCanvas(document.getElementById('canvas'), this.show, function (error) {
                if (error) console.error(error)
                console.log('success!')
            })
},
methods: {
    onCopy: function (e) {

    },
    onError: function (e) {
    }
}
}
</script>
<style lang='scss'>
     body{
         width:100%;
         background: whitesmoke;
        .bigQuan{
                width: 100%;
                position: relative;
                box-sizing: border-box;

            .header{
                 width: 750px;
                 height: 405px;
                 background: url("../../../static/images/ewm.png");
                 background-size: 750px 405px;
                 font-size: 32px;
                 color: #ffffff;
               .headEr{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 30px;
                      img{
                     width:18px;
                     height:33px;
                     margin-left: 30px;
                 }
               }
            }
            .conten{
             background: #ffffff;
            width: 688px;
            height: 911px;
            margin-left: 30px;
            border-radius: 25px;
            position: absolute;
            top: 210px;
            img{
                width: 187px;
                height: 187px;
                position: absolute;
                left: 37%;
                top: -66px;
            }
            .zi{
                position: absolute;
                left: 28%;
                top: 129px;
                font-size: 24px;
                color: #222222;
                width: 300px;
                height: 130px;
                word-break:break-all;
                letter-spacing: 5px;
            }
            .contenEwm{
                width:300px;
                height: 300px;
                position: absolute;
                left: 28%;
                top: 300px;
            }
            button{
                width: 541px;
                height: 70px;
                background: #f14e24;
                border-radius: 35px;
                color: #ffffff;
                border: 1px solid #f14e24;
                position: absolute;
                left: 12%;
                top: 750px;
            }
          }
        }
    }
</style>
