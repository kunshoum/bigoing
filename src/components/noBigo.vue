<template>
  <div class="AboutBigo" >
    <div class="header">
      <div class="headerLeft">
        <img src="./../../static/images/back.png" alt="">
      </div>
      <div class="logoMsg">
        <input type="text" placeholder="HOTC">
      </div>
      <div class="headerRight">
        取消
      </div>
    </div>
    <div class="aboutImg">
      <p>暂未找到相关币种，如您需要添加</p>
      <p>可联系BIGOING官方邮箱</p>
      <p> <span>kefu@bigoing.com</span> </p>
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
  height: 1442px;
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
      height: 88px;
      float: left;
      display: table-cell;
      vertical-align: middle;
      font-size: 32px;
      color: #f2f2f2;
    }
    .headerLeft{
      width: 12%;
      img{
        width: 18px;
        height: 33px;
        position: fixed;
        left: 30px;
        top: 24px;
      }
    }
    .headerRight{
      width: 18%;
      text-align: center;
    }
    .logoMsg{
      width: 70%;
      line-height: 85px;
      text-align: center;
      input{
        width: 100%;
        height: 40px;;
        padding: 9px;
        border-radius: 10px;
        color: #b4b4b4;
        font-size: 26px;
        text-indent: 60px;
        background-image: url('./../../static/images/search.png');
        background-size: 40px 40px;
        background-position-x: 12px;
        background-position-y: 9px;
        background-repeat:no-repeat;
      }
    }
  }
  .aboutImg{
     position: absolute;
     top: 460px;
     width:100%;
     height: 330px;
     display: table-cell;
     vertical-align: middle;
     text-align: center;
     font-size: 28px;
     color: #222222;
     line-height: 35px;
     span{
       color: #f16842;
     }
  }
}
</style>
