<template>
    <div class="scan">
        <header>
            <div><img src="../../static/images/jiantouleft.png" alt=""></div>
            <div>扫码</div>
            <div><img src="../../static/images/tu.png" alt="" @click='querenzhujici()'></div>
        </header>
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        querenzhujici () {
            this.$messagebox.confirm('',
                {
                    title: '',
                    message: 'BIGOING想访问您的相册',
                    confirmButtonText: '确认',
                    confirmButtonClass: 'yes',
                    showCancelButton: true
                }
            ).then(action => {
                if (action === 'confirm') {
                    console.log(1)
                }
            }).catch(err => {
                if (err === 'cancel') {
                    console.log(2)
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.scan{
    header{
        width: 100%;
        height:88px;
        background: url("../../static/images/nav.png") no-repeat left top;
        display: flex;
        justify-content: space-around;
        align-items:center;
        position: fixed;
        top: 0;
        left: 0;
        div:nth-child(1){
            position: absolute;
            left: 30px;
            img{
                width: 18px;
                height: 33px;
            }
        }
        div:nth-child(2){
            color: #fff;
            font-size: 32px;
        }
            div:nth-child(3){
            position: absolute;
            right: 30px;
            img{
                width: 39px;
                height: 39px;
            }
        }
    }
}
</style>
