<template>
    <div class="comPonent">
        <div class="conten" v-for="(item,key) in data" :key="key">
        <div class="contenLeft">
         <div>
         <img :src =item.img>
         <span class="zt"><b>{{item.capital}}</b><span>{{item.font}}</span></span>
         </div>
     </div>
     <div class="contenRight">
         <span>￥{{item.num}}</span>
         <button :class="item.amount.substring(0,1)=='-'?'reg':'green'">{{item.amount}}</button>
     </div>
 </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data () {
            return {
                zhi: []
            }
        },
        props: ['data'],
        mounted () {

        },
        methods: {
            sortByKey (array, key) {
                return this.$store.state.token.sort(function (a, b) {
                let x = b[key]
                let y = a[key]
                return ((x < y) ? -1 : ((x > y) ? 1 : 0 ))
                })
            },
            num () {
               this.sortByKey(this.zhi, 'num')
            }
        }
}
</script>
<style lang='scss'>

.comPonent{
          box-sizing: border-box;
          width:100%;
 .conten{
        border-bottom: 1px solid gainsboro;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:20px;
        .contenLeft{
            div{
                display: flex;
                align-items: center;
                img{
                    width: 100px;
                }
                .zt{
                    margin-left: 20px;
                    font-size: 30px;
                    span{
                        // color: gainsboro;
                         margin-left: 10px;
                    }
                }
            }
        }
        .contenRight{
             font-size: 24px;
              .reg{
                    background: #e2202d;
                    border: 1px solid #e2202d;
                    border-radius: 10px;
                    margin-left: 20px;
                    color:#ffffff;
                    width: 170px;
                    height: 60px;
              }
              .green{
                    border-radius: 10px;
                    margin-left: 20px;
                    color:#ffffff;
                    width: 170px;
                    height: 60px;
                    background: #2bbe27;
                    border: 1px solid #2bbe27;
            }
        }
    }
    }
</style>
