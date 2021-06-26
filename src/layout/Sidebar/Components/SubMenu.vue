<template>
  <el-submenu :index="item.path">
    <template #title>
      <i :class="item.meta.icon"></i>
      <span>{{item.meta.title}}</span>
    </template>
    <slot></slot>
  </el-submenu>
</template>

<script>
export default {
  name: 'SunMenu',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    routeChildren: {
      type: Object,
      default: () => ({}),
    },
  }
}
</script>

<style lang="scss" scoped>
</style>