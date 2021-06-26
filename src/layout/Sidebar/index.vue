<template>
  <div class="aside-container">
    <div class="logo">{{ isCollapse ? '取证' : '网信网络取证系统' }}</div>
    <div class="menu-container scrollbar">
      <el-menu
        :collapse="isCollapse"
        router
        unique-opened
        :default-active="getActiveMenu()"
      >
        <template v-for="route in routes" :key="route.path">
          <side-menu v-if="!route.hidden" :item="route" />
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { toRaw } from 'vue'
import { useRoute } from 'vue-router'
import SideMenu from './components/SideMenu'
export default {
  name: 'LayoutSidebar',
  components: {
    SideMenu
  },
  props: {
    isCollapse: Boolean,
    routes: Array
  },
  setup (props) {
    console.log(props.routes)
    const route = useRoute()

    const getActiveMenu = () => {
      const { meta, path } = toRaw(route)
      if (meta.value?.activeMenu) {
        return meta.value.activeMenu
      }
      return path.value
    }

    return {
      getActiveMenu
    }
  }
}
</script>

<style lang="scss" scoped>
.aside-container {
  height: 100%;

  .logo {
    height: 65px;
    line-height: 65px;
    font-size: 20px;
    text-align: center;
    background-color: #00284d;
    color: #fff;
    white-space: nowrap;
  }
  
  .menu-container{
    overflow-y: scroll;
    width: calc(100% + 5px);
    height: calc(100% - 65px);
  }
}
</style>