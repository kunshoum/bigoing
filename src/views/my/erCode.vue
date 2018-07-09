<template>
    <div class="erCode">
        <ul>
            <li class="keyText">
                <p>请勿使用网络传输</p>
                <p>二维码禁止保存、截图、以及拍照。仅供用户在安全环境下直接扫描来方便的导入钱包</p>
            </li>
            <li class="keyText">
                <p>仅供直接扫描</p>
                <p>请在确保四周无人及无摄像头的情况下使用。二维码一旦被他人获取将造成不可挽回的资产损失</p>
            </li>
        </ul>
        <div class="code">
            <div class="erCodeImg" ref="erCodeImg">
                <img src="../../../static/img/purseImg/logo.png"/>
            </div>
             <ul ref="keyText">
                <li class="keyText">
                    <p>请勿使用网络传输</p>
                    <p>请在确保四周无人及无摄像头的情况下使用。二维码一旦被他人获取将造成不可挽回的资产损失</p>
                </li>
            </ul>
            <canvas id="canvas" ref="canv"></canvas>
            <button type="button" class="toErCode" @click="random" ref="erCode">获取二维码</button>
        </div>
    </div>
</template>
<script>
import QRCode from 'qrcode'
export default {
    data () {
        return {
            keyStory: ''
        }
    },
    mounted () {
        this.keyStory = window.localStorage.getItem('keyStory')
        console.log(window.localStorage.getItem('keyStory'))
        console.log(this.$refs.erCode)
    },
    methods: {
        random () {
            this.$refs.canv.style.display = 'block'
            this.$refs.erCodeImg.style.display = 'none'
            this.$refs.keyText.style.display = 'none'
            this.$refs.erCode.style.display = 'none'
            QRCode.toCanvas(document.getElementById('canvas'), this.keyStory, function (error) {
                if (error) console.error(error)
                console.log('success!')
            })
        }
    }
}
</script>
<style scoped>
.erCode {
    padding: 0 25px
}
ul {
    margin:30px auto 0
}
 ul li {
     list-style: none;
 }
 li>p:nth-child(1) {
     color: #333;
     font-size: 26px
 }
 li>p:nth-child(2) {
     color: #666;
     font-size: 24px;
     line-height: 40px;
     margin: 25px 0;
 }
 .code {
     width: 561px;
     height: 550px;
     background: #FAFAFA;
     border-radius: 10px;
     margin: 110px auto;
     padding: 20px
 }
 .erCodeImg {
     margin:53px auto;
     width: 117px;
     height: 94px
 }
 .erCodeImg>img {
     width: 117px;
     height: 94px
 }
 .toErCode {
     width: 264px;
     height: 75px;
     background: #F15424;
     display: block;
     color: #fff;
     margin:75px auto;
     border: 0px;
     border-radius: 10px;
     outline: none
 }
 #canvas {
     display: none;
     height: 450px !important;
     width: 450px !important;
     margin: 10% 0 0 10%
 }

</style>
