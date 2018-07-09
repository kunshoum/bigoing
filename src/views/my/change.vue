<template>
     <div class="all">
          <div class="header">
            <img src="../../../static/images/return.png">
            <span>更换手机号</span>
            <span></span>
        </div>
        <div class="contenTop">
            <span>绑定邮箱</span>
            <input type="text" placeholder="1174966834@qq.com" v-model="email">
            <span></span>
        </div>
         <div class="contenBut">
            <span>验证码</span>
            <input type="text" placeholder="填写接收的验证码">
            <button type="button" :disabled="disabled" @click="sendEmail" class="btns">{{btntxt}}</button>
        </div>
        <div class="next">
        <button @click="next">下一步</button>
        </div>
     </div>
</template>
<script>
export default {
     data: function () {
   return {
    disabled: false,
    time: 0,
    btntxt: '获取验证码',
    email: ''
   }
   },
    mounted: function () {

   },
   methods: {
       next: function () {
           this.$router.push({path: '/binding'})
       },
       // 邮箱验证
   sendEmail () {
    let regEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
    if (this.email === '') {
     alert('请输入邮箱')
    } else if (!regEmail.test(this.email)) {
     alert('邮箱格式不正确')
    } else {
     this.time = 60
     this.disabled = true
     this.timer()
    }
   },
    timer () {
    if (this.time > 0) {
      this.time--
      this.btntxt = this.time + 's后重新获取'
      setTimeout(this.timer, 1000)
    } else {
      this.time = 0
      this.btntxt = '获取验证码'
      this.disabled = false
    }
   }
   }
}
</script>
<style lang='scss'>
        .all{
         width: 100%;
        .header{
            width:100%;
            height: 88px;
            background: url("../../../static/images/header.png");
            background-size: 750px 88px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 32px;
            color: #ffffff;
             img{
            width: 18px;
            height:33px;
            margin-left: 30px;
        }
        }
        .contenTop{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 112px 0 28px 60px;
            border-bottom: 1px solid gainsboro;
            width: 85%;
            margin: 0 auto;
            span{
                 font-size: 30px;
                 color: rgb(34, 34, 34);
            }
            input{
                 font-size: 30px;
                border: none;
                color: rgb(153, 153, 153);
                width: 350px;
                margin-left: -70px;
                background: none;
            }
            }
           .contenBut{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 60px 0 28px 60px;
            border-bottom: 1px solid gainsboro;
            width: 85%;
            margin: 0 auto;
            span{
                 font-size: 30px;
                color: rgb(34, 34, 34);
            }
            input{
                font-size: 30px;
                border: none;
                color: rgb(153, 153, 153);
                 width: 250px;
                margin-left: 20px;
                background: none;
            }
            button{
                width: 150px;
                height: 48px;
                background: rgb(241, 84, 36);
                color: #ffffff;
                border-radius: 10px;
                border: 1px solid rgb(241, 84, 36);
                font-size: 8px;
            }
        }
        .next{
            width: 430px;
            height: 100px;
            margin: 0 auto;
            margin-top: 616px;
            button{
            background:rgb(253, 131, 32) ;
            width:420px;
            height:90px;
            color: #ffffff;
            border: 1px solid rgb(253, 131, 32);
            border-radius:50px;
            font-size: 30px;
            }
        }
        }
</style>
