<template>
  <div id="home">
    <Canvas @show="showBottomBar = true"></Canvas>
    <TopBar></TopBar>
    <BottomBar :showCurrentArtist="showBottomBar"></BottomBar>
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
  },
  data () {
    return {
      showBottomBar: false
    }
  }
}
</script>

<style scoped>
</style>
