<template>
  <div class="leadingIn" >
      <!-- 头部 -->
    <div class="header">
        <span @click="cancel"></span>
        <div class="title">{{message}}</div>
    </div>
    <!-- 导航 -->
    <div class="main">
        <ul class="clear">
            <router-link tag="li" :to='{name:"memory"}'>助记词</router-link>
            <router-link tag="li" :to='{name:"desDev"}'>官方钱包</router-link>
            <router-link tag="li" :to='{name:"keyPrivate"}'>私钥</router-link>
        </ul>
        <router-view></router-view>
    </div>
    <!-- 底部 -->
    <div class="footer">

    </div>
  </div>
</template>
<script>
export default {
  methods: {
    cancel: function () {
      this.$router.push({ path: '/manageWallet' })
    }
  },
  data () {
    return {
      message: '导入钱包',
      slots: [{}]
    }
  }
}
</script>
<style lang="scss" scoped>
.clear::after,
.clear::before {
  content: "";
  height: 0;
  line-height: 0;
  display: block;
  clear: both;
}
.header {
  height: 88px;
  border-bottom: 1px solid #eee;
  position: relative;
  line-height: 88px;
}
.header span {
  position: absolute;
  background: url(../../../static/images/icon2.png) no-repeat;
  left: 30px;
  width: 18px;
  height: 33px;
  background-size: 18px 33px;
  top: 50%;
  transform: translateY(-50%);
}
.header .title {
  width: 100%;
  color: #333;
  font-size: 32px;
  text-align: center;
}
.main {
  margin-top: 10px;
  margin-bottom: 50px;
}
.main ul {
  display: flex;
}
.main ul li {
  text-align: center;
  padding: 15px 0;
  border-bottom: 1px solid #ccc;
  flex: 1;
  color: #666;
  font-size: 28px;
}
.main ul li.router-link-exact-active {
  border-bottom: 5px solid #ffa200;
  color: #f16824;
}
.leadingIn {
  height: 100%;
}
.leadingIn .footer {
  position: absolute;
  bottom: 0;
  background: url(../../../static/images/icon9.png) no-repeat;
  height: 182px;
  width: 750px;
  background-size: cover;
}
</style>
