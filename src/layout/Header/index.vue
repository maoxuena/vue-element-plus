<template>
  <div class="header-container flex-box">
    <div class="header-item header-left flex-box">
      <i class="icon"
         :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
         @click="changeMenuState"></i>
    </div>
    <div class="header-item header-right flex-box">
      <div class="header-right-item flex-box">
        <i class="icon el-icon-search"></i>
      </div>
      <div class="header-right-item flex-box">
        <i class="icon el-icon-bell"></i>
      </div>
      <div class="header-right-item flex-box">
        <el-dropdown trigger="click"
                     class="dropdown flex-box">
          <span class="el-dropdown-link">
            <el-avatar :size="20"
                       :src="circleUrl"></el-avatar>
            <span class="text">{{ username }}</span>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item divided
                                @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from "vue-router";
import { recordRoute } from '@/config'
export default {
  name: 'LayoutHeader',
  props: {
    avatar: String,
    username: String
  },
  setup (props, context) {

    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    const circleUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')
    const isCollapse = ref(false)
    const changeMenuState = () => {
      isCollapse.value = !isCollapse.value
      context.emit('changeMenuState', isCollapse.value)
    }

    const logout = async () => {
      await store.dispatch('user/logout')
      if (recordRoute) {
        const fullPath = route.fullPath
        router.push(`/login?redirect=${fullPath}`)
      } else {
        router.push('/login')
      }
    }

    return {
      circleUrl,
      isCollapse,
      changeMenuState,
      logout
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  height: 100%;
  justify-content: space-between;
  align-items: stretch;
  border-bottom: 1px solid #eaeaea;

  .header-item {
    align-items: center;
    line-height: 20px;

    .icon {
      font-size: 20px;
      color: #696969;
      cursor: pointer;
      margin-right: 10px;
    }
  }

  .header-right {
    .header-right-item {
      height: 100%;
      align-items: center;
      padding-left: 10px;
    }
  }
}
</style>

<style lang="scss">
.header-right-item {
  .dropdown {
    cursor: pointer;
    height: 100%;
    align-items: center;

    .el-dropdown-link {
      cursor: pointer;
      display: inline-block;
      line-height: 20px;
      height: 20px;

      .text {
        display: inline-block;
        vertical-align: top;
        padding-left: 5px;
      }
    }
  }
}
</style>