<template>
<div>
  <div class="cloudMe">
      <!-- 头部 -->
      <div class="header">
          <div class="my">
            <h2>我的</h2>
            <div class="headImg">
                <img :src="imgSrc" alt="">
            </div>
            <div class="walletName">{{nameCurrent}}</div>
          </div>
          <!-- 设置 -->
          <span @click="setting()"></span>
      </div>

        <div class="swiper-container">
                <div class="swiper-wrapper" v-bind="cloudData">
                    <div class="swiper-slide" v-for = "(item,index) in cloudData" :key="index" @touchstart="consoleIndex(index)">
                        <img class="rotateImg" src="./../../../static/images/roate.png" alt="">
                        <a>交易记录 > </a>
                        <p class="num">333.00{{item.name}}</p>
                        <p class="kind">账户价值约（CNY）</p>
                        <img src="./../../../static/images/lunboMsg.png" class="lunMsg" alt="">
                    </div>
                </div>
        </div>
      <div class="action">
          <ul>
              <li @click="toMsg()"><span></span>消息中心<span></span></li>
              <li @click="toContat()"><span></span>联系人<span></span></li>
              <li @click="toManwallet()"><span></span>管理钱包<span></span></li>
              <li @click="toAboutbigo()"><span></span>关于我们<span></span></li>
          </ul>
      </div>
  </div>
  <my-footer></my-footer>
  </div>
</template>
<script>
import Swiper from 'swiper'
import footer from '../../components/footer'
export default {
  data () {
    return {
        cloudData: JSON.parse(window.localStorage.getItem('walletInformation')),
        currentIndex: '',
        imgSrc: '',
        nameCurrent: ''
    }
  },
    components: {
        'my-footer': footer
    },
  methods: {
    setting () {
        this.$router.push(`/set`)
    },
    toMsg () {
        this.$router.push(`/newsHistory`)
    },
    toContat () {
        this.$router.push(`/contacts`)
    },
    toManwallet () {
        this.$router.push(`/yunWallet`)
    },
    toAboutbigo () {
        this.$router.push(`/aboutBigo`)
    },
    consoleIndex (index) {
        this.currentIndex = index
        this.nameCurrent = this.cloudData[index].name
        this.imgSrc = this.cloudData[index].numbreImg
    }
  },
  mounted () {
    this.nameCurrent = this.cloudData[0].name
    this.imgSrc = this.cloudData[0].numbreImg
    new Swiper('.swiper-container', {
                loop: true,
                // autoplay: 1000,
                // grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                spaceBetween: -40,
                coverflow: {
                    rotate: 0, // 滑动时旋转角度
                    stretch: 0, // 聚合宽度
                    depth: 1, // 景深
                    modifier: 1, // 覆盖叠加层数
                    slideShadows: false // 是否阴影
                }
    })
  }
}
</script>
<style lang="scss" scoped>
.cloudMe{
    width: 100%;
    overflow: hidden;
}
.header{
    height: 495px;
    width: 100%;
    background: url('./../../../static/images/iconImg19.png') no-repeat;
    background-size: cover;
    position: relative;
    padding-top: 30px;
}
.header span{
    position:  absolute;
    height: 47px;
    width: 54px;
    background: url('./../../../static/images/iconImg13.png') no-repeat;
    background-size: contain;
    right: 30px;
    top: 26px;
}
.header .my{
    text-align: center;
}
.header .my h2{
    color: #fff;
    font-size: 32px;
}
.header .my .headImg{
    img{
        height: 189px;
        width: 189px;
    }
    height: 189px;
    width: 189px;
    border-radius: 50%;
    background-size: cover;
    margin: 34px auto;
}
.header .my .walletName{
    color: #fff;
    font-size: 30px;
    font-weight: 600;
}
.action{
    margin-top: 80px;
}
.action ul li{
    padding: 0 0 0 30px;
    height: 60px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    color: #333;
    font-size: 28px;
    position: relative;
    margin-top: 50px;
}

