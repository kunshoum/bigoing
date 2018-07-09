<template>
<div v-bind = 'data'>
  <mt-cell-swipe class="wallet" v-for = "(item,index) in data" v-if="item.cloudWallet === 1" :key="index"
      :right="[
        {
          content: '<img src=./../../../../static/images/delete.png> 删除',
          handler: ()=> deleteFn(index),
        }
      ]">
      <img class="wallImg" :src="item.numbreImg">
      <img class="yunICON" src="./../../../../static/images/yunICON.png" alt="">
      <span class="yunMsg">云钱包</span>
      <div class="walletCon">
        <div class="conTop">
          <div class="articl">
            <h3>{{item.name}}</h3>
            <h5>{{item.address.substring(0,10)+"......"+item.address.substring(item.address.length -10,item.address.length)}}</h5>
          </div>
          <label class="radio">
              <input type="radio" :value="item.address" v-model="radioValue">
              <span class="radio-on"></span>
          </label>
        </div>
        <div class="conBom">
          <h3>总价值约:<span class="num">200.93</span><span class="kind">CNY</span></h3>
        </div>
      </div>
    </mt-cell-swipe>
    <mt-cell-swipe class="yunwallet" v-for = "(item,index) in data" v-if="item.cloudWallet === 0" :key="item.name"
      :right="[
        {
          content: '<img src=./../../../../static/images/delete.png> 删除',
          handler: ()=> deleteFn(index),
        }
      ]">
      <img class="wallImg" :src="item.numbreImg">
      <div class="walletCon">
        <div class="conTop">
          <div class="articl">
            <h3>{{item.name}}</h3>
            <h5>{{item.address.substring(0,10)+"......"+item.address.substring(item.address.length -10,item.address.lengt)}}</h5>
          </div>
          <label class="radio">
              <input type="radio" :value="item.address" v-model="radioValue">
              <span class="radio-on"></span>
          </label>
        </div>
        <div class="conBom">
          <h3>总价值约:<span class="num">200.93</span><span class="kind">CNY</span></h3>
        </div>
      </div>
    </mt-cell-swipe>
