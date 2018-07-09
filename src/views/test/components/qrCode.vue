<template>
    <div>
      <canvas id="canvas"></canvas>
      <button @click="random">
          生成二维码
      </button>
    </div>
</template>

<script>

import QRCode from 'qrcode'

export default {
    data () {
        return {

        }
    },
    methods: {
        random () {
            QRCode.toCanvas(document.getElementById('canvas'), 'sample text', function (error) {
                if (error) console.error(error)
                console.log('success!')
            })
        }
    }
}
</script>
<style>
</style>
