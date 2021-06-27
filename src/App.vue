<template>
  <router-view></router-view>
</template>

<script>
import { provide } from 'vue'
import * as echarts from 'echarts'
export default {
  name: 'App',
  setup () {
    provide('ec', echarts)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
