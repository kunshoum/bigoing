<template>
<div class="bigHead">
    <div class="header">
        <div class="headLeft">
            <router-link :to="{path:'/serch'}">
                <img src="../../../static/images/sousuo2x.png">
            </router-link>
        </div>
        <div class="headCenter">行情</div>
        <div class="headRight">
            <router-link :to="{path:'/Marketshare'}">
                <img src="../../../static/images/fenxiang2x.png">
            </router-link>
        </div>
    </div>
    <div class="Tab">
      <router-link to="/optional" class="tabTwo">自选</router-link>
      <router-link to="/marketValue"  class="tabTwo tabThr">市值</router-link>
    </div>
    <router-view></router-view>
    <my-footer></my-footer>

 </div>

</template>
<script>
 import axios from 'axios'
import footer from '../../components/footer'
 export default {
     mounted () {
         this.$router.push('optional')
     },
      components: {
            'my-footer': footer
        }
    }
</script>
<style lang='scss'>
    .bigHead{
        width:100%;
        box-sizing: border-box;
    .header{
        width:100%;
        height: 88px;
        background: url("../../../static/images/dbjb@2x.png");
        background-size: 750px 88px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .headLeft{
            padding-left: 30px;
           img{
                width: 39px;
                height: 39px;
           }
        }
        .headCenter{
            font-size: 32px;
            color: #ffffff;
            font-family: FZLTXHK--GBK1-0;
        }
        .headRight{
            padding-right: 30px;
           img{
            width: 38px;
            height: 38px;
           }
        }
    }
    .Tab{
     width: 385px;
     height: 60px;
     margin: 0 auto;
     margin-top: 26px;
     display: flex;
     justify-content: space-around;
     align-items: center;
    //  border: 1px solid #fe4e24;
     list-style: none;
    //  border-radius: 6px 0 0 6px!important;
    .tabTwo{
        text-decoration: none;
       border-radius: 6px 0 0 6px!important;
        color: #fe4e24;
        font-size: 30px;
        width: 195px;
        height: 60px;
        line-height: 60px;
        text-align: center;
    }
    .tabThr{
       border-radius: 0 6px 6px 0!important;
    }
     .router-link-active{
            background: #fe4e24;
           color: white;
        }
    }
    }
</style>
