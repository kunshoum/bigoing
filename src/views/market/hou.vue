<template>
    <div class="hot">
        <div class="hotCurrency">
            <div @click="hotInfo(item,index)" v-for="(item,index) in curr" :key="index" ref="hotI" class="hotCurrencyOne">{{item.symbol}}</div>
        </div>
        <mt-index-list>
            <mt-index-section index="A" v-show="as.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in as" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                    <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="B" v-show="bs.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in bs" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                    <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="C" v-show="cs.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in cs" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="D" v-show="ds.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in ds" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="E" v-show="es.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in es" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.e === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="F" v-show="fs.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in fs" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="G" v-show="gs.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in gs" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="H" v-show="hs.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in hs" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="I" v-show="is.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in is" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="J" v-show="js.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in js" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="K" v-show="ks.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in ks" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="L" v-show="ls.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in ls" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="M" v-show="ms.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in ms" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="N" v-show="ns.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in ns" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="O" v-show="os.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in os" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                    <div @click="cell($,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="P" v-show="ps.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in ps" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="Q" v-show="qs.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in qs" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="R" v-show="rs.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in rs" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="S" v-show="ss.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in ss" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="T" v-show="ts.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in ts" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="U" v-show="us.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in us" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="V" v-show="vs.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in vs" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="W" v-show="ws.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in ws" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="X" v-show="xs.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in xs" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="Y" v-show="ys.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in ys" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="Z" v-show="zs.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in zs" :key="index" >
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                     <router-link :to="{path:'/eth', query:{item:item}}" class="rou">
                        <div class="sym">{{item.symbol}}</div>
                    </router-link>
                     <div @click="cell($event,item)"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>
