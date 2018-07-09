<template>
    <div class="flash">
        <div class="flashHeader">
            <div>
                <img src="../../../static/img/purseImg/left.png"/>
            </div>
            <div>快讯</div>
        </div>
        <div class="time">
            <div class="month">
                <div>{{month}}</div>
                <div>月</div>
            </div>
            <div class="day">{{strDate}}日</div>
            <div class="week">{{week}}</div>
        </div>
        <ul class="info">
            <li v-for="(infos, index) in info" :key="index">
                <div>{{infos.time}}</div>
                <div>{{infos.title}}</div>
                <div>{{infos.content}}</div>
                <div class="addr">来源：金色财经</div>
                <div class="share">
                    <router-link :to="{path:'/flashShare'}">
                        <img src="../../../static/img/purseImg/share.png"/>
                        分享
                    </router-link>
                </div>
            </li>
        </ul>
        <my-footer></my-footer>
    </div>
</template>

<script>
import footer from '../../components/footer'
export default {
    data () {
        return {
            month: '',
            strDate: '',
            week: '',
            info: []
        }
    },
    components: {
        'my-footer': footer
      },
    methods: {
        getData () {
            this.$http.get('http://39.104.187.235/v1/news?limit=20').then((result) => {
                this.info = result.data.data.detail
            }).catch((err) => {
                console.log(err)
            })
        },
        getTime () {
            let date = new Date()
            this.month = date.getMonth() + 1
            this.strDate = date.getDate()
            var day = date.getDay()
            let weeks = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六')
            this.week = weeks[day]
            return this.week
        }
    },
    created () {
        this.getData()
        this.getTime()
    }
}
</script>
<style scoped>
.flash {
    background: #f7f7f7;
}
li {
    list-style: none
}
.flashHeader {
    width: 90%;
    height: 129px;
    background: url('../../../static/img/purseImg/head.png') no-repeat left top;
    padding: 0 5%;
    display: flex;
    justify-content: space-between;
    font-size: 32px;
    color: #fff;
    overflow-x: hidden;
}
.flashHeader>div {
    margin-top: 45px
}
.flashHeader>div>img {
    width: 20px;
    height: 30px;
}
.time {
    width: 100%;
    height: 90px;
    position: relative;
    font-size: 25px;
}
.month {
    width:45px;
    height: 65px;
    background: #f04524;
    border-radius: 10px;
    position: absolute;
    left: 62%;
    top: 35px;
    z-index: 6;
    color: #fff
}
.month>div {
    width:45px;
    text-align: center;
    line-height: 30px
}
.day {
    width: 85px;
    height: 65px;
    position: absolute;
    left: 67%;
    top: 35px;
    background: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    text-align: center;
    line-height: 65px
}
.week {
    float: right;
    margin:53px 60px;
}
.info>li {
    width: 85%;
    height: 620px;
    padding:20px 3%;
    margin:40px auto;
    border-radius: 20px;
    background: #fff;
}
.info>li>div:nth-child(1) {
   color: #666;
   margin-top: 10px
}
.info>li>div:nth-child(2) {
    font-size: 30px;
    line-height: 45px;
    margin-top: 20px;
    color: #222;
}
.info>li>div:nth-child(3) {
    font-size: 26px;
    line-height: 45px;
    color: #666;
    margin-top: 30px
}
.addr{
    float: left;
    margin: 40px 0 0 42px;
    color: #f16824;
    font-size: 22px
}
.share {
    float: right;
    margin: 40px 42px 0 0;
    color: #666;
    font-size: 22px
}
.share>img {
    height: 28px;
    width: 28px;
    float: left;
    margin: 3px 8px
}
</style>
