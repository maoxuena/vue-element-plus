<template>
  <div class="line-trends-page">
    <vue-echarts :options="options" />
  </div>
</template>

<script>
import VueEcharts from '@/components/VueEcharts'
import { ref, watch, onMounted } from 'vue'
export default {
  name:'LineTrends',
  props: {
    data: Object,
  },
  components: {
    VueEcharts
  },
  setup(props){
    const options = ref(null)

    const updateChart = () => {
      options.value = {
        title: {
          text: '动态数据 + 时间坐标轴'
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0]
            var date = new Date(params.name)
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1]
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          }
        },
        series: [{
          name: '模拟数据',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: props.data
        }]
      }
    }

    watch(() => props.data, () => {
      updateChart()
    },{
      deep:true,
    })

    onMounted(() => {      
      updateChart()
    })

    return{
      options
    }
  }
}
</script>

<style lang="scss" scoped>
.line-trends-page{
  height: 100%;
}
</style>