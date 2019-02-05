<template>
  <div>
    <canvas @click="test($event, i)" v-for="i in maxStar" :key="i" :id="'my_canvas'+i"></canvas>
    <ShowArtiste></ShowArtiste>
  </div>
</template>

<script>
import ShowArtiste from '@/components/home/ShowArtiste.vue'

export default {
  name: 'canvas',
  components: {
    ShowArtiste
  },
  data () {
    return {
      maxStar: 800,
      color: [
        { primary: 'white', secondary: 217 },
        { primary: 'white', secondary: 360 },
        { primary: 'white', secondary: 317 },
        { primary: 'white', secondary: 182 }
      ]
    }
  },
  computed: {
    windowSize () {
      return {
        x: window.innerWidth,
        y: window.innerHeight
      }
    }
  },
  methods: {
    canvas (i) {
      let canvas = document.getElementById('my_canvas' + i)
      let context = canvas.getContext('2d')

      let wC = canvas.width = canvas.height = this.random(10, 30)
      let half = canvas.width / 2
      let gradient = context.createRadialGradient(
        half,
        half,
        0,
        half,
        half,
        half
      )
      let n = this.random(this.color.length - 1)

      gradient.addColorStop(0.025, this.color[n].primary)
      gradient.addColorStop(
        0.1,
        'hsl(' + this.color[n].secondary + ', 61%, 33%)'
      )
      gradient.addColorStop(
        0.25,
        'hsl(' + this.color[n].secondary + ', 64%, 2%)'
      )
      gradient.addColorStop(1, 'transparent')

      context.fillStyle = gradient
      context.beginPath()
      context.arc(wC / 2, wC / 2, wC / 2, 0, Math.PI * 2)
      context.fill()
      context.closePath()
    },
    random (min, max) {
      if (arguments.length < 2) {
        max = min
        min = 0
      }
      if (min > max) {
        let hold = max
        max = min
        min = hold
      }
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    maxOrbit (x, y) {
      var max = Math.max(x, y)
      var diameter = Math.round(Math.sqrt(max * max + max * max))
      return diameter / 2
    },
    test (i) {
      let mycanva = document.getElementById('my_canvas' + i)
      console.log(mycanva.style.left + ' et ' + mycanva.style.top)
      this.$emit('show')
    },
    posEtoile (i) {
      var w = window.innerWidth
      var h = window.innerHeight
      var xC = w / 2
      var yC = h / 2
      var r = this.random(this.maxOrbit(w, h))
      var angle = this.random(0, this.maxStar)
      var x = 0
      var y = 0
      var dir = 1
      var vitesse = this.random(r) / 500000
      var opct = this.random(2, 10) / 10
      var j = 1
      var v = this.random(1, 2500) / 50000

      let canvas = document.getElementById('my_canvas' + i)

      canvas.style.position = 'absolute'

      function bouge () {
        angle = angle + vitesse
        x = xC - 50 + r * Math.cos(angle)
        y = yC - 50 + r * Math.sin(angle)

        if (y + 50 > window.innerHeight) {
          y *= -dir
        }

        if (j === 1) {
          opct += v
          if (opct > 1) {
            j = -1
          }
        }
        if (j === -1) {
          opct -= v
          if (opct < 0) {
            j = 1
          }
        }
        canvas.style.left = x + 'px'
        canvas.style.top = y + 'px'
        canvas.style.opacity = opct

        requestAnimationFrame(bouge)
      }
      requestAnimationFrame(bouge)
    }
  },
  mounted () {
    for (let i = 1; i <= this.maxStar; i++) {
      this.canvas(i)
      this.posEtoile(i)
    }
  }
}
</script>

<style scoped>
</style>
