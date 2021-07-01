<template>
  <div class="svg-container">
    <el-tabs tab-position="left"
             style="height: 200px;">
      <el-tab-pane v-for="item in list"
                   :key="item.value"
                   :label="item.name">{{item.name}}</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'SVG',
  setup () {
    const list = [
    ]
    return {
      list
    }
  }
}
</script>

<style lang="scss" scoped>
</style>