<template>
  <div class="path-playback-container">
    <div class="action-bar flex-box">
      <div class="action-item">
        <el-select
          v-model="typeValue"
          @change="changeType"
          placeholder="请选择"
        >
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="action-item">
        <el-select
          v-model="associationValue"
          @change="changeAssociation"
          placeholder="请选择"
        >
          <el-option
            v-for="item in associationOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="action-item">
        <el-button @click="pathActive">路径回放</el-button>
      </div>
    </div>
    <p class="track-len">当前路径长度：{{ trackLen() }}px</p>
    <svg id="floor-track" width="100%" height="100%">
      <defs id="defs"></defs>
      <polyline
        id="polyline"
        :points="trackPoints"
        :style="{ 'stroke-dasharray': trackLen() + 'px', ...trackStyle }"
        style="
          marker-start: url('#markerCircle');
          marker-end: url('#markerArrow');
        "
      ></polyline>
      <!-- 开始点 -->
      <template v-if="startPoint.length > 0">
        <circle
          :cx="startPoint[0]"
          :cy="startPoint[1]"
          r="10"
          stroke="none"
          fill="green"
        ></circle>
        <text
          :x="startPoint[0] - 6"
          :y="startPoint[1] - -3"
          fill="white"
          font-size="12"
        >
          进
        </text>
      </template>
      <!-- 结束点 -->
      <template v-if="endPoint.length > 0">
        <circle
          :cx="endPoint[0]"
          :cy="endPoint[1]"
          r="10"
          stroke="none"
          fill="red"
        ></circle>
        <text
          :x="endPoint[0] - 6"
          :y="endPoint[1] - -3"
          fill="white"
          font-size="12"
        >
          出
        </text>
      </template>
    </svg>
  </div>
</template>

<script>
import { onMounted, nextTick, computed, ref } from 'vue'
export default {
  name: 'PathPlayback',
  setup () {
    const options = [
      [{
        value: 300,
        label: '300ms'
      }, {
        value: 1000,
        label: '1000'
      }, {
        value: 1500,
        label: '1500ms'
      }],
      [{
        value: 100,
        label: '100px'
      }, {
        value: 200,
        label: '200px'
      }]
    ]
    const typeOptions = [{
      value: 0,
      label: '时间(毫秒)'
    }, {
      value: 1,
      label: '速度(每秒)'
    }]
    let time = 300
    const typeValue = ref(0)
    const associationOptions = ref([])
    const associationValue = ref(0)
    associationOptions.value = options[typeValue.value]
    associationValue.value = associationOptions.value[0].value

    const trackPoints = '285.7372661354583 242.48817211155375,435.5419235059762 226.42920318725095,585.8660693227093 225.8645418326693,600.8973545816734 259.2699075697211,600.8973545816734 259.2699075697211,601.586241434263 255.5996087649402'

    let trackStyle = ref({
      transition: '0s',
      strokeDashoffset: '0px',
      stroke: 'red',
      strokeWidth: '1px',
      fill: 'none'
    })

    // 起始点
    const startPoint = computed(() => {
      let point = []
      if (trackPoints) {
        const pointList = trackPoints.split(',')
        if (pointList && pointList.length > 0) {
          point = pointList[0].split(' ')
        }
      }
      return point
    })
    // 结束点
    const endPoint = computed(() => {
      let point = []
      if (trackPoints) {
        const pointList = trackPoints.split(',')
        if (pointList && pointList.length > 0) {
          point = pointList[pointList.length - 1].split(' ')
        }
      }
      return point
    })

    // 改变类型
    const changeType = (value) => {
      associationOptions.value = options[value]
      associationValue.value = options[value][0].value
      changeAssociation(associationValue.value)
    }

    const changeAssociation = (value) => {
      if (typeValue.value === 0) {
        time = value
      } else {
        let len = trackLen()
        time = len / value * 1000
      }
    }


    // 轨迹长度
    const trackLen = () => {
      let len = 0
      let prevPos
      if (trackPoints) {
        const pointList = trackPoints.split(',')
        for (var i = 0; i < pointList.length; i++) {
          var pos = pointList[i].split(' ')
          if (i > 0) {
            len += Math.sqrt(Math.pow((pos[0] - prevPos[0]), 2) + Math.pow((pos[1] - prevPos[1]), 2))
          }
          prevPos = pos
        }
      }
      return len
    }
    // 轨迹回放
    const pathActive = () => {
      console.log('time', time)
      trackStyle.value.strokeDashoffset = trackLen() + 'px' // 不可见长度
      trackStyle.value.transition = ".1s"
      setTimeout(() => {
        trackStyle.value.transition = time / 1000 + 's'
        trackStyle.value.strokeDashoffset = '0px' // 不可见长度
      }, 300)
    }

    onMounted(async () => {
      await nextTick()
      let defs = document.getElementById('defs')
      defs.innerHTML = `        
        <marker id="markerCircle" markerwidth="8" markerheight="8" refx="5" refy="5" >
          <circle cx="5" cy="5" r="3" style="stroke: none; fill: red"></circle>
        </marker>
        <marker id="markerArrow" markerwidth="13" markerheight="13" refx="2" refy="6" orient="auto" >
          <path d="M2,2 L2,11 L10,6 L2,2" style="fill: red"></path>
        </marker>`
    })

    return {
      trackPoints,
      startPoint,
      endPoint,
      trackStyle,
      typeOptions,
      typeValue,
      associationOptions,
      associationValue,
      changeType,
      changeAssociation,
      trackLen,
      pathActive
    }
  }
}
</script>

<style lang="scss" scoped>
.path-playback-container{
  height: 100%;

  .action-bar{
    justify-content: flex-start;
    
    .action-item{    
      padding-right: 15px;

      &:last-child{
        padding-right: 0;
      }
    }
  }

  .track-len{
    padding: 15px 5px;
  }
}
</style>