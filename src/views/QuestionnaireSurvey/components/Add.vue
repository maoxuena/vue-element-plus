<template>
  <div class="add-container flex-box">
    <div class="left-board flex-item-1">
      <el-scrollbar class="left-scrollbar">
        <div class="components-list">
          <div class="components-title">
            <svg-icon icon-class="component" />输入型组件
          </div>
          <div class="components-title">
            <svg-icon icon-class="component" />选择型组件
          </div>
          <div class="components-title">
            <svg-icon icon-class="component" /> 布局型组件
          </div>
        </div>
      </el-scrollbar>
    </div>
    <div class="center-board flex-item-3"></div>
    <div class="right-board flex-item-1"></div>
  </div>
</template>

<script>

export default {
  name: 'Add',
  setup () {

    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.add-container{
  height: 100%;
  background-color: #fff;
  padding: 10px;

  .components-list {
    padding: 8px;
    box-sizing: border-box;
    height: 100%;
    
    .components-title{
      font-size: 14px;
      color: #222;
      margin: 6px 2px;
      .svg-icon{
        color: #666;
        font-size: 18px;
        margin-right: 5px;
      }
    }
  }
}
</style>