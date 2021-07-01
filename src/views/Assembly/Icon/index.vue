<template>
  <div class="icon-container">
    <el-row :gutter="20">
      <el-col
        v-for="(item, index) in fliesName"
        :key="index"
        :lg="2"
        :md="3"
        :sm="8"
        :xl="2"
        :xs="6"
      >
        <el-card shadow="hover">
          <svg-icon :icon-class="item" />
          <div class="copy-icon" @click="handleCopyIcon(item, $event)"></div>
        </el-card>
        <div class="icon-text" @click="handleCopyText(item, $event)">
          {{ item }}
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import clip from '@/utils/clipboard'
export default {
  name: 'Assembly',
  setup () {

    // 读取svg文件
    const files = require.context('@/assets/icons/svgs', false, /\.svg$/).keys()
    // 获取svg文件名称
    const fliesName = files.map(item => item.split('.')[1].substring(1))

    // 复制图标
    const handleCopyIcon = (item, event) => {
      clip(`<svg-icon icon-class="${item}"></svg-icon>`, event)
    }

    // 复制图标名称
    const handleCopyText = (item, event) => {
      clip(item, event)
    }

    return {
      fliesName,
      handleCopyIcon,
      handleCopyText
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-container{
  font-size: 24px;
  text-align: center;

  .copy-icon{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 4px;
    cursor: pointer;
  }

  .icon-text{
    font-size: 12px;
    line-height: 20px;
    padding-bottom: 10px;
    cursor: pointer;
  }
}
</style>