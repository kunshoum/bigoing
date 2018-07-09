<template>
    <div class='exaple'>
        <h2 @click='qianbao()'>切图文件2 备份钱包弹框</h2>
          <h2 @click='zhujici()'>切图文件2 备份助记词弹框</h2>
          <h2 @click='querenzhujici()'>切图文件2 备份助记词确认弹框</h2>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    qianbao () {
      this.$messagebox({title: '请输入指令密码', message: '   ', showInput: true, confirmButtonText: '确认', confirmButtonClass: 'yes', showCancelButton: true})
    },
    zhujici () {
      this.$messagebox({title: '导出私钥', message: '   ', showInput: true, confirmButtonText: '确认', confirmButtonClass: 'sure', confirmButtonText: '复制私钥'})
    },
    querenzhujici () {
      this.$messagebox.confirm('',
      {title: ' ', message: '你已确认抄写助记词，是否确认从BEGOING中移除该助记词', confirmButtonText: '确认', confirmButtonClass: 'yes', showCancelButton: true}
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
<style lang='scss' scoped>
.exaple{
  width: 100%;
  height: 1444px;
  h2{
    font-size: 28px;
    margin: 30px 0 0 40px;
  }
}
</style>
