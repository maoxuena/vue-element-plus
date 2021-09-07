<template>
  <div class="svg-js-page">
    <div class="svg">
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { SVG } from '@svgdotjs/svg.js'
import 'svg.select.js'
import 'svg.resize.js'
export default {
  name: 'SvgJs',
  setup () {

    const init = () => {
      const canvas = SVG().size(1000, 1000).addTo('.svg')
      let rect = canvas.rect(400, 250)
      rect.selectize().resize()
    }

    onMounted(() => {
      init()
    })

    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-js-page{
  .svg{
    padding: 10px;
  }
}
</style>