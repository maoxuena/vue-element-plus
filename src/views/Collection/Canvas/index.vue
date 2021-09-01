<template>
  <div class="css-container">
    <el-tabs tab-position="left"
             style="height: 100%;">
      <el-tab-pane v-for="item in list"
                   :key="item.value"
                   :label="item.name">
        <div class="tab-body scrollbar">
          <draw-rect v-if="item.value === 1" />
          <word-pad v-if="item.value === 0" />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import WordPad from './components/WordPad.vue'
import DrawRect from './components/DrawRect.vue'
export default {
  name: 'CSS',
  components: {
    WordPad,
    DrawRect
  },
  setup () {
    const list = [    
      {
        name: '绘制矩形',
        value: 1
      },
      {
        name: '写字板',
        value: 0
      }
    ]
    return {
      list
    }
  }
}
</script>

<style lang="scss" scoped>
.css-container {
  height: 100%;

  .tab-body {
    height: calc(100vh - 110px);
    overflow-y: scroll;
  }
}
</style>