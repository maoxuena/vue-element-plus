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
          <bicycle v-if="item.value === 2" />
          <dog v-if="item.value === 3" />
          <tai-ji v-if="item.value === 4" />
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
export default {
  name: 'CSS',
  components: {
    SmileCat,
    LittleCrab,
    Bicycle,
    Dog,
    TaiJi
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