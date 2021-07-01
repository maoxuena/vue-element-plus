<template>
  <el-submenu :index="item.path">
    <template #title>
      <svg-icon class="icon" :icon-class="item.meta.icon" />
      <span>{{ item.meta.title }}</span>
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