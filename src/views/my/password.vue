<template>
    <div class="password">
        <div class="pasHeade">
            <div class="left" @click="purse">
                <img src="../../../static/img/purseImg/left.png"/>
            </div>
            <div>修改指令密码</div>
        </div>
        <ul>
            <li>
                <input type="text" value="" name="" placeholder="当前指令密码" ref="oldPsw"/>
            </li>
            <li>
                <input type="text" value="" name="" placeholder="新的指令密码" ref="newPsw"/>
            </li>
            <li>
                <input type="text" value="" name="" placeholder="重复指令密码"  ref="repeatPsw"/>
            </li>
        </ul>
        <div class="pswInfo">
            <p>
                <img src="../../../static/img/purseImg/sc.png"/>
            </p>
            <p>忘记密码？ 导入助记词或私钥可重置密码， <span @click="qianbaos">马上导入</span></p>
        </div>
        <div type="button" class="ctrlSBtn" @click="ctrlS">
            <img src="../../../static/img/purseImg/btn.png"/>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            password: '',
            privateKey: ''
        }
    },
    methods: {
        purse () {
            this.$router.push({path: '/purse'})
        },
        qianbaominngchen () {
            this.$messagebox({title: '初始密码有误，请重新输入', message: ' ', showInput: false, confirmButtonText: '确认', confirmButtonClass: 'yes', confirmButtonText: '确定'})
        },
        oldPsw () {
            this.$messagebox({title: '密码格式错误', message: ' ', showInput: false, confirmButtonText: '确认', confirmButtonClass: 'yes', confirmButtonText: '确定'})
        },
        newPsw () {
            this.$messagebox({title: '两次输入不同', message: ' ', showInput: false, confirmButtonText: '确认', confirmButtonClass: 'yes', confirmButtonText: '确定'})
        },
        ctrlS () {
            let patrn = /^(\w){8,20}$/
           let Info = JSON.parse(window.localStorage.getItem('LoginAccount'))
            if (this.$refs.oldPsw.value !== Info.passOne) {
                this.qianbaominngchen()
            } else if (!patrn.exec(this.$refs.newPsw.value)) {
                this.oldPsw()
            } else if (this.$refs.repeatPsw.value !== this.$refs.newPsw.value) {
                this.newPsw()
            } else {
                Info.passOne = this.$refs.newPsw.value
                window.localStorage.setItem('LoginAccount', JSON.stringify(Info))
            }
        },
        qianbaos () {
            this.$messagebox.confirm ('', {title: '请输入指令密码', message: '   ', showInput: true, confirmButtonText: '确认', confirmButtonClass: 'yes', showCancelButton: true}).then(action => {
                this.zhujicis()
            })
        },
        zhujicis () {
            this.$messagebox.confirm ('', {title: '导出私钥', message: '   ', showInput: true, confirmButtonText: '确认', confirmButtonClass: 'sure', confirmButtonText: '复制私钥', inputValue: this.privateKey}).then(action => {
              this.copyUrl2s()
            })
        },
        copyUrl2s () {
            var e = document.getElementsByClassName('mint-msgbox-input')
            let eValue = e[0].children[0]
            eValue.select()
            document.execCommand('Copy')
        }
    },
    created () {
        let walletInformation = window.localStorage.getItem('walletInformation')
        this.walletInformation = JSON.parse(walletInformation)
        console.log(this.walletInformation)
        for (let i in this.walletInformation) {
            this.privateKey = this.walletInformation[i].privateKey
        }
    }
}
</script>
<style scoped>
    .erCode {
        padding: 0 25px
    }
    ul {
        margin:10px 30px
    }
    li {
        list-style: none;
        height: 103px;
        width: 660px;
        border-bottom: 2px solid #EFEFEF;
        padding: 0 20px
    }
    input {
        height: 90px;
        width: 700px;
        border: none;
        outline: none;
        font-size: 12px
    }
    .pasHeade {
        height: 129px;
        width: 100%;
        background: #F15024;
        text-align: center;
        position: relative;
        line-height: 129px;
        color: #f2f2f2;
        font-size: 32px
    }
    .left {
        position: absolute;
        left: 30px;
        top: 10px;
    }
    .left>img {
        width: 20px;
        height: 30px;
    }
    .pswInfo {
        margin-top: 30px;
        position: relative;
    }
    .pswInfo>p:nth-child(2) {
        display: inline-block;
        margin-left: 120px;
        color: #b3b3b3
    }
    .pswInfo>p:nth-child(2)>span {
        color: #F38153;
        text-decoration: underline
    }
    .pswInfo>p:nth-child(1) {
        position: absolute;
        left: 50px;
        top: 0px;
    }
    .pswInfo>p:nth-child(1)>img {
        width: 40px;
        height: 40px;
    }
    .ctrlSBtn {
        width: 306px;
        height: 73px;
        border-radius: 36.5px;
        margin: 144px auto
    }
    .ctrlSBtn>img {
        width: 306px;
        height: 73px;
    }
</style>
