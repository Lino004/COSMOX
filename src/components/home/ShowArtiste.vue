<template>
  <div id="showArtiste">
      <h4>Nom Artiste</h4>
      <canvas id="my_canva" :width="w" :height="h"></canvas>
  </div>
</template>

<script>
export default {
  name: 'showArtiste',
  data () {
    return {
      w: 120,
      h: 30
    }
  },
  props: ['pX', 'pY'],
  methods: {
    draw () {
      let canva = document.getElementById('my_canva')
      if (canva.getContext) {
        let ctx = canva.getContext('2d')

        ctx.fillStyle = 'rgba(144, 151, 159, 0.67)'
        ctx.beginPath()
        ctx.moveTo(this.w * 1 / 10, this.h * 7 / 10)
        ctx.lineTo(this.w * 95 / 300, this.h * 3 / 10)
        ctx.lineTo(this.w, this.h * 3 / 10)
        ctx.lineTo(this.w, this.h * 2 / 10)
        ctx.lineTo(this.w * 3 / 10, this.h * 2 / 10)
        ctx.lineTo(this.w * 1 / 30, this.h * 7 / 10)
        ctx.fill()

        ctx.fillStyle = 'rgba(144, 151, 159, 0.67)'
        ctx.beginPath()
        ctx.arc(this.w / 10, this.h * 7 / 10, 8, 0, Math.PI * 2, true)
        ctx.fill()

        ctx.fillStyle = 'rgba(144, 151, 159, 1)'
        ctx.beginPath()
        ctx.arc(this.w / 10, this.h * 7 / 10, 5, 0, Math.PI * 2, true)
        ctx.fill()
      } else {
        alert("Canvas n'est pas pris en charge")
      }
    },
    position () {
      let showArtiste = document.getElementById('showArtiste')
      showArtiste.style.left = this.pX
      showArtiste.style.top = this.pY
    }
  },
  mounted () {
    this.draw()
    this.position()
  }
}
</script>

<style scoped>
#showArtiste {
    position: absolute;
    color: aliceblue
}
canvas{
    margin: 0;
    padding-top: 10%;
}
h4{
    position: absolute;
    left: 30%;
    margin: 0;
    padding: 0;
    text-align: right;
}
</style>
