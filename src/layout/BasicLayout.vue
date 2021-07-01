<template>
  <el-container class="page">
    <el-aside class="page-aside" :width="isCollapse ? '60px' : '256px'">
      <layout-sidebar
        :isCollapse="isCollapse"
        :routes="routes"
      ></layout-sidebar>
    </el-aside>
    <el-container class="page-main">
      <el-header class="page-main-header">
        <layout-header
          :avatar="avatar"
          :username="username"
          @changeMenuState="changeMenuState"
        ></layout-header>
      </el-header>
      <el-main class="page-main-body scrollbar">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { ref, toRef } from 'vue'
import { useStore } from 'vuex'
import LayoutSidebar from './Sidebar'
import LayoutHeader from './Header'
export default {
  name: 'BasicLayout',
  components: {
    LayoutSidebar,
    LayoutHeader
  },
  setup () {
    const store = useStore()
    const collapse = toRef(store.getters, 'settings/collapse')
    const device = toRef(store.getters, 'settings/device')
    const routes = toRef(store.getters, 'routes/routes')
    const avatar = toRef(store.getters, 'user/avatar')
    const username = toRef(store.getters, 'user/username')
    console.log(collapse.value, device.value, routes.value)

    const isCollapse = ref(false)
    const changeMenuState = (param) => {
      isCollapse.value = param
    }

    return {
      isCollapse,
      changeMenuState,
      routes,
      avatar,
      username
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  height: 100%;

  .page-aside {
    background-color: #001529;
    transition: width 0.5s;
    height: 100%;
    overflow: hidden;
  }

  .page-main {
    .page-main-header {
      background-color: #fff;
      height: 64px !important;
      border-bottom: 1px solid #eaeaea;
    }
  }
}
</style>