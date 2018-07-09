<template>
    <draggable  v-model = 'sortList'>
      <mt-cell-swipe class="select" v-for = 'item in sortList' :key="item.id"  @click="dragShow(item)"
        :right="[
          {
            content: '<img src=./../../../../static/images/selectDel.png class=delImg> 删除',
            handler: ()=>deleteFn(),
          }
        ]">
            <img src="./../../../../static/images/selfSelec.png" alt="">
            <div class="selectCon">
                  <h3>ETH 测试数据:{{item.name}}</h3>
            </div>
            <img class="dragImg" v-show="dragIcon" src="./../../../../static/images/dragable.png" alt="">
      </mt-cell-swipe>
    </draggable>
</template>
<script>
import draggable from 'vuedraggable'

export default {
  data () {
    return {
      radioStatus: 'radio',
      dragIcon: true,
      sortList: [
        {id: 1, name: 'mm'},
        {id: 2, name: 'lily'},
        {id: 3, name: 'lucy'},
        {id: 4, name: 'jack'},
        {id: 5, name: 'jhon'},
        {id: 6, name: 'linda'},
        {id: 7, name: 'dawei'}
      ]
    }
  },
  components: {
    draggable
  },
  methods: {
    deleteFn () {
      this.$messagebox('确认删除该自选数据')
    },
    radioClick () {
      if (this.radioStatus === 'radio') {
        this.radioStatus = 'radioCheck'
      } else {
        this.radioStatus = 'radio'
      }
    },
    dragShow (item) {
      console.log(item)
      // this.dragIcon = true
    }
  }
}
</script>
<style lang="scss" scoped>
.select{
  position: relative;
  margin-bottom: 16px;
  img{
    // float: left;
    width: 71px;
    height: 71px;
    // position: absolute;
    // left: 30px;
  }
  .selectCon{
    // float: left;
    width: 543px;
    height:95px;
        h3{
          font-size: 30px;
          color: #333333;
          text-indent: 45px;
          margin-top: 25px;
          line-height: 50px;
        }
  }
  .dragImg{
    width: 44px;
    height: 28px;
  }
}
</style>
