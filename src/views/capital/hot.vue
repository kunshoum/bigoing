<template>
    <div class="hot">
        <div class="hotCurrency">
            <div @click="hotInfo(index)" v-for="(item,index) in currency" :key="index" ref="hotI">{{item}}</div>
        </div>
        <mt-index-list>
            <mt-index-section index="A" v-show="a.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in a" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                    <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="B" v-show="b.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in b" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                    <div @click="cell($event,item)" v-show="item.show === 0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="C" v-show="c.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in c" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="D" v-show="d.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in d" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="E" v-show="e.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in e" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.e === 0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.e === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="F" v-show="f.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in f" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="G" v-show="g.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in g" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="H" v-show="h.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in h" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="I" v-show="i.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in i" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="J" v-show="j.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in j" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="K" v-show="k.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in k" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="L" v-show="l.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in l" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="M" v-show="m.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in m" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="N" v-show="n.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in n" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="O" v-show="o.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in o" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                    <div @click="cell($,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="P" v-show="p.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in p" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="Q" v-show="q.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in q" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="R" v-show="r.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in r" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="S" v-show="s.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in s" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="T" v-show="t.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in t" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="U" v-show="u.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in u" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="V" v-show="v.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in v" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="W" v-show="w.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in w" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="X" v-show="x.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in x" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="Y" v-show="y.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in y" :key="index">
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
            <mt-index-section index="Z" v-show="z.length === 0 ? 0 : 1">
                <mt-cell v-for="(item,index) in z" :key="index" >
                    <div><img src="../../../static/img/purseImg/nose.png"/></div>
                    <div>{{item.name}}</div>
                     <div @click="cell($event,item)" v-show="item.show ===0 ? 0 : 1"><img src="../../../static/img/purseImg/star.png"/></div>
                    <div @click="hide($event,item)" v-show="item.show === 1 ? 1 : 0"><img src="../../../static/img/purseImg/bgStar.png"/></div>
                </mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>
<script>
import { commonToken } from '../../assets/js/commonConfig.js'
export default {
    data () {
        return {
            currency: ['BTC', 'FT', 'OCX', 'ZB', 'HT', 'CONI', 'CNN', 'CVT', 'CET/CNY'],
            a: [],
            b: [],
            c: [],
            d: [],
            e: [],
            f: [],
            g: [],
            h: [],
            i: [],
            j: [],
            k: [],
            l: [],
            m: [],
            n: [],
            o: [],
            p: [],
            q: [],
            r: [],
            s: [],
            t: [],
            u: [],
            v: [],
            w: [],
            x: [],
            y: [],
            z: [],
            GoldData: [],
            repeat: []
        }
    },
    methods: {
        hotInfo (i) {
            this.$refs.hotI[i].style.background = '#FCBDAD'
            this.$refs.hotI[i].style.color = '#fff'
        },
        cell (e, item) {
            this.repeat = JSON.parse(window.localStorage.getItem('GoldData')) || []
            e.target.parentNode.style.display = 'none'
            e.target.parentNode.nextElementSibling.style.display = 'block'
            this.repeat.push(item)
            window.localStorage.setItem('GoldData', JSON.stringify(this.repeat))
        },
        hide (e, item) {
            e.target.parentNode.style.display = 'none'
            e.target.parentNode.previousElementSibling.style.display = 'block'
            this.repeat.pop(item)
            window.localStorage.setItem('GoldData', JSON.stringify(this.repeat))
        }
    },
    created () {
        for (let i in commonToken) {
            let test = JSON.parse(window.localStorage.getItem('GoldData'))
            for (let i in test) {
                var o = i
            }
            if (commonToken[i].name.charAt(0) === 'A') {
                this.a.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'B') {
                this.b.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'C') {
                this.c.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'D') {
                this.d.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'E') {
                this.e.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].e = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'F') {
                this.f.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'G') {
                this.g.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'H') {
                this.h.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'I') {
                this.i.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'J') {
                this.j.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'K') {
                this.k.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'L') {
                this.l.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'M') {
                this.m.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'N') {
                this.n.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'O') {
                this.o.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'P') {
                this.p.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'Q') {
                this.q.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'R') {
                this.r.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'S') {
                this.s.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'T') {
                this.t.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'U') {
                this.u.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'V') {
                this.v.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'W') {
                this.w.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'X') {
                this.x.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'Y') {
                this.y.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
                }
            } else if (commonToken[i].name.charAt(0) === 'Z') {
                this.z.push(commonToken[i])
                if (commonToken[i].name === test[o].name) {
                    commonToken[i].show = 1
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
    .hotCurrency>div {
        display: inline-block;
        padding: 0 30px;
        height: 54px;
        border-radius: 10px;
        background:#FFFFFF;
        margin: 25px;
        line-height: 54px
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
    .mint-cell-value>div:nth-child(2) {
        margin-left: 100px
    }
    .mint-indexlist-navitem {
        line-height: 27px;
        color: #F06D55
    }
</style>
