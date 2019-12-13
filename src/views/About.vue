<template>
  <div>
    <div class="ui centered column">
      <i class="inverted big window minimize outline icon"></i>
    </div>
    <div id="about" class="ui four column grid inverted basic segment">
        <div class="three wide column center aligned">
            <i class="large button step backward icon"></i>
            <i class="huge play circle outline icon"></i>
            <i class="large step forward icon"></i>
        </div>
        <div class="eight wide column center aligned">
          <div class="slidecontainer" >
            <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
          </div>
        </div>
        <div class="three wide column center aligned">four wide column</div>
        <div class="two wide column center aligned">four wide column</div>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },
  methods: {
    go () {
      $('.ui.modal').modal('show')
    }
  }
}
</script>

<style>
#about{
  position: fixed;
  width: 100%;
  bottom: 2%;
  background-color: rgba(255,255,255,.2);
}
.slidecontainer {
  width:40%;
  height:4px
}
</style>
