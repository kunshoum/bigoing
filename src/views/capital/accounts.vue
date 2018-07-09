<template>
    <div class="accounts">
        <div class="accountsHead">
            <div class="left">
                <img src="../../../static/img/purseImg/left.png">
            </div>
            <div>ETH转账</div>
            <div class="erC">
                <img src="../../../static/img/purseImg/erC.png">
            </div>
        </div>
        <div class="accountsContent">
            <div>
                <input type="text" value="" name="" placeholder="收款人红包地址" class="perInfo"/>
                <p class="per"><img src="../../../static/img/purseImg/per.png"/></p>
            </div>

            <div class="type" @click="show">
                <p ref="typeText">币种选择</p>
                <p class="down"><img src="../../../static/img/purseImg/down.png"/></p>
                <div class="search" ref="searchs" v-show="willShow">
                    <input type="text" value="" v-model="filterText"/>
                    <div v-for="(item,index) in CurrencyName" :key="index" @click="CurrencyNameS(index)" ref="search">{{myfilter(item)}}</div>
                </div>
            </div>

            <div>
                <input type="text" value="" name="" placeholder="转账数量"/>
            </div>
            <div>
                <input type="text" value="" name="" placeholder="备注"/>
            </div>
            <div class="cost">
                矿工费用
            </div>
        </div>
        <div class="costInfo">
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">经济</mt-tab-item>
                <mt-tab-item id="2">普通</mt-tab-item>
                <mt-tab-item id="3">优先</mt-tab-item>
                <mt-tab-item id="4">自定义</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    1000
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    2000
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    3000
                </mt-tab-container-item>
                <mt-tab-container-item id="4">
                    <mt-range v-model="rangeValue"></mt-range>
                    {{rangeValue}}
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
        <div class="confirm">
            <img src="../../../static/img/purseImg/cost.png"/>
        </div>
    </div>
</template>

<script>
import { commonToken } from '../../assets/js/commonConfig.js'
export default {
    data () {
        return {
            selected: '',
            rangeValue: 0,
            CurrencyName: [],
            filterText: '',
            willShow: false
        }
    },
    created () {
        for (let i in commonToken) {
            this.CurrencyName.push(commonToken[i].name)
        }
    },
    methods: {
        myfilter (value) {
            if (value.indexOf(this.filterText) > -1) {
                return value
            }
        },
        CurrencyNameS (i) {
            this.$refs.typeText.innerText = this.$refs.search[i].innerText
        },
        show () {
            if (this.willShow === false) {
                this.willShow = true
            } else {
                this.willShow = false
            }
        }
    }
}
</script>

<style scoped>
.accountsHead {
    padding: 0 20px;
    height: 129px;
    background: url("../../../static/img/purseImg/accountsHeadBg.png") no-repeat left top;
    display: flex;
    justify-content: space-between;
    font-size: 36px;
    color:#fff;
}
.left>img {
    width: 25px;
    height: 40px;
    margin-top: 45px
}
.accountsHead>div:nth-child(2) {
    line-height: 129px
}
.erC>img {
    width: 60px;
    height: 60px;
    margin-top: 35px
}
.accountsContent {
    padding: 0 20px;
}
.accountsContent>div {
    height: 103px;
    line-height: 103px;
    border-bottom: 2px solid #E5E5E5;
    padding: 0 20px;
    color: rgb(102, 102, 102)
    /* font-size: 28px */
}
.accountsContent>div>p {
    display: inline-block;
}
.accountsContent>div>input {
    width: 500px;
    height: 99px;
    border: 0;
    outline: none
}
.accountsContent>div>.perInfo {
    height: 40px;
    margin-top: -10px
}
.per>img {
    width: 55px;
    height: 55px;
    margin:0.3333rem 0 0 100px;
}
.type {
    position: relative;
}
.down {
    width: 35px;
    height: 20px;
    position: absolute;
    right: 50px;
}
.down>img {
    width: 35px;
    height: 20px;
    /* margin-left: 521px */
}
.type {
    position: relative;
}
.type>p {
    margin-top: -1px
}
.accountsContent>.cost {
    border-bottom: 0;
}
.costInfo {
    width: 693px;
    height: 369px;
    margin:20px auto;
    background:#FFF0EE;
    border-radius: 10px;
}
.confirm {
    width: 306px;
    height: 73px;
    margin: 174px auto 0;
}
.confirm>img{
    width: 326px;
    height: 85px;
}
select {
    width: 97%;
    height: 100px;
    border: 0;
    outline: none
}
option {
    background: #F2F2F2;
}
.search {
    width: 90%;
    background: #F2F2F2;
    position: absolute;
    top: 103px;
    left: 6px;
    padding:10px 30px;
    /* display: none */
}
.search>input {
    width: 97%;
    height: 60px;
    border: 0;
    border-radius: 10px;
    outline: none;
    background: url('../../../static/img/purseImg/serch.png') no-repeat 97% center #fff;
    background-size: 40px 40px;
    padding: 0 10px
}
</style>
