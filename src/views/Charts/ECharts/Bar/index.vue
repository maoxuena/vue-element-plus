<template>
  <div class="bar-page">
    <el-row :gutter="10">
      <el-col :xs="24"
              :sm="12"
              :md="8"
              :lg="6">
        <div class="chart-box">
          <bar-charts :data="barData"></bar-charts>
        </div>
      </el-col>
      <el-col :xs="8"
              :sm="6"
              :md="4"
              :lg="3"
              :xl="1">

      </el-col>
    </el-row>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import BarCharts from './components/BarCharts'
import { getBarData } from '@/api/charts/echarts'
import { totalize, creatAry } from '@/utils'
export default {
  name: 'Bar',
  components: {
    BarCharts
  },
  setup () {
    let barData = ref({
      label: [],
      value: [],
      sum: []
    })

    const getAllData = () => {
      getBarData({ type: 0 }).then(data => {
        barData.value = { ...barData.value, ...data }
        const sum = totalize(barData.value.value)
        const len = barData.value.value.length
        barData.value = { ...barData.value, sum: creatAry(len, sum) }
      }).catch(err => {
        console.log(err)
      })
    }

    onMounted(() => {
      getAllData()
    })

    return {
      barData
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-box {
  height: 200px;
  padding: 5px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
</style>