</div>
</template>
<script>
export default {
  props: ['data'],
  data () {
    return {
      radioValue: ''
    }
  },
  mounted () {
  },
  methods: {
    deleteFn (index) {
      console.log(index)
      this.data.splice(index, 1)
      window.localStorage.setItem('walletInformation', JSON.stringify(this.data))
    }
  }
}
</script>
<style lang="scss" scoped>
.wallet{
  margin-bottom: 40px!important;
  border-radius: 12px!important;
  height: 192px!important;
  background: url('./../../../../static/images/yunwalletBimg.png') no-repeat left top !important ;
  background-size: cover;
  .wallImg{
    float: left;
    width: 90px;
    height: 90px;
    margin-top: -60px;
  }
  .yunICON{
    width: 50px;
    height: 30px;
    margin-left: -70px;
    margin-top: 70px;
  }
  .yunMsg{
    width: 90px;
    font-size: 16px;
    color: #fff;
    margin-left: -65px;
    margin-top: 140px;
    line-height: 40px;
  }
  .walletCon{
    float: left;
    width: 543px;
    height: 100%;
    .conTop{
      width: 100%;
      height: 60%;
      .articl{
        width: 80%;
        height: 60%;
        float: left;
        h3{
          font-size: 30px;
          color: #fff;
          text-indent: 55px;
          margin-top: 25px;
        }
        h5{
          font-size: 22px;
          color: #fff;
          margin-top: 10px;
          text-indent: 55px;
        }
      }
      .radio{
          display: inline-block;
          position: relative;
          line-height: 18px;
          margin-right: 10px;
          cursor: pointer;
          right: -60px;
          top: 10px;
      }
      .radio input{
          display: none;
      }
      .radio .radio-on{
          display: inline-block;
          height: 40px;
          width: 40px;
          margin-right: 5px;
          padding: 0;
          // border: 1px solid #666;
          border-radius: 100%;
          vertical-align: top;
          box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1) inset, 0 1px 4px rgba(0, 0, 0, 0.1) inset, 1px -1px 2px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.2s ease;
      }
      .radio input:checked + span.radio-on{
          width: 22px;
          height: 22px;
          position: fixed;
          border-radius: 100%;
          background: #F1BD24;
          top: 30px;
          right: 44px;
          box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.3), 0 0 1px rgba(255, 255, 255, 0.4) inset;
          background-image: linear-gradient(#F1BD24 0, #F1BD24 100%);
          transform: scale(0, 0);
          transition: all 0.2s ease;
          transform: scale(1, 1);
          display: inline-block;
          &::after{
              content:"";
              display: inline-block;
              height: 36px;
              width: 36px;
              margin-right: 5px;
              padding: 0;
              border: 6px solid #F1BD24!important;
              position: fixed;
              bottom: -13px;
              right: -18px;
              border-radius: 100%;
              vertical-align: top;
              box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1) inset, 0 1px 4px rgba(0, 0, 0, 0.1) inset, 1px -1px 2px rgba(0, 0, 0, 0.1);
              cursor: pointer;
              transition: all 0.2s ease;
          }
      }

    }
    .conBom{
      width: 100%;
      height: 35%;
      h3{
        font-size: 22px;
        color: #fff;
        margin-top: 35px;
        float: right;
        margin-right: 10px;
      }
      .num{
        font-size: 43px;
        color: #F1BE25;
        margin-left: 10px;
        margin-right: 15px;
      }
      .kind{
        font-size: 22px;
        color: #fff;
      }
    }
  }
}
.yunwallet{
  margin-bottom: 20px!important;
  border-radius: 12px!important;
  height: 192px!important;
  .wallImg{
    float: left;
    width:97px;
    height:97px;
    margin-top: -40px;
  }
  .walletCon{
    float: left;
    width: 543px;
    height: 100%;
    .conTop{
      width: 100%;
      height: 60%;
      .articl{
        width: 80%;
        height: 60%;
        float: left;
        h3{
          font-size: 30px;
          color: #333;
          text-indent: 45px;
          margin-top: 25px;
        }
        h5{
          font-size: 22px;
          color: #666;
          margin-top: 10px;
          text-indent: 45px;
        }
      }
      .radio{
          display: inline-block;
          position: relative;
          line-height: 18px;
          margin-right: 10px;
          cursor: pointer;
          right: -60px;
          top: 10px;
      }
      .radio input{
          display: none;
      }
      .radio .radio-on{
          display: inline-block;
          height: 40px;
          width: 40px;
          margin-right: 5px;
          padding: 0;
          // border: 1px solid #666;
          border-radius: 100%;
          vertical-align: top;
          box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1) inset, 0 1px 4px rgba(0, 0, 0, 0.1) inset, 1px -1px 2px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.2s ease;
      }
      .radio input:checked + span.radio-on{
          width: 22px;
          height: 22px;
          position: fixed;
          border-radius: 100%;
          background: #01BA3D;
          top: 30px;
          right: 44px;
          box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.3), 0 0 1px rgba(255, 255, 255, 0.4) inset;
          background-image: linear-gradient(#01BA3D 0, #01BA3D 100%);
          transform: scale(0, 0);
          transition: all 0.2s ease;
          transform: scale(1, 1);
          display: inline-block;
          &::after{
              content:"";
              display: inline-block;
              height: 36px;
              width: 36px;
              margin-right: 5px;
              padding: 0;
              border: 6px solid #01BA3D!important;
              position: fixed;
              bottom: -13px;
              right: -18px;
              border-radius: 100%;
              vertical-align: top;
              box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1) inset, 0 1px 4px rgba(0, 0, 0, 0.1) inset, 1px -1px 2px rgba(0, 0, 0, 0.1);
              cursor: pointer;
              transition: all 0.2s ease;
          }
      }

    }
    .conBom{
      width: 100%;
      height: 35%;
      h3{
        font-size: 22px;
        color: #666;
        margin-top: 35px;
        float: right;
        margin-right: 10px;
      }
      .num{
        font-size: 43px;
        color: #ff4200;
        margin-left: 10px;
        margin-right: 15px;
      }
      .kind{
        font-size: 22px;
        color: #666;
      }
    }
  }
}
</style>
