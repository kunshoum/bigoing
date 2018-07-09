<template>
  <div class="newsHistory" >
    <div class="header">
      <div class="headerLeft">
        <router-link :to="{path:'/cloudMe'}">
          <img src="./../../../static/images/back.png" alt="">
        </router-link>
      </div>
      <div class="logoMsg">消息</div>
      <!-- <div class="headerRight">
        <img src="./../../static/images/warn.png" alt="">
      </div> -->
    </div>
    <div class="content">
      <div is='news'>
      </div>
    </div>
  </div>
</template>
<script>
import news from './components/news.vue'

export default {
  data () {
    return {

    }
  },
  components: {
        'news': news
  },
  methods: {
    addWallet () {
       this.$messagebox('跳转到创建钱包界面（暂时弹框）')
    }
  }
}
</script>
<style lang="scss" scoped>
.newsHistory{
  width: 100%;
  max-width: 775px;
  height: 1442px;
  overflow-y: auto;
  background-color: #F3F3F3;
  position: relative;
  .header{
    width: 100%;
    height: 88px;
    position: fixed;
    line-height: 88px;
    background-color: #F16724;
    top: 0;
    left: 0;
    display: block;
    z-index: 9999999;
    div{
      width: 33.3%;
      height: 88px;
      float: left;
      display: table-cell;
      vertical-align: middle;
      font-size: 32px;
      color: #ffffff;
    }
    .headerLeft{
      img{
        width: 18px;
        height: 33px;
        position: fixed;
        left: 30px;
        top: 24px;
      }
    }
    .logoMsg{
      line-height: 85px;
      text-align: center;
    }
  }
  .content{
    width: 690px;
    // height: 100%;
    margin: auto;
    position: absolute;
    top: 88px;
    left: 30px;
    right: 30px;
    display: block;
    z-index: 99;
    .news{
      width: 100%;
      height: 192px;
      background-color: #FFFFFF;
      border-radius: 12px;
      margin-bottom: 6px;
      margin-top: 20px;
    }
  }
}
</style>
