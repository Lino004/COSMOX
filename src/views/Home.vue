<template>
  <div>
    <Canvas></Canvas>
    <Music></Music>
  </div>
</template>

<script>
import Canvas from '@/components/home/Canvas.vue'
import Music from '@/components/home/Music.vue'

export default {
  name: 'home',
  components: {
    Canvas, Music
  }
}
</script>

<style>
</style>
