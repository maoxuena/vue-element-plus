<template>
  <div class="icon-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>通用</span>
        </div>
      </template> 
      <div class="icon-box">
        <el-row :gutter="20">
          <el-col
            v-for="(item, index) in fileCommon"
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
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>表单</span>
        </div>
      </template>
      <div class="icon-box">
        <el-row :gutter="20">
          <el-col
            v-for="(item, index) in fileForm"
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
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>第三方平台</span>
        </div>
      </template>
      <div class="icon-box">
        <el-row :gutter="20">
          <el-col
            v-for="(item, index) in filePlatform"
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
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>文件</span>
        </div>
      </template>
      <div class="icon-box">
        <el-row :gutter="20">
          <el-col
            v-for="(item, index) in fileFiles"
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
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>style</span>
        </div>
      </template>
      <div class="icon-box">
        <el-row :gutter="20">
          <el-col
            v-for="(item, index) in fileStyle"
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
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>图表</span>
        </div>
      </template>
      <div class="icon-box">
        <el-row :gutter="20">
          <el-col
            v-for="(item, index) in fileChart"
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
    </el-card>
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

    // svg分类
    let fileCommon = [] // 通用
    let fileChart = [] // 图表
    let fileFiles = [] // 文件
    let fileForm = [] // 表单
    let filePlatform = [] // 第三方平台   
    let fileStyle = [] // style    
    fliesName.forEach(item=>{
      if(item.startsWith('chart')){
        fileChart.push(item)
      }else if(item.startsWith('files')){
        fileFiles.push(item)
      }else if(item.startsWith('form')){
        fileForm.push(item)
      }else if(item.startsWith('platform')){
        filePlatform.push(item)
      }else if(item.startsWith('style')){
        fileStyle.push(item)
      }else{
        fileCommon.push(item)
      }
    })

    // 复制图标
    const handleCopyIcon = (item, event) => {
      clip(`<svg-icon icon-class="${item}"></svg-icon>`, event)
    }

    // 复制图标名称
    const handleCopyText = (item, event) => {
      clip(item, event)
    }

    return {
      fileChart,
      fileFiles,
      fileForm,
      filePlatform,
      fileStyle,
      fileCommon,
      handleCopyIcon,
      handleCopyText
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-container{
  .box-card{
    margin-bottom: 10px;

    &:last-child{
      margin-bottom: 0;
    }
  }

  .icon-box{
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
}
</style>