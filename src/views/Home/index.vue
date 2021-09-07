<template>
  <div class="home-page">
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
export default {
  name: 'Home',
  setup () {
    let tabList = reactive([])

    onMounted(() => {
    })

    return {
      tabList
    }
  }
}
</script>

<style lang="scss" scoped>
</style>