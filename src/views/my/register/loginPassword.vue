<template>
  <div class="loginPassword">
    <div class="header">
        <span @click="goBack"></span>
        设置登录密码
    </div>
    <div class="main">
      <ul>
        <li class="phone">
          <input type="password" ref="passOne" @keyup="passwordOne" placeholder="设置登录密码">
          <p v-show="passHint">密码最少8位，字母数字和符号至少包含两种</p>
        </li>
        <li class="verify">
          <input type="password" ref="passTwo" placeholder="再次输入">
        </li>
      </ul>
    </div>
    <div class="footer">
      <button @click="passWin">完成</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      password: false,
      passHint: true
    }
  },
  methods: {
    goBack: function () {
      this.$router.push({ path: '/phoneRegister' })
    },
    passwordOne: function () {
      //   字母
      let isLetter = this.$refs.passOne.value.search(/[a-zA-Z]+/)
      //   数字
      let isNumber = this.$refs.passOne.value.search(/[0-9]+/)
      //   符号
      let isSymbol = this.$refs.passOne.value.search(/['.','_']+/)
      if (
        ((isLetter >= 0 && isNumber >= 0) ||
          (isLetter >= 0 && isSymbol >= 0) ||
          (isSymbol >= 0 && isNumber >= 0)) &&
        this.$refs.passOne.value.length > 7
      ) {
        this.passHint = false
      } else {
        this.passHint = true
      }
    },
    passWin: function () {
      let matchingOne = this.$refs.passOne.value
      let matchingTwo = this.$refs.passTwo.value
      // console.log(this.passHint)
      if (matchingOne === matchingTwo && this.passHint === false) {
        this.$router.push({ path: '/instructionCode' })
      } else {
        console.log('两次输入不一致')
      }
    }
  }
}
</script>
<style lang='scss' scoped>
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
  color: #f04324;
  font-size: 22px;
  height: 30px;
  line-height: 50px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 40px;
}
.main ul li input {
  height: 30px;
  line-height: 30px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  padding-left: 40px;
  border: none;
}
.footer {
  margin-top: 613px;
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
