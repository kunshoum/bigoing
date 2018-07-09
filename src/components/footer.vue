<template>
  <div class="footer">
    <router-link :to="{path:'/porperty'}">
      <div>
          <img src="./../../static/images/money.png" alt="">
          <p>资产</p>
      </div>
    </router-link>
    <router-link :to="{path:'/market'}">
      <div>
        <img class="walletImg" src="./../../static/images/quotation.png" alt="">
        <p>行情</p>
      </div>
    </router-link>
    <router-link :to="{path:'/beginMoney'}">
      <div class="logo">
        <img class="walletImg" src="./../../static/images/logo.png" alt="">
      </div>
    </router-link>
    <router-link :to="{path:'/flash'}">
      <div>
        <img class="walletImg" src="./../../static/images/hotMsg.png" alt="">
        <p>快讯</p>
      </div>
    </router-link>
    <router-link :to="{path:'/cloudMe'}">
      <div>
        <img class="walletImg" src="./../../static/images/my.png" alt="">
        <p>我的</p>
      </div>
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
.footer{
    width: 100%;
    height: 104px;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: block;
    z-index: 9999;
    .logo{
      width: 28%;
      img{
        width: 93px!important;
        height: 60px!important;
        margin-top: 20px;
      }
    }
    div{
      display: table-cell;
      vertical-align: middle;
      img:nth-child(1){
        width: 40px;
        height: 40px;
      }
      img:nth-child(4){
        width: 41px;
        height: 41px;
      }
      img{
        width: 42px;
        height: 42px;
        margin-top: 13px;
      }
      .walletImg{
        width: 38px;
        height: 38px;
      }
      float: left;
      width: 18%;
      height: 100px;
      // line-height: 100px;
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      font-size: 22px;
      color: #222;
      p{
        margin-top: 10px;
      }
    }
  }
</style>
