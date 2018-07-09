<template>
  <div class="guidance" >
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide guidanceImg"></div>
            <div class="swiper-slide guidanceImg"></div>
            <div class="swiper-slide guidanceImg"></div>
            <div class="swiper-slide guidanceImg"></div>
            <div class="swiper-slide guidanceImg"><button @click="open"></button></div>
        </div>
        <!-- <div class="swiper-pagination"></div> -->
    </div>=
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  data () {
    return {}
  },
  methods: {
    open: function () {
        this.$router.push({ path: '/beginLogin' })
    }
  },
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination'
    },
        uniqueNavElements: false
    })
  }
}
</script>
<style lang="scss" scoped>
.guidanceImg:nth-child(1){
    height: 100vh;
    width: 100vh;
    background: url(../../../static/images/1.png) no-repeat;
    background-size: contain;
}
.guidanceImg:nth-child(2){
    height: 100vh;
    width: 100%;
    background: url(../../../static/images/2.png) no-repeat;
    background-size: contain;
}
.guidanceImg:nth-child(3){
    height: 100vh;
    width: 100%;
    background: url(../../../static/images/3.png) no-repeat;
    background-size: contain;
}
.guidanceImg:nth-child(4){
    height: 100vh;
    width: 100%;
    background: url(../../../static/images/4.png) no-repeat;
    background-size: contain;
}
.guidanceImg:nth-child(5){
    height: 100vh;
    width: 100%;
    background: url(../../../static/images/5.png) no-repeat;
    background-size: contain;
    position: relative;
}
.guidanceImg:nth-child(5) button{
    height: 74px;
    width: 341px;
    background: url(../../../static/images/open.png) no-repeat;
    background-size: cover;
    position: absolute;
    left: 50%;
    bottom: 100px;
    transform: translateX(-50%);
    outline: none;
    border: none;
}
</style>
