<template>
  <div class="svg-container">
    <el-tabs tab-position="left">
      <el-tab-pane v-for="item in list" :key="item.value" :label="item.name">
        <div class="tab-body">
          <loading v-if="item.value === 0" />
          <animation-related v-if="item.value === 1" />
          <path-playback v-if="item.value === 2" />
          <within-polygon v-if="item.value === 3" />
          <draw-polygon v-if="item.value === 4" />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Loading from './components/Loading.vue'
import AnimationRelated from './components/AnimationRelated.vue'
import PathPlayback from './components/PathPlayback.vue'
import WithinPolygon from './components/WithinPolygon.vue'
import DrawPolygon from './components/DrawPolygon.vue'
export default {
  name: 'SVG',
  components: {
    Loading,
    AnimationRelated,
    PathPlayback,
    WithinPolygon,
    DrawPolygon
  },
  setup () {
    const list = [
      {
        name: 'Loading',
        value: 0
      },
      {
        name: '动画相关',
        value: 1
      },
      {
        name: '路径回放',
        value: 2
      },
      {
        name: '点是否在多边形内',
        value: 3
      },
      {
        name: '动态绘制多边形',
        value: 4
      },
    ]
    return {
      list
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-container {
  height: 100%;

  .tab-body {
    height: calc(100vh - 110px);
  }
}
</style>