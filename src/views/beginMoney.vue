<template>
  <div class="beginMoney" >
    <img src="./../../static/images/creat.png" alt="" class="creat" @click="creat()">
    <img src="./../../static/images/importWall.png" alt="" class="import" @click="importWall()">
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    creat () {
      this.$router.push(`/createWallet`)
    },
    importWall () {
      this.$router.push(`/leadingIn`)
    }

  }
}
</script>
<style lang="scss" scoped>
.beginMoney{
  width: 100%;
  max-width: 775px;
  height: 100vh;
  background: url(./../../static/images/begin1.gif)no-repeat center center fixed;
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
