<template>
    <div class="historyS">
        <div class="hotCurrency">
            <div v-for="(item,index) in cur" :key="index" ref="hotI">{{item}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            cur: []
        }
    },
    created () {
        this.cur = JSON.parse(window.localStorage.getItem('historyNames'))
    }
}
</script>
<style>
      .hotCurrency>div {
        display: inline-block;
        padding: 0 30px;
        height: 54px;
        line-height: 54px;
        border-radius: 10px;
        background:#FFFFFF;
        margin: 25px;
      }
</style>
