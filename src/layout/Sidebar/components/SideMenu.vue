<template>
  <component
    :is="menuComponent"
    v-if="!item.hidden"
    :item="item"
    :route-children="routeChildren"
  >
    <template v-if="item.children && item.children.length">
      <side-menu
        v-for="route in item.children"
        :key="route.path"
        :item="route"
      />
    </template>
  </component>
</template>

<script>
import { computed, reactive, ref } from 'vue'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'
export default {
  name: 'SideMenu',
  props: {
    item: Object
  },
  components: {
    MenuItem,
    SubMenu
  },
  setup (props) {
    let routeChildren = reactive({})
    const menuComponent = ref('')

    const handleChildren = (children = []) => {
      if (children === null) return []
      return children.filter((item) => item.hidden !== true)
    }

    const showChildren = handleChildren(props.item.children)

    if (showChildren.length === 0) {
      menuComponent.value = 'MenuItem'
      routeChildren = computed(() => {
        return props.item
      })
    } else if (showChildren.length === 1 && props.item.alwaysShow !== true) {
      menuComponent.value = 'MenuItem'
      routeChildren = showChildren[0]
    } else {
      menuComponent.value = 'SubMenu'
    }

    return {
      menuComponent,
      routeChildren
    }
  }
}
</script>

<style lang="scss" scoped>
</style>