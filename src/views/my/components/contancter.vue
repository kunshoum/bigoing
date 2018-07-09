<template>
<div v-bind = 'data'>
      <mt-cell-swipe class="contat" v-for = "(item,index) in data" :key="item.name"
      :right="[
        {
          content: '编辑',
          style: { background: '#F15424', color: '#fff', },
          handler: ()=>editFn(index),
        },
        {
          content: 'Ｘ',
          style: { background: '#D72634', color: '#fff', },
          handler: ()=>deleteFn(index),
        },

      ]">
      <img :src="item.imgUrl" alt="">
      <div>
        <h3>{{item.name}}</h3>
        <h5>{{item.adress}}</h5>
      </div>
    </mt-cell-swipe>
</div>
</template>
<script>

export default {
  props: ['data'],
  data () {
    return {

    }
  },
  methods: {
    editFn (index) {
      window.localStorage.setItem('editIndex', index)
        this.$router.push(`/Editcontact`)
        window.localStorage.setItem('editContact', JSON.stringify(this.data[index]))
    },
    deleteFn (index) {
      this.data.splice(index, 1)
      window.localStorage.setItem('contatData', JSON.stringify(this.data))
    }
  }
}
</script>
<style lang="scss" scoped>
.contat{
  // display: none;
  margin-bottom: 15px!important;
  img{
    width: 98px;
    height: 98px;
    float: left;
    margin-left: 50px;
  }
  div{
    width: 300px;
    height: 100%;
    float: left;
    h3{
          font-size: 26px;
          color: #222;
          margin-left: 40px;
      }
    h5{
          font-size: 20px;
          color: #222;
          margin-top: 10px;
          margin-left: 40px;
      }

  }
}
</style>
