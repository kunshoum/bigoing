<template>
    <div class="comPonen">
        <div class="conten" v-for="(item,key) in data" :key = "key">
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
        mounted() {
        },
        methods: {
        }
}
</script>
<style lang='scss'>
.comPonen{
          box-sizing: border-box;
          width:100%;
 .conten{
        border-bottom: 1px solid gainsboro;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:28px 0;
        .contenLeft{
            div{
                display: flex;
                align-items: center;
                img{
                    width: 79px;
                    height: 79px;
                }
                .zt{
                    margin-left: 5px;
                    font-size: 10px;
                    span{
                         margin-left: 10px;
                    }
                }
            }
        }
        .contenRight{
             font-size: 10px;
              .reg{
                    background: #e2202d;
                    border: 1px solid #e2202d;
                    border-radius: 10px;
                    margin-left: 20px;
                    color:#ffffff;
                    width: 120px;
                    height: 50px;
              }
              .green{
                    border-radius: 10px;
                    margin-left: 20px;
                    color:#ffffff;
                    width: 120px;
                    height: 50px;
                    background: #2bbe27;
                    border: 1px solid #2bbe27;
            }
        }
        }
    }
</style>



