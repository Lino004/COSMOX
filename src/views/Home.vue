<template>
  <div id="home">
    <Canvas></Canvas>
    <TopBar></TopBar>
    <BottomBar></BottomBar>
  </div>
</template>

<script>
import Canvas from '@/components/home/Canvas.vue'
import TopBar from '@/components/home/TopBar.vue'
import BottomBar from '@/components/home/BottomBar.vue'

export default {
  name: 'home',
  components: {
    Canvas, TopBar, BottomBar
  }
}
</script>

<style scoped>
</style>
