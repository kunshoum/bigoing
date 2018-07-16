<template>
    <div class="serch">
        <div class="serchHead">
            <div class="lef">
                <img src="../../../static/img/purseImg/left.png" @click="back">
            </div>
            <div class="ser">
                <input type="text" placeholder="搜索Token名称或合约地址" value="" v-model="filterText" @focus="fouce()" ref="searchName"/>
            </div>
            <div class="TokenInfo" ref="TokenInfo">
                <div v-for="(item,index) in symbols" :key="index"  ref="name" @click.stop="names(index)">{{myfilter(item)}}</div>
            </div>
            <div @click="curr" class="curr">搜索</div>
        </div>
        <div>
            <div class="tab">
                <div class="tab-item">
                    <router-link to="/hou">热门币种</router-link>
                </div>
                <div class="tab-item">
                    <router-link to="/historySe">历史搜索</router-link>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import marketTokens from '../../assets/js/marketTokens.js'
export default {
  data () {
    return {
      filterText: '',
      symbols: [],
      historyNames: []
    }
  },
  mounted () {
    for (let i in marketTokens.marketTokens) {
      this.symbols.push(marketTokens.marketTokens[i].symbol)
    }
  },
  methods: {
    names (i) {
      this.$refs.searchName.value = this.$refs.name[i].innerText
      this.$refs.TokenInfo.style.display = 'none'
    },
    myfilter (value) {
      if (value.indexOf(this.filterText) > -1) {
        return value
      }
    },
    fouce () {
      this.$refs.TokenInfo.style.display = 'block'
    },
    hide () {
      this.$refs.TokenInfo.style.display = 'none'
    },
    back () {
      this.$router.go(-1)
    },
    curr () {
      this.historyNames.push(this.$refs.searchName.value)
      window.localStorage.setItem('historyNames', JSON.stringify(this.historyNames))
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
  padding: 0 40px;
  height: 129px;
  background: url("../../../static/img/purseImg/accountsHeadBg.png") no-repeat left top;
  /* display: flex;
  justify-content: space-between; */
  font-size: 34px;
  color: #fff;
}
.lef, .ser, .curr {
  display: inline-block
}
.curr {
  position: relative;
  right: -50px;
  top: -8px;
}
.lef > img {
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
  left: 30px;
  top: -10px;
}
.TokenInfo {
  padding: 0 30px;
  color: #666;
  width: 450px;
  height: 600px;
  line-height: 50px;
  position: absolute;
  left: 105px;
  top: 94px;
  background: #fff;
  z-index: 6;
  font-size: 26px;
  display: none;
  overflow-y: scroll
}
</style>
