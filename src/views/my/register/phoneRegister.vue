<template>
  <div class="phoneRegister" >
    <div class="header">注册账号</div>
    <div class="main">
      <ul>
        <li class="phone">
          <p>+86</p>
          <input type="text" ref="userPhone" placeholder="请输入您的手机号">
        </li>
        <li class="verify">
          <p>验证码</p>
          <input type="text" ref="verifyLength" placeholder="填写接收的验证码">
          <button @click="verify">获取验证码</button>
        </li>
      </ul>
    </div>
    <div class="footer">
      <p @click="goVerify">已有账号？现在登录</p>
      <button @click="succeed">下一步</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isMate: false,
      isSucceed: false
    }
  },
  methods: {
    // 获取验证码
    verify: function () {
      let userPhone = this.$refs.userPhone.value
      let phoneReg = /^1[3|4|5|7|8]\d{9}$/
      this.isMate = phoneReg.test(userPhone)
      if (this.isMate) {
        this.isSucceed = true
        localStorage.setItem('userPhone', userPhone)
      } else {
        console.log('输入不正确')
      }
    },
    // 下一步
    succeed: function () {
      if (this.$refs.verifyLength.value.length === 6 && this.isSucceed) {
        this.$router.push({ path: '/loginPassword' })
      } else {
        console.log('验证码输入不正确')
      }
    },
    // 已有账号？现在登录
    goVerify: function () {
      this.$router.push({ path: '/PasswordToLogin' })
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  height: 126px;
  width: 100%;
  background: url(../../../../static/images/icon2.1.png) no-repeat;
  background-size: cover;
  padding-top: 300px;
  text-align: center;
  color: #fff;
  font-size: 34px;
}
::-webkit-input-placeholder {
  color: rgb(153, 153, 153);
  font-size: 28px;
}
.main {
  padding: 58px 30px 0 30px;
  box-sizing: border-box;
}
.main ul li {
  position: relative;
  height: 90px;
  line-height: 90px;
  border-bottom: 1px solid #eeeeee;
  padding-top: 44px;
}
.main ul li p {
  position: absolute;
  color: rgb(34, 34, 34);
  font-size: 30px;
  left: 40px;
}
.main ul li input {
  height: 30px;
  line-height: 30px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  padding-left: 200px;
  border: none;
}
.main ul .verify button {
  position: absolute;
  right: 10px;
  bottom: 20px;
  background: url(../../../../static/images/icon2.5.png) no-repeat;
  background-size: contain;
  color: #fff;
  font-size: 24px;
  height: 50px;
  line-height: 48px;
  width: 166px;
  border: none;
  outline: none;
}
.footer {
  margin-top: 236px;
}
.footer p {
  text-align: center;
  color: rgb(240, 67, 36);
  font-size: 24px;
  margin-bottom: 40px;
}
.footer button {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 430px;
  height: 90px;
  background: url(../../../../static/images/icon2.3.png) no-repeat;
  background-size: cover;
  color: #fff;
  border: none;
  outline: none;
  font-size: 36px;
}
</style>
