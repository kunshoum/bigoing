<template>
  <div class="beginLogin" >
    <img src="./../../static/images/reziger.png" alt="" class="creat" @click="reziter()">
    <img src="./../../static/images/login.png" alt="" class="import" @click="login()">
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    reziter () {
      this.$router.push(`/phoneRegister`)
    },
    login () {
      this.$router.push(`/PasswordToLogin`)
    }

  }
}
</script>
<style lang="scss" scoped>
.beginLogin{
  width: 100%;
  max-width: 775px;
  height: 100vh;
  background: url(./../../static/images/begin2.gif)no-repeat center center fixed;
  background-size: cover;
  position: relative;
  .creat{
    width: 343px;
    height: 81px;
    position: absolute;
    top: 75%;
    left: 50%;
    margin-left: -171.5px;
    margin-top: -41px;
  }
  .import{
    width: 343px;
    height: 81px;
    position: absolute;
    top: 83%;
    left: 50%;
    margin-left: -171.5px;
    margin-top: -41px;
  }
}
</style>
