<template>
  <div class="css-container">
    <el-tabs tab-position="left"
             style="height: 100%;">
      <el-tab-pane v-for="item in list"
                   :key="item.value"
                   :label="item.name">
        <div class="tab-body">
          <smile-cat v-if="item.value === 0" />
          <little-crab v-if="item.value === 1" />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import SmileCat from './components/SmileCat.vue'
import LittleCrab from './components/LittleCrab.vue'
export default {
  name: 'CSS',
  components: {
    SmileCat,
    LittleCrab
  },
  setup () {
    const list = [
      {
        name: '笑脸猫',
        value: 0
      },
      {
        name: '小螃蟹',
        value: 1
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
  }
}
</style>