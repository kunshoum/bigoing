<template>
  <div class="Contacts" >
    <div class="header">
      <div class="headerLeft">
        <router-link :to="{path:'/cloudMe'}">
          <img src="./../../../static/images/backLine.png" alt="">
        </router-link>
      </div>
      <div class="logoMsg">联系人</div>
      <div class="headerRight" @click="addContacter()">
        <img src="./../../../static/images/addConter.png" alt="">
      </div>
    </div>
    <div class="content" v-bind="contatData">
      <div is='contancter' :data="contatData">
      </div>
    </div>
    <div class="noContent">
      <img src="./../../../static/images/noContact.png" alt="">
      <p class="zanwu">暂无联系人</p>
      <p>点击右上角添加</p>
    </div>
  </div>
</template>
<script>
import contancter from './components/contancter.vue'
export default {
  data () {
    return {
      contatData: JSON.parse(window.localStorage.getItem('contatData'))
    }
  },
  components: {
        'contancter': contancter
  },
  methods: {
    addContacter () {
        this.$router.push(`/Newcontacts`)
    }
  }
}
</script>
<style lang="scss" scoped>
.Contacts{
  width: 100%;
  max-width: 775px;
  height: 1334px;
  background-color: #F6F6F6;
  overflow-y: auto;
  position: relative;
  .header{
    width: 100%;
    height: 88px;
    position: fixed;
    line-height: 88px;
    background-color: #F15424;
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
  .content{
    width: 690px;
    // height: 100%;
    margin: auto;
    position: absolute;
    top: 108px;
    left: 30px;
    right: 30px;
    display: block;
    z-index: 99;
    .contat{
      width: 100%;
      height: 101px;
      background-color: #FFFFFF;
      border-radius: 12px;
    }
  }
  .noContent{
    display: none!important;
    width: 690px;
    // height: 100%;
    margin: auto;
    position: absolute;
    top: 108px;
    left: 30px;
    right: 30px;
    display: block;
    z-index: 99;
    display: table-cell;
      text-align: center;
    img{
      width: 121px;
      height: 122px;
      margin-top: 240px;
    }
    .zanwu{
      margin-top: 56px;
    }
    p{
      font-size: 26px;
      line-height: 36px;
      color: #666666;
    }
  }
}
</style>
