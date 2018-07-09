<template>
    <div>
        <v-mnemonic></v-mnemonic>
        <v-importAccount></v-importAccount>
        <v-qrCode></v-qrCode>
    </div>
</template>

<script>
import mnemonic from '../test/components/mnemonic.vue'
import importAccount from '../test/components/importAccount.vue'
import qrCode from '../test/components/qrCode.vue'

export default {
    beforeCreate () {
        this.$store.dispatch('registerWeb3')
    },
    data () {
        return {

        }
    },
    components: {
        'v-mnemonic': mnemonic,
        'v-importAccount': importAccount,
        'v-qrCode': qrCode
    },
    computed: {

    },
    methods: {

    },
    watch: {

    },
    mounted () {

    }
}
</script>
<style>
</style>
