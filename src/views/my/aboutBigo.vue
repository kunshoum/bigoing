<template>
  <div class="AboutBigo" >
    <div class="header">
      <div class="headerLeft">
        <router-link :to="{path:'/cloudMe'}">
          <img src="./../../../static/images/back.png" alt="">
        </router-link>
      </div>
      <div class="logoMsg">关于我们</div>
    </div>
    <div class="aboutImg">
      <img src="./../../../static/images/aboutLogo.png" alt="">
      <p>当前版本：1.0.0</p>
    </div>
    <div class="content">
        <div>版本向导</div>
        <img src="./../../../static/images/goMsg.png" alt="">
    </div>
    <div class="contentTwi">
        <div>官方网站</div>
        <img src="./../../../static/images/goMsg.png" alt="">
    </div>
    <div class="contentTwi">
        <div>使用协议</div>
        <img src="./../../../static/images/goMsg.png" alt="">
    </div>
    <div class="contentThr">
        <div>隐私条款</div>
        <img src="./../../../static/images/goMsg.png" alt="">
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {

    }
  },
  methods: {
    addWallet () {
       this.$messagebox('跳转到创建钱包界面（暂时弹框）')
    }
  }
}
</script>
<style lang="scss" scoped>
.AboutBigo{
  width: 100%;
  max-width: 775px;
  height: 1334px;
  overflow: hidden;
  position: relative;
  background-color: #F3F3F3;
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
      color: #f2f2f2;
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
  .aboutImg{
     position: absolute;
     top: 88px;
     width:100%;
     height: 330px;
     display: table-cell;
     vertical-align: middle;
     text-align: center;
     img{
       width: 276px;
       height: 146px;
       margin-top: 94px;
     }
     p{
        font-size: 20px;
        color: #FE5F3E;
        margin-top: 15px;
        margin-bottom: 60px;
      }
  }
  .content{
        width: 100%;
        height: 102px;
        background-color: #FFFFFF;
        text-align: left;
        border-bottom: 1px solid #e6e6e6;
        margin-top: 430px;
        div{
          width: 93%;
          line-height: 102px;
          text-indent: 50px;
          font-size: 28px;
          color: #333;
          float: left;
        }
        img{
          width: 13px;
          height: 25px;
          float: left;
          margin-top: 38px;
        }
      }
      .contentTwi{
        width: 100%;
        height: 102px;
        background-color: #FFFFFF;
        text-align: left;
        border-bottom: 1px solid #e6e6e6;
        div{
          width: 93%;
          line-height: 102px;
          text-indent: 50px;
          font-size: 28px;
          color: #333;
          float: left;
        }
        img{
          width: 13px;
          height: 25px;
          float: left;
          margin-top: 38px;
        }
      }
       .contentThr{
        width: 100%;
        height: 102px;
        background-color: #FFFFFF;
        text-align: left;
        div{
          width: 93%;
          line-height: 102px;
          text-indent: 50px;
          font-size: 28px;
          color: #333;
          float: left;
        }
        img{
          width: 13px;
          height: 25px;
          float: left;
          margin-top: 38px;
        }
      }
  .footer{
    width: 100%;
    height: 100px;
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    display: block;
    z-index: 9999;
    div{
      display: table-cell;
      vertical-align: middle;
      img{
        width: 34px;
        height: 34px;
      }
      .walletImg{
        width: 38px;
        height: 38px;
      }
      float: left;
      width: 50%;
      height: 100px;
      line-height: 100px;
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      font-size: 30px;
      color: #333;
    }
  }
}
</style>
