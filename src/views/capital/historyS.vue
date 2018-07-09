<template>
    <div class="historyS">
        <div class="hotCurrency">
            <div v-for="(item,index) in currency" :key="index" ref="hotI">{{item}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            currency: ['BTC', 'FT', 'OCX', 'ZB', 'HT', 'CONI', 'CNN', 'CVT', 'CET/CNY']
        }
    }
}
</script>
<style>
      .hotCurrency>div {
        display: inline-block;
        padding: 0 30px;
        height: 54px;
        border-radius: 10px;
        background:#FFFFFF;
        margin: 25px;
      }
</style>
