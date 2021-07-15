<template>
  <div class="css-container">
    <el-tabs tab-position="left"
             style="height: 100%;">
      <el-tab-pane v-for="item in list"
                   :key="item.value"
                   :label="item.name">
        <div class="tab-body scrollbar">
          <smile-cat v-if="item.value === 0" />
          <little-crab v-if="item.value === 1" />
          <bicycle v-if="item.value === 2" />
          <dog v-if="item.value === 3" />
          <tai-ji v-if="item.value === 4" />
          <hover-effect v-if="item.value === 5" />
          <css-button v-if="item.value === 6" />
          <droplet v-if="item.value === 7" />
          <leader-board v-if="item.value === 8" />
          <photo-wall v-if="item.value === 9" />
          <slide v-if="item.value === 10" />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import SmileCat from './components/SmileCat.vue'
import LittleCrab from './components/LittleCrab.vue'
import Bicycle from './components/Bicycle.vue'
import Dog from './components/Dog.vue'
import TaiJi from './components/TaiJi.vue'
import HoverEffect from './components/HoverEffect.vue'
import CssButton from './components/CssButton.vue'
import Droplet from './components/Droplet.vue'
import LeaderBoard from './components/LeaderBoard.vue'
import PhotoWall from './components/PhotoWall.vue'
import Slide from './components/Slide.vue'
export default {
  name: 'CSS',
  components: {
    SmileCat,
    LittleCrab,
    Bicycle,
    Dog,
    TaiJi,
    HoverEffect,
    CssButton,
    Droplet,
    LeaderBoard,
    PhotoWall,
    Slide
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
      },
      {
        name: '自行车',
        value: 2
      },
      {
        name: '狗',
        value: 3
      },
      {
        name: '太极',
        value: 4
      },
      {
        name: '鼠标悬停特效',
        value: 5
      },
      {
        name: '按钮',
        value: 6
      },
      {
        name: '水滴',
        value: 7
      },
      {
        name: '比赛排行榜',
        value: 8
      },
      {
        name: '照片墙',
        value: 9
      },
      {
        name: '图片滑动',
        value: 10
      },
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