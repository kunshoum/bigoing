<template>
    <div class="keyStroe">
        <div class="keyStoreHeade">
            <div class="left" @click="purse">
                <img src="../../../static/img/purseImg/left.png"/>
            </div>
            <div>导出Keystore</div>
        </div>
        <div>
            <div class="tab">
                <div class="tab-item">
                    <router-link to="/key">Keystore 文件</router-link>
                </div>
                <div class="tab-item">
                    <router-link to="/erCode">二维码</router-link>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    purse: function () {
      this.$router.push({ path: '/purse' })
    }
  }
}
</script>
<style>
.keyStoreHeade {
  height: 129px;
  width: 100%;
  background: #f15024;
  text-align: center;
  position: relative;
  line-height: 129px;
  color: #f2f2f2;
  font-size: 32px;
}
.left {
  position: absolute;
  left: 30px;
  top: 10px;
}
.left > img {
  width: 20px;
  height: 30px;
}
a {
  text-decoration: none;
  color: #333;
  font-size: 28px;
}
.tab {
  display: flex;
  justify-content: space-between;
}
.tab-item {
  width: 50%;
  text-align: center;
  height: 100px;
  line-height: 100px;
}
.router-link-active {
  display: block;
  width: 100%;
  border-bottom: 7px solid #f04821;
}
</style>
