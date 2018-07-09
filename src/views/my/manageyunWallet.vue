<template>
  <div class="ManageWallet" >
    <div class="header">
      <div class="headerLeft">
        <router-link :to="{path:'/cloudMe'}">
          <img src="./../../../static/images/back.png" alt="">
        </router-link>
      </div>
      <div class="logoMsg">管理钱包</div>
      <div class="headerRight">
        <img src="./../../../static/images/warn.png" alt="">
      </div>
    </div>
    <div class="content" v-bind="walletData">
      <div is='walletNew' :data="walletData">
      </div>
    </div>
    <div class="footer">
      <div @click="importWallet()">
          <img src="./../../../static/images/import.png" alt="">
          导入钱包
      </div>
      <div @click="addWallet()">
          <img class="walletImg" src="./../../../static/images/share.png" alt="">
          创建钱包
      </div>
    </div>
  </div>
</template>
<script>
import walletNew from './components/yunwalletNew.vue'

export default {
  data () {
    return {
      walletData: JSON.parse(window.localStorage.getItem('walletInformation'))
    }
  },
  components: {
        'walletNew': walletNew
  },
  methods: {
    addWallet () {
       this.$router.push(`/createWallet`)
    },
    importWallet () {
      /* 导入钱包 */
       this.$router.push(`/leadingIn`)
    }
  }
}
</script>
<style lang="scss" scoped>
.ManageWallet{
  width: 100%;
  max-width: 775px;
  height: 1334px;
  overflow-y: auto;
  background-color: #F16724;
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
    .headerRight{
      img{
        width: 37px;
        height: 37px;
        position: fixed;
        right: 30px;
        top: 24px;
      }
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
    .mint-cell:last-child {
      background-size: 100% 0px!important;
    }
    .wallet{
      width: 100%;
      height: 192px;
      border-radius: 12px;
      margin-bottom: 6px;
    }
  }
}
</style>
