<template>
<div class="comMit">
<div class="bigTwo">
    <router-link :to="{path:'/selfSelect'}">
        <div class="compile">
            <img src="../../../static/images/185940129767357710.png">
            <span>编辑</span>
        </div>
    </router-link>
    <div class="jgRight">
        <div class="price">
           <span class="spa">价格</span>
           <div>
            <div @click="getData"><img :src="imgUrl" class="imgOne" @click="changeImg()"></div>
            <div @click="getData"><img :src="imgUrlSec" class="imgTwo" @click="changeImgSec()"></div>
           </div>
            </div>
        <div class="amount">
            <span class="spat">涨幅</span>
            <div>
           <div @click="getData"><img :src="imgUrlim" class="imgThree"  @click="changeImge()"></div>
           <div @click="getData"><img :src="imgUrlSecm" class="imgFour"  @click="changeImgSece()"></div>
           </div>
            </div>
    </div>
 </div>
  <newCom :data="data"></newCom>
    <my-footer></my-footer>
</div>
</template>
<script>
import axios from 'axios'
import newCom from './newCom'
import footer from '../../components/footer'

export default {
        data () {
            return {
                data: [],
                togg: true,
                imgUrl: '../../../static/images/211351281764256059.png',
                imgUrlSec: '../../../static/images/342468831606547403.png',
                imgUrlim: '../../../static/images/211351281764256059.png',
                imgUrlSecm: '../../../static/images/342468831606547403.png'
            }
        },
        created () {
             axios.get('/static/test.json').then((res) => {
                this.data = res.data.data
                // console.log(this.zhi)
            })
        },
        methods: {
            getData () {
                    this.togg = !this.togg
                    if (this.togg) {
                     axios.get('/static/test.json').then((res) => {
                     let arr = []
                     let data = res.data.data
                     console.log(data)
                         for (let i = 0; i < data.length - 1; i++) {
                             for (let j = 0; j < data.length - 1 - i; j++) {
                                 if (data[j].num < data[j + 1].num) {
                                     let temp = data[j]
                                     data[j] = data[j + 1]
                                     data[j + 1] = temp
                                 }
                             }
                         }
                    this.data = data
                    })
                    } else {
                    axios.get('/static/test.json').then((res) => {
                     let arr = []
                     let data = res.data.data
                     console.log(data)
                         for (let i = 0; i < data.length - 1; i++) {
                             for (let j = 0; j < data.length - 1 - i; j++) {
                                 if (data[j].num > data[j + 1].num) {
                                     let temp = data[j]
                                     data[j] = data[j + 1]
                                     data[j + 1] = temp
                                 }
                             }
                         }
                    this.data = data
                    })
                    }
            },
            changeImg () {
                if (this.imgUrl === '../../../static/images/211351281764256059.png') {
                    this.imgUrl = '../../../static/images/204574317814327417.png'
                    this.imgUrlSec = '../../../static/images/342468831606547403.png'
                }
            },
            changeImgSec () {
                 if (this.imgUrlSec === '../../../static/images/342468831606547403.png') {
                    this.imgUrlSec = '../../../static/images/36686554901199681.png'
                    this.imgUrl = '../../../static/images/211351281764256059.png'
                }
            },
             changeImge () {
                if (this.imgUrlim === '../../../static/images/211351281764256059.png') {
                    this.imgUrlim = '../../../static/images/204574317814327417.png'
                    this.imgUrlSecm = '../../../static/images/342468831606547403.png'
                }
            },
            changeImgSece () {
                 if (this.imgUrlSecm === '../../../static/images/342468831606547403.png') {
                    this.imgUrlSecm = '../../../static/images/36686554901199681.png'
                    this.imgUrlim = '../../../static/images/211351281764256059.png'
                }
            }
        },
        components: {
            newCom,
            'my-footer': footer
        }
}
</script>
<style lang='scss'>
    .comMit{
         width: 100%;
    .bigTwo{
        border-bottom: 1px solid gainsboro;
           padding: 20px;
          font-size: 24px;
          display: flex;
        .compile{
          margin-left: 10px;
        color: #f14e24;
        img{
            width: 25px;
        }
        }
        .jgRight{
            margin-left: 350px;
            display: flex;
            position: relative;
            .price{
                display: flex;
                .imgOne{
                    position: absolute;
                    left: 45px;
                    top: 0;
                    width: 20px;
                }
                .imgTwo{
                    position: absolute;
                    left: 45px;
                    top: 20px;
                    width: 20px;
                }
                .spa{
                    margin-left: -20px;
                }
            }
            .amount{display: flex;
                .imgThree{
                    position: absolute;
                    left: 210px;
                    top: 0;
                    width: 20px;
                }
                .imgFour{
                    position: absolute;
                    left: 210px;
                    top: 20px;
                    width: 20px;
                }
                .spat {
                    margin-left: 120px;
                }
            }
        }
    }
    }

</style>
