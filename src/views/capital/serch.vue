<template>
    <div class="serch">
        <div class="serchHead">
            <div class="left">
                <img src="../../../static/img/purseImg/left.png" @click="back">
            </div>
            <div class="ser">
                <input type="text" placeholder="搜索Token名称或合约地址" value="" v-model="filterText" @focus="fouce()" @blur="blur()" ref="searchName"/>
                <div class="TokenInfo" ref="TokenInfo">
                    <div v-for="(item,index) in name" :key="index"  ref="name" v-on:click.stop="names(index)">{{myfilter(item)}}</div>
                </div>
            </div>
            <div>搜索</div>
        </div>
        <div>
            <div class="tab">
                <div class="tab-item">
                    <router-link to="/hot">热门币种</router-link>
                </div>
                <div class="tab-item">
                    <router-link to="/historyS">历史搜索</router-link>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { commonToken } from '../../assets/js/commonConfig.js'
export default {
  data () {
    return {
      filterText: '',
      name: []
    }
  },
  mounted () {
    for (let i in commonToken) {
      this.name.push(commonToken[i].name)
    }
  },
  methods: {
    names (i) {
      this.$refs.searchName.value = this.$refs.name[i].innerText
      console.log(this.$refs.name[i])
    },
    myfilter (value) {
      if (value.indexOf(this.filterText) > -1) {
        return value
      }
    },
    fouce () {
      this.$refs.TokenInfo.style.display = 'block'
    },
    blur () {
      this.$refs.TokenInfo.style.display = 'none'
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
@media screen and (max-height: 812px) {
  .serch {
    height: 21.65rem;
    background: #eeeeee;
  }
}
@media screen and (max-height: 736px) {
  .serch {
    height: 17.75rem;
    background: #eeeeee;
  }
}
.serchHead {
  padding: 0 20px;
  height: 129px;
  background: url("../../../static/img/purseImg/accountsHeadBg.png") no-repeat
    left top;
  display: flex;
  justify-content: space-between;
  font-size: 36px;
  color: #fff;
  line-height: 129px;
}
.left > img {
  width: 25px;
  height: 40px;
  margin-top: 48px;
}
.serchHead > div:nth-child(2) > input {
  width: 350px;
  height: 58px;
  background: url("../../../static/img/purseImg/serch.png") no-repeat 30px center #eeeeee;
  background-size: 40px 40px;
  border: 0;
  border-radius: 10px;
  outline: none;
  padding: 0 80px;
  color: rgb(180, 180, 180);
  font-size: 28px;
}
a {
  text-decoration: none;
  color: rgb(153, 153, 153);
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
  color: rgb(102, 102, 102);
}
.ser {
  position: relative;
}
.TokenInfo {
  padding: 0 30px;
  color: #666;
  width: 450px;
  position: absolute;
  left: 0;
  top: 94px;
  background: #fff;
  z-index: 6;
  font-size: 26px;
  display: none
}
</style>
