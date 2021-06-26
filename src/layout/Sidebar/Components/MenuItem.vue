<template>
  <el-menu-item :index="routeChildren.path">
    <i :class="routeChildren.meta.icon"></i>
    <template #title>{{routeChildren.meta?.title}}</template>
  </el-menu-item>
</template>

<script>
export default {
  name: 'MenuItem',
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