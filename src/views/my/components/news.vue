<template>
     <div class="news">
       <img :src="imgUrl" alt="">
       <span class="imgMsg">{{imgMsg}}</span>
       <span v-show="isRead" :class="iconStatus"></span>
       <p class="msgMoney"> <span>收款通知：</span> 400.0 mp 收款成功</p>
       <p class="sendMsg"> <span class="deepGrey">发送方：</span> hgsdjhgkdsbgk...fdgfg <span class="msgTime">18/06/01</span></p>
     </div>

</template>
<script>
export default {
  data () {
    return {
      isRead: true,
      iconStatus: 'red',
      imgUrl: './../../../../static/images/msgIcon.png',
      imgMsg: '官方'
    }
  },
  methods: {
    deleteFn () {
      this.$messagebox('确认删除该钱包')
    }
  },
  mounted () {
    if (this.isRead === false) {
      this.iconStatus === 'red'
    } else {
      this.iconStatus === 'green'
    }
  }
}
</script>
<style lang="scss" scoped>
.news{
  position: relative;
  img{
    width: 125px;
    height: 58px;
    position: absolute;
    top: 18px;
    left: -12px;
  }
  .imgMsg{
    position: absolute;
    top: 28px;
    color: #ffffff;
    left: 20px;
    font-size: 26px;
  }
  .red{
    width: 18px;
    height: 18px;
    position: absolute;
    background-color: red;
    top: 35px;
    border-radius: 50%;
    right: 30px;
  }
  .green{
    width: 18px;
    height: 18px;
    position: absolute;
    background-color: green;
    top: 35px;
    border-radius: 50%;
    right: 30px;
  }
  p{
    margin-left: 30px;
  }
  .msgMoney{
    padding-top: 110px;
    line-height: 20px;
    font-size: 30px;
    color: #222222;
  }
  .deepGrey{
    color: #222222;
  }
  .sendMsg{
    font-size: 26px;
    color: #666666;
    padding-top: 20px;
  }
  .msgTime{
    float: right;
    margin-right: 30px;
  }
}
</style>
