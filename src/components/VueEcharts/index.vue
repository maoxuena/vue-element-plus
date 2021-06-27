<template>
  <div :class="[className, 'echarts']">
  </div>
</template>

<script>
import { watch, onMounted, inject } from 'vue'
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'VueEcharts',

  props: {
    options: Object,
    theme: [String, Object]
  },

  setup (props, context) {
    const Echarts = inject('ec')

    let dom
    let chart
    const className = `echarts${uuidv4()}`

    const initChart = () => {
      if (!chart) {
        dom = document.getElementsByClassName(className)[0]
        chart = Echarts.init(dom, props.theme)
        chart.on('click', (params) => {
          context.emit('getParams', params)
        })
      }
      props.options && chart.setOption(props.options)
    }

    onMounted(() => {
      initChart()
    })

    watch(() => props.options, () => {
      initChart()
    })

    return {
      className
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts {
  height: 100%;
  width: 100%;
}
</style>