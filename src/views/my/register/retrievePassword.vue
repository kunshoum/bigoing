<template>
  <div class="retrievePassword" >
    <div class="header">
        <span @click="goBack"></span>
        找回登录密码
    </div>
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
      <button @click="succeed">下一步</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    goBack: function () {
      this.$router.push({ path: '/PasswordToLogin' })
    },
    // 获取验证码
    verify: function () {
      let userPhone = this.$refs.userPhone.value
      let phoneReg = /^1[3|4|5|7|8][0-9]\d{4,8}$/
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
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  height: 82px;
  width: 100%;
  background: url(../../../../static/images/icon2.2.png) no-repeat;
  background-size: cover;
  padding-top: 47px;
  text-align: center;
  color: #fff;
  font-size: 34px;
  position: relative;
}
.header span {
  position: absolute;
  background: url(../../../../static/images/icon12.png) no-repeat;
  left: 30px;
  width: 18px;
  height: 33px;
  background-size: 18px 33px;
  top: 50%;
  transform: translateY(-50%);
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
  padding-top: 44px;
  border-bottom: 1px solid #eeeeee;
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
  margin-top: 651px;
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
