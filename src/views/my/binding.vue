<template>
    <div class="all">
        <div class="header">
            <img src="../../../static/images/return.png">
            <span>绑定手机</span>
            <span></span>
        </div>
        <div class="content">
            <span>手机号</span>
            <input type="text" placeholder="请输入您的手机号" v-model="phone">
            <div :disabled="disabled" @click="sendcode" class="btns">{{btntxt}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data: function () {
    return {
    disabled: false,
    time: 0,
    btntxt: '更换手机号',
    phone: ''
   }
   },
    mounted: function () {

   },
    methods: {
        sendcode () {
    let reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
    if (this.phone === '') {
     alert('请输入手机号码')
    } else if ( !reg.test(this.phone)) {
     alert('手机格式不正确')
    } else {
      this.time = 60
      this.disabled = true
      this.timer()
    }
       this.$messagebox( {title: ' ', message: '你已确认更换手机号', confirmButtonText: '确认', confirmButtonClass: 'yes', showCancelButton: true})
   },
   timer () {
        this.$router.push({path: '/change'})
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
        .content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 60px 0 28px 40px;
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
                margin-left: 40px;
                background: none;
            }
            .btns{
                // width: 190px;
                // height: 50px;
                color: rgb(241, 84, 36);
                font-size: 8px;
            }
        }
    }
</style>
