<template>
  <div id="dashboard">
    <Canvas></Canvas>
    <div class="ui bottom attached content pushable" style="background-color: transparent;">
      <div class="ui visible inverted left vertical sidebar menu">
        <a class="item" :class="{'active': activeMenu == 0}" @click.prevent="activeMenu = 0"><i class="plus icon"></i>Gestion des Artistes</a>
        <a class="item" :class="{'active': activeMenu == 1}" @click.prevent="activeMenu = 1"><i class="file audio icon"></i>Gestion des Albums</a>
      </div>
      <div class="pusher">
        <div class="ui basic segment">
          <div class="ui grid">
            <transition name="custom-classes-transition" enter-active-class="animated fadeIn" appear>
              <AddArtiste v-if="activeMenu == 0"></AddArtiste>
              <AddAlbum v-if="activeMenu == 1"></AddAlbum>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Canvas from '@/components/home/Canvas.vue'
import AddArtiste from '@/components/dashboard/AddArtiste.vue'
import AddAlbum from '@/components/dashboard/AddAlbum.vue'

export default {
  name: 'dashboard',
  components: {
    Canvas, AddArtiste, AddAlbum
  },
  data () {
    return {
      activeMenu: 0
    }
  },
  methods: {
    go () {
      this.activeMenu = !this.activeMenu
    }
  },
  mounted () {}
}
</script>

<style scoped>
#dashboard{
  position: absolute;
  height: 100%;
  width: 100%
}
</style>
