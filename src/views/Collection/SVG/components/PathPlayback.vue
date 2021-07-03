<template>
  <div class="path-playback-container">
    <el-button @click="pathActive">路径回放</el-button>
    <svg id="floor-track" width="100%" height="100%">
      <defs id="defs"></defs>
      <polyline
        id="polyline"
        :points="trackPoints"
        style="
          stroke-dashoffset: 500px;
          stroke-dasharray: 500px;
          stroke: red;
          stroke-width: 1px;
          fill: none;
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
import { onMounted, nextTick, computed } from 'vue'
export default {
  name: 'PathPlayback',
  setup () {
    const trackPoints = '285.7372661354583 242.48817211155375,435.5419235059762 226.42920318725095,585.8660693227093 225.8645418326693,600.8973545816734 259.2699075697211,600.8973545816734 259.2699075697211,601.586241434263 255.5996087649402'

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
    let defs
    let polyline

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
      console.log(len)
      return len
    }

    const pathActive = () => {
      polyline.style.strokeDashoffset = trackLen + 'px' // 不可见长度
      polyline.style.transition = ".1s";
      setTimeout(() => {
        polyline.style.transition = ".8s";
        polyline.style.strokeDashoffset = '0px' // 不可见长度
      }, 300)
    }

    onMounted(async () => {
      await nextTick()
      defs = document.getElementById('defs')
      polyline = document.getElementById("polyline");
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
      trackLen,
      pathActive
    }
  }
}
</script>

<style lang="scss" scoped>
.path-playback-container{
  height: 100%;
}
</style>