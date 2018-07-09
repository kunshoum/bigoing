<template>
    <div class="purse">
        <div class="purseHeader">
            <div class="head">
                <div>
                    <img src="../../../static/img/purseImg/left.png"/>
                </div>
                <div>钱包信息</div>
                <div>交易记录</div>
            </div>
        </div>
        <div class="perInfo">
            <div class="pic">
                <img :src="this.src"/>
            </div>
            <div class="psw">
                <span>{{address}}</span>
                <span class="erCode">
                    <img src="../../../static/img/purseImg/code.png"/>
                </span>
            </div>
            <div class="total">总价值约</div>
            <div class="totalNum">111 </div>
        </div>
        <div class="moneyInfo">
            <ul>
                <li>
                    <span>钱包名称：</span>
                    <input type="text" name="" value="" v-model="name" ref="moneyName"/>
                </li>
                <li>
                    <span>密码提示：</span>
                    <input type="text" name="" value="" v-model="prompt" ref="prompt"/>
                </li>
                <li @click="password">
                    <span>修改指令密码</span>
                    <img src="../../../static/img/purseImg/right.png"/>
                </li>
                <li @click="qianbao">
                    <span>导出私钥</span>
                    <img src="../../../static/img/purseImg/right.png"/>
                </li>
                <li @click="keyStore">
                    <span>导出Keystore</span>
                    <img src="../../../static/img/purseImg/right.png"/>
                </li>
            </ul>
            <div @click="del"><img src="../../../static/img/purseImg/ctrlS.png"/></div>
            <div @click="ctrS"><img src="../../../static/img/purseImg/del.png"/></div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            walletInformation: [],

            name: '',
            prompt: '',
            src: '',
            address: '',
            privateKey: ''
        }
    },
  methods: {
        keyStore () {
            this.$router.push({path: '/keyStore'})
        },
        password () {
            this.$router.push({path: '/password'})
        },
        qianbao () {
            this.$messagebox.confirm ( '', {title: '请输入指令密码', message: '   ', showInput: true, confirmButtonText: '确认', confirmButtonClass: 'yes', showCancelButton: true}).then(action => {
                this.zhujici()
            })
        },
        zhujici () {
            this.$messagebox.confirm ('', {title: '导出私钥', message: '   ', showInput: true, confirmButtonText: '确认', confirmButtonClass: 'sure', confirmButtonText: '复制私钥', inputValue: this.privateKey}).then(action => {
              this.copyUrl2()
            })
        },
        copyUrl2 () {
            var e = document.getElementsByClassName('mint-msgbox-input')
            let eValue = e[0].children[0]
            eValue.select()
            document.execCommand('Copy')
        },
        ctrS () {
           let Info = JSON.parse(window.localStorage.getItem('LoginAccount'))
           console.log(Info)
            Info.name = this.$refs.moneyName.value
            Info.passHint = this.$refs.prompt.value
            window.localStorage.setItem('LoginAccount', JSON.stringify(Info))
        },
        del () {
            window.localStorage.removeItem('LoginAccount')
        }
    },
    created () {
        let walletInformation = window.localStorage.getItem('LoginAccount')
        this.walletInformation.push(JSON.parse(walletInformation))
        console.log(this.walletInformation)
        for (let i in this.walletInformation) {
            this.name = this.walletInformation[i].name
            this.prompt = this.walletInformation[i].passHint
            this.src = this.walletInformation[i].numbreImg
            this.address = this.walletInformation[i].address
            this.privateKey = this.walletInformation[i].privateKey
        }
    }
}
</script>
<style scoped>
.purse {
    position: relative;
    background: #f7f7f7;
}
.purseHeader {
    width: 100%;
    height: 410px;
    background:url("../../../static/img/purseImg/bg.png");
    padding:1px 0;
}
.head {
    margin-top: 50px;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    font-size: 32px;
    color: #fff;
}
.head>div>img {
    width: 20px;
    height: 30px;
}
.perInfo {
    width: 90%;
    height: 360px;
    position: absolute;
    left: 5%;
    top: 150px;
    background: #fff;
    border-radius: 20px;
    -moz-box-shadow: 2px 2px 40px #333;
    -webkit-box-shadow: 2px 2px 40px #333;
    box-shadow:2px 2px 40px #333;
}
.pic {
    width: 130px;
    height: 130px;
    margin:25px auto;
}
.pic>img {
    width: 130px;
    height: 130px;
}
.psw {
    text-align: center;
    font-size: 24px;
    color: #666;
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
    color: #666;
    font-size: 24px
}
.totalNum {
    margin-top: 20px;
    text-align: center;
    font-size: 50px;
    color: #ff4200;
}
.moneyInfo {
    margin-top: 150px
}
ul li {
    list-style: none;
    margin:auto
}
li {
    width: 85%;
    padding:0 5%;
    height: 102px;
    border-bottom: 1px solid #e5e5e5;
    line-height: 102px;
    color: #333
}
li>img {
    width: 15px;
    height: 25px;
    float: right;
    margin: 40px 20px 0 0
}
.moneyInfo>div:nth-child(2) {
    margin-top: 65px
}
.moneyInfo>div {
    width: 311px;
    height: 84px;
    margin:12px auto
}
.moneyInfo>div>img {
    width: 311px;
    height: 84px;
}
input {
    border: none;
    height: 84px;
    width: 400px;
    outline: none;
    margin-left: 20px;
    background: #f7f7f7
}

</style>
