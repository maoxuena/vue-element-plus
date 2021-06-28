<template>
  <el-menu-item :index="routeChildren.path">
    <svg-icon :icon-class="routeChildren.meta.icon" />
    <template #title>{{ routeChildren.meta?.title }}</template>
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