<template>
    <div>
        <div>
            {{ searchToken }}
            <button @click="test">
                获取token
            </button>
        </div>
    </div>
</template>

<script>
let searchToken = ''

export default {
    beforeCreate () {

    },
    data () {
        return {

        }
    },
    computed: {
      searchToken: function () {
          return this.$store.state.searchToken
      }
    },
    methods: {
      test () {
        this.$store.dispatch('getContractToken', '0x9a74e5cb727f37bd1c8ef3887b8491bbf8e11039')

        console.log(JSON.stringify(this.$store.state.searchToken))
      }
    }
}
</script>
<style>
</style>