<script>
import marketTokens from '../../assets/js/marketTokens.js'
import HotCurrencye from '../../assets/js/HotCurrencye.js'
export default {
    data () {
        return {
            as: [],
            bs: [],
            cs: [],
            ds: [],
            es: [],
            fs: [],
            gs: [],
            hs: [],
            is: [],
            js: [],
            ks: [],
            ls: [],
            ms: [],
            ns: [],
            os: [],
            ps: [],
            qs: [],
            rs: [],
            ss: [],
            ts: [],
            us: [],
            vs: [],
            ws: [],
            xs: [],
            ys: [],
            zs: [],
            curr: [],
            saveData: [],
            repeat: [],
            flage: true
        }
    },
    methods: {
        hotInfo (item, i) {
            if (item.flage === 1) {
                item.flage = 0
                this.$refs.hotI[i].style.background = '#FCBDAD'
                this.$refs.hotI[i].style.color = '#fff'
                let hotInfo = JSON.parse(window.localStorage.getItem('saveData'))
                for (let g in hotInfo) {
                    if(item.symbol === hotInfo[g].symbol) {
                        hotInfo.splice(hotInfo[g], 1)
                    }
                }
                window.localStorage.setItem('saveData', JSON.stringify(hotInfo))
            } else {
                item.flage = 1
                console.log(item.flage)
                this.$refs.hotI[i].style.background = '#fff'
                this.$refs.hotI[i].style.color = '#333'
            }
        },
        cell (e, item) {
            this.repeat = JSON.parse(window.localStorage.getItem('saveData')) || []
            e.target.parentNode.style.display = 'none'
            e.target.parentNode.nextElementSibling.style.display = 'block'
            this.repeat.push(item)
            window.localStorage.setItem('saveData', JSON.stringify(this.repeat))
        },
        hide (e, item) {
            e.target.parentNode.style.display = 'none'
            e.target.parentNode.previousElementSibling.style.display = 'block'
            this.repeat.splice(item, 1)
            window.localStorage.setItem('saveData', JSON.stringify(this.repeat))
        }
    },
    created () {
        for (let z in HotCurrencye.HotCurrencye) {
            HotCurrencye.HotCurrencye[z].flage = '1'
            this.curr.push(HotCurrencye.HotCurrencye[z])
        }
        let test = JSON.parse(window.localStorage.getItem('saveData')) || []
        for (let z in marketTokens) {
            for (let i in marketTokens[z]) {
                if (marketTokens[z][i].symbol.charAt(0) === 'A') {
                    this.as.push(marketTokens[z][i])
                    for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'B') {
                    this.bs.push(marketTokens[z][i])
                    for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'C') {
                    this.cs.push(marketTokens[z][i])
                    for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'D') {
                    this.ds.push(marketTokens[z][i])
                    for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'E') {
                    this.es.push(marketTokens[z][i])
                    for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'F') {
                    this.fs.push(marketTokens[z][i])
                     for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'G') {
                    this.gs.push(marketTokens[z][i])
                    for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'H') {
                    this.hs.push(marketTokens[z][i])
                     for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'I') {
                    this.is.push(marketTokens[z][i])
                    for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'J') {
                    this.js.push(marketTokens[z][i])
                    for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'K') {
                    this.ks.push(marketTokens[z][i])
                     for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'L') {
                    this.ls.push(marketTokens[z][i])
                    for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'M') {
                    this.ms.push(marketTokens[z][i])
                     for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'N') {
                    this.ns.push(marketTokens[z][i])
                    for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'O') {
                    this.os.push(marketTokens[z][i])
                    for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'P') {
                    this.ps.push(marketTokens[z][i])
                    for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'Q') {
                    this.qs.push(marketTokens[z][i])
                     for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'R') {
                    this.rs.push(marketTokens[z][i])
                    for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'S') {
                    this.ss.push(marketTokens[z][i])
                    for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'T') {
                    this.ts.push(marketTokens[z][i])
                     for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'U') {
                    this.us.push(marketTokens[z][i])
                     for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'V') {
                    this.vs.push(marketTokens[z][i])
                    for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'W') {
                    this.ws.push(marketTokens[z][i])
                    for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'X') {
                    this.xs.push(marketTokens[z][i])
                    for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'Y') {
                    this.ys.push(marketTokens[z][i])
                    for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                } else if (marketTokens[z][i].symbol.charAt(0) === 'Z') {
                    this.zs.push(marketTokens[z][i])
                    for (let n in test) {
                        let o = n
                        if (test.length !== 0) {
                            if (marketTokens[z][i].symbol === test[o].symbol) {
                                marketTokens[z][i].show = 1
                            }
                        }
                    }
                }
            }
        }
    }
}
</script>
<style>
    /* @import '../assets/css/hot'; */
    .hot {
        width: 100%;
        overflow: hidden;
    }
    .hotCurrency {
        padding: 0 40px
    }
    .hotCurrencyOne{
        display: inline-block;
        padding: 0 30px;
        height: 54px;
        border-radius: 10px;
        background:#FCBDAD;
        margin: 25px;
        line-height: 54px;
        color: #fff
    }
    @media screen and (max-height:812px) {
        .Currencytype {
            width: 90%;
            height: 15.766667rem;
            margin-left:20px ;
            line-height: 40px;
            background: #fff;
            overflow-y: scroll
        }
        .mint-indexlist-navitem {
            line-height: 0.5rem;
            color: #F06D55
        }
    }
    @media screen and (max-height:736PX) {
        .Currencytype {
            width: 90%;
            height: 11.946667rem;
            margin-left:20px ;
            line-height: 40px;
            background: #fff;
             overflow-y: scroll
        }
        .mint-indexlist-navitem {
            line-height: 27px;
            color: #F06D55
        }
    }
    .bar {
        position: fixed;
        top:180px;
        right: 10px;
    }
    .bar>div {
        margin: 15px 0
    }
    .mint-cell-wrapper {
        position: relative;
        width: 100%
    }
    .mint-cell-value>div:nth-child(3),.mint-cell-value>div:nth-child(4) {
        width: 45px;
        height: 45px;
        position: absolute;
        right: 20px;
        top: 30px
    }
    .mint-cell-value>div:nth-child(1)>img,.mint-cell-value>div:nth-child(3)>img,.mint-cell-value>div:nth-child(4)>img {
        width: 45px;
        height: 45px;
    }
     .mint-cell-value>div:nth-child(1) {
        width: 45px;
        height: 45px;
        position: absolute;
        left: 40px;
        top: 25px
    }
    .mint-cell-value>.rou>.sym {
        margin-left: 100px
    }
    .mint-indexlist-navitem {
        line-height: 27px;
        color: #F06D55
    }
</style>
