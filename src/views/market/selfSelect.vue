<template>
    <div class="selfSelect">
      <div class="header">
        <div class="headerLeft">
          <img src="./../../../static/images/back.png" alt="">
        </div>
        <div class="logoMsg">自选</div>
      </div>
      <div class="content">
            <p>左滑取消自选，长按拖动排序</p>
            <div is='isSelect'>
            </div>
      </div>
    </div>
</template>
<script>
import isSelect from './components/select.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    'isSelect': isSelect
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.selfSelect{
  width: 100%;
  height: 1444px;
  background-color: #F7F6F6;
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
    } .headerLeft{
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
    height: 100%;
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
    p{
      text-align: center;
      margin: 23px 0 23px 0;
      font-size: 24px;
      color: #222;
    }
    .select{
      width: 100%;
      height: 95px;
      background-color: rgba(255,255,255,0);
      border-radius: 12px;
      margin-bottom: 6px;
    }
  }
}
</style>
