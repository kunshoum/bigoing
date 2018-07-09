<template>
    <div class="porerty">
        <div class="porertyHeade" v-for="(item,index) in perInfo" :key="index">
            <div class="headPortrait">
              <img :src="item.numbreImg"/>
            </div>
            <div class="user">{{item.name}}</div>
            <div class="psw">
                <span>{{item.address}}</span>
                <span class="erCode">
                  <router-link :to="{path:'/Qrcode'}">
                    <img src="../../../static/img/porpertyImg/erCode.png">
                  </router-link>
                </span>
            </div>
            <div class="total">总资产 （CNY）</div>
            <div class="totalNum">111</div>
        </div>
        <div class="assets">
            <div class="assetsTitle">资产配比图</div>
            <div id="main" ></div>
            <div class="information">
                <ul>
                  <li v-for="(eth, index) in eth" :key="index">
                    <span><img :src="eth.img"/></span>
                    <span>{{eth.name}}</span>
                    <span>{{eth.balance}}</span>
                  </li>
                  <li v-for="(opinionData, index) in opinionDatas" :key="index">
                    <span><img :src="opinionData.img"/></span>
                    <span>{{opinionData.name}}</span>
                    <span>{{opinionData.balance}}</span>
                  </li>
                </ul>
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
import { commonToken } from '../../assets/js/commonConfig.js'
import footer from '../../components/footer'
export default {
   data () {
        return {
          charts: '',
          opinion: ['BTC', 'ETC', 'EOS', 'OMG'],
          opinionData: [],
          // plus: 0//和
          opinionDatas: [],
          opi: [],
          opis: [],
          num: 0,
          perInfo: [],
          eth: []
        }
      },
      components: {
        'my-footer': footer
      },
      computed: {
        currentWeb3: function () {
          return this.$store.state.web3index
        }
      },
      watch: {
      currentWeb3: function () {
          this.$store.dispatch('getAllTokenBalance')
        }
      },
      methods: {
        drawPie (id) {
          this.charts = this.$echarts.init(document.getElementById(id))
          this.charts.setOption({
            tooltip: {
              trigger: 'item',
              formatter: '{a}<br/>{b}:{c} ({d}%)'
            },
            legend: {
              show: true,
              orient: 'vertical',
              x: 'right',
            //   right:30,
              top: 'middle',
              data: this.opinion
            },
            color: ['#ff9000', '#468e5f', '#bc3814', '#00479d', '#ffb530'],
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: true,
                label: {
                  normal: {
                    show: true,
                    position: 'center',
                    left: 300,
                    formatter: '{d}%'
                  },
                  emphasis: {
                    show: true,
                    testStyle: {
                      fontSize: '30',
                      fontWeight: 'bold'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: this.opinionData
              }
            ]
          })
        },
          getBalance () {
            let tokens = this.$store.state.token
            for (let i in tokens) {
              console.log(tokens)
              this.opi.push(tokens[i])
            }
            // 排序
            this.opi.sort(function (a, b) {
                var x = b['balance']
                var y = a['balance']
                return ((x < y) ? -1 : ((x > y) ? 1 : 0))
            })
            for (let i in this.opi) {
                this.opi[i].value = this.opi[i].balance
                  if (i >= 4) {
                    this.num += Number(this.opi[i].balance)
                  }
                  if (this.opi[i].balance !== 0 || this.opi[i].name === 'ETH') {
                      this.opinionDatas.push(this.opi[i])
                  }
                  if (i < 4 && this.opi[i].balance !== 0) {
                    this.opinionData.push(this.opi[i])
                    this.opinion.push(this.opi[i].name)
                  } else if (i > 4 && this.opi[i].balance !== 0) {
                     this.opinionData.push(this.opi[0], this.opi[1], this.opi[2], this.opi[3], {name: '其他', value: this.num})
                     this.opinion.push(this.opi[0].name, this.opi[1].name, this.opi[2].name, this.opi[3].name, '其他')
                  }
            }
            // this.opinionData.push(this.opi[0],this.opi[1],this.opi[2],this.opi[3],{name:'其他',value:this.num})
            // this.opinion.push(this.opi[0].name,this.opi[1].name,this.opi[2].name,this.opi[3].name,'其他')
            // console.log(this.opis )
          }
       },
      mounted () {
        this.$nextTick(function () {
          this.drawPie('main')
        })
      },
      created () {
        this.eth.push(commonToken[0])
        this.getBalance()
        // this.sortByKey((this.$store.state.token,'balance'));
        let Info = window.localStorage.getItem('LoginAccount')
        this.perInfo.push(JSON.parse(Info))
        console.log(this.perInfo)
      }
}
</script>
<style scoped>
ul{
  padding:0 1px
}
li {
  list-style: none;
  height: 132px;
  line-height: 132px;
  border-bottom: 1px solid #999;
}
.porerty {
    position: relative;
}
.porertyHeade {
    height: 498px;
    width: 100%;
    background: url("../../../static/img/porpertyImg/headerBg.png") no-repeat left top;
    background-size: 100%;
    padding: 1px 0
}
.headPortrait {
    height: 110px;
    width: 110px;
    border-radius: 100%;
    margin: 120px auto 0
}
.headPortrait>img {
    height: 110px;
    width: 110px;
}
.user {
    margin-top: 20px;
    text-align: center;
    font-size: 28px;
    color: #fff
}
.psw {
    margin-top: 10px;
    text-align: center;
    font-size: 24px;
     color: #fff;
     position: relative;
}
.erCode {
    width: 26px;
    height: 26px;
    margin-left: 20px;
    /* position: absolute;
    top: 5px;
    right: 174px; */
}
.erCode>img {
    width: 26px;
    height: 26px;
}
.total {
    margin-top: 25px;
    text-align: center;
    color: #fff;
    font-size: 20px
}
.totalNum {
    margin-top: 20px;
    text-align: center;
    color: #fff;
    font-size: 36px
}
.assets {
    width: 90%;
    height: 330px;
    position: absolute;
    left: 5%;
    top: 460px;
    background: #fff;
    border-radius: 25px
}
.assetsTitle {
    margin: 20px 20px;
    color: #666;
    font-size: 30px;
    font-weight: bold
}
#main {
    width: 100%;
    height: 300px;
    margin-left: -170px
}
li>span {
  margin: 0 30PX
}
li>span>img {
  width: 78px;
  height: 78px;
  float: left;
  margin: 26px 0 0 100px
}
</style>