.action ul li span:nth-child(1){
    display: inline-block;
    height: 36px;
    width: 36px;
    margin-bottom: -10px;
    margin-right: 20px;
}
.action ul li span:nth-child(2){
    display: inline-block;
    height: 36px;
    width: 36px;
    margin-bottom: -10px;
    margin-right: 20px;
    position: absolute;
    right: 0;
    background: url('./../../../static/images/iconImg05.png') no-repeat;
    background-size: contain;
}
.action ul li:nth-child(1) span:nth-child(1){
    background: url('./../../../static/images/iconImg17.png') no-repeat;
    background-size: contain;
}
.action ul li:nth-child(2) span:nth-child(1){
    background: url('./../../../static/images/iconImg11.png') no-repeat;
    background-size: contain;
}
.action ul li:nth-child(3) span:nth-child(1){
    background: url('./../../../static/images/iconImg12.png') no-repeat;
    background-size: contain;
}
.action ul li:nth-child(4) span:nth-child(1){
    background: url('./../../../static/images/iconImg02.png') no-repeat;
    background-size: contain;
}
.swiper-container{
    width: 100%;
    height: 307px;
    margin-top: -120px;
    overflow: visible!important;
}
.swiper-slide{
    height: 307px!important;
    width: 643px!important;
    border:1px solid #ccc;
    border-radius: 20px;
    top: 32px;
    border: none!important;
    line-height: 75px;
    position: relative;
    .rotateImg{
        position: absolute;
        width: 108px;
        height: 104px;
        top: 10px;
        left: 15px;
    }
    .lunMsg{
        width: 256px;
        height: 66px;
        position: absolute;
        bottom: 47px;
        left: 190px;
    }
    a{
        font-size: 28px;
        color: #fff;
        margin-left: 460px;
    }
    p{
        text-align: center;
        color: #fff;
    }
    .num{
        font-size: 56px;
        margin-top: 0px;
    }
    .kind{
        font-size: 24px;
        line-height: 30px;
    }
}
.swiper-slide-active{
    margin-top: -55px!important;
    width: 643px!important;
    height: 307px!important;
    background: url('./../../../static/images/lunboBg.png');
    background-size: 643px 307px;
    z-index: 9;
}
.swiper-slide-prev{
    border-radius: 20px!important;
    width: 643px!important;
    transform: translate3d(0px, 0px, -88.5735px) rotateX(0deg) rotateY(0deg)!important;
    background: url('./../../../static/images/lunboBg.png');
    .rotateImg{
        position: absolute;
        width: 108px;
        height: 104px;
        top: 26px;
        left: 34px;
    }
    .lunMsg{
        width: 256px;
        height: 66px;
        position: absolute;
        bottom: 47px;
        left: 190px;
    }
    a{
        font-size: 28px;
        color: #fff;
        margin-left: 460px;
        line-height: 120px;
    }
    p{
        text-align: center;
        color: #fff;
    }
    .num{
        font-size: 56px;
        margin-top: 0px;
    }
    .kind{
        font-size: 24px;
        line-height: 30px;
    }
}
.swiper-slide-next{
    border-radius: 20px!important;
    width: 643px!important;
    transform: translate3d(0px, 0px, -88.5288px) rotateX(0deg) rotateY(0deg)!important;
    background: url('./../../../static/images/lunboBg.png');
    margin-left: -18px;
    .rotateImg{
        position: absolute;
        width: 108px;
        height: 104px;
        top: 26px;
        left: 36px;
    }
    .lunMsg{
        width: 256px;
        height: 66px;
        position: absolute;
        bottom: 47px;
        left: 190px;
    }
    a{
        font-size: 28px;
        color: #fff;
        margin-left: 460px;
        line-height: 120px;
    }
    p{
        text-align: center;
        color: #fff;
        line-height: 30px;
    }
    .num{
        font-size: 56px;
        margin-top: 0px;
    }
    .kind{
        font-size: 24px;
        line-height: 50px;
    }
}
</style>
