<template>
  <div class="home-page">
    
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Home',
  setup(){
    let tabList = reactive([])
    return{
      tabList
    }
  }
}
</script>

<style lang="scss" scoped>
</style>