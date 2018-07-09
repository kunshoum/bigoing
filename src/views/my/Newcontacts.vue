<template>
    <div class="subject">
      <div class="header">
        <img src="../../../static/images/fanhui.png" @click="back()">
        <span>新建联系人</span>
        <span class="wangc" @click="creatNew()">完成</span>
      </div>
      <div class="conten">
        <img :src="imgUrl">
        <div class="contenTwo">
          <input v-model="name" type="text" placeholder="昵称">
        <img src="../../../static/images/bianjiren.png">
        </div>
        <div class="contenTer">
        <input v-model="adress" type="text" placeholder="联系人钱包地址" maxlength="20">
        <div class="scan">
        <img src="../../../static/images/icon5.png">
        </div>
        </div>
        <input v-model="remark" type="text" placeholder="备注" class="beiZhu" maxlength="20">
        </div>
    </div>
</template>
<script>
export default {
     data () {
    return {
        name: '',
        adress: '',
        remark: '',
        imgUrl: '../../../static/images/touxiang.png',
        contasData: [
            {
            name: '',
            adress: '',
            remark: '',
            imgUrl: ''
            }
        ],
        contasObj: {
            name: '',
            adress: '',
            remark: '',
            imgUrl: ''
        }
    }
  },
  methods: {
    creatNew () {
        var data = JSON.parse(window.localStorage.getItem('contatData'))
        if ( data.length > 0 ) {
                this.contasObj.name = this.name
                this.contasObj.adress = this.adress
                this.contasObj.remark = this.remark
                this.contasObj.imgUrl = this.imgUrl
                data.push(this.contasObj)
                window.localStorage.setItem('contatData', JSON.stringify(data))
                this.$router.push(`/contacts`)
        } else {
            for (let i = 0; i < this.contasData.length; i++) {
                this.contasData[i].name = this.name
                this.contasData[i].adress = this.adress
                this.contasData[i].remark = this.remark
                this.contasData[i].imgUrl = this.imgUrl
            }
            window.localStorage.setItem('contatData', JSON.stringify(this.contasData))
            this.$router.push(`/contacts`)
        }
    },
    back () {
        this.$router.push(`/contacts`)
    }
  }
}
</script>
<style lang='scss'>
    body{
         background: whitesmoke;
    .subject{
       width: 100%;
        .header{
        width:100%;
        height: 88px;
        background: url("../../../static/images/dbjb@2x.png");
        background-size: 750px 88px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 32px;
        color: #ffffff;
        img{
            width: 18px;
            height:33px;
            margin-left: 30px;
        }
        .wangc{
            margin-right: 30px;
          }
        }
        .conten{
            background: #ffffff;
            width: 690px;
            height: 911px;
            margin: 0 auto;
            margin-top: 120px;
            margin-left: 30px;
            margin-right: 30px;
            border-radius: 25px;
            position: relative;
            img{
                width: 187px;
                height: 187px;
                position: absolute;
                left: 35%;
                top: -66px;
            }
            .contenTwo{
                position: absolute;
                left: 42.5%;
                top: 100px;
                img{
                    width: 22px;
                    height: 25px;
                    left: 115%;
                    top: 28px;
                }
                 input{
                    width: 50px;
                    height: 20px;
                    padding: 10px;
                    border:none;
                    margin-top: 20px;
                }
            }
            .contenTer{
                position: absolute;
                left: 24px;
                top: 200px;
                input{
                width: 600px;
                 padding:20px;
                 border: 1px solid #e5e5e5;
                 color: #e5e5e5;
                 letter-spacing: 2px;
                // border-radius: 10px;
                }
                .scan{
                position: absolute;
                right: 5%;
                top: 120%;
                background: none;
                border: none;
                width: 30px;
                height: 35px;
                img{
                    width: 33px;
                    height: 33px;
                }
                }
            }
            .beiZhu{
                //  border-radius: 10px;
                 position: absolute;
                 left: 24px;
                 top: 300px;
                 width: 600px;
                 padding: 20px;
                 border: 1px solid #e5e5e5;
                 color: #e5e5e5;
                 letter-spacing: 2px;
              }
            }
         }
     }
</style>
