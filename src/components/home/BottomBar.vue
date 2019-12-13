<template>
  <div class="center">
        <div class="right">

            <div class="bouton"></div>
            <div class="current-play">
                <div class="controls">
                    <div class="prev"><i class="material-icons">skip_previous</i></div>
                    <div class="play"><i class="material-icons">play_arrow</i></div>
                    <div class="next"><i class="material-icons">skip_next</i></div>
                </div>

                <div class="slidecontainer" >
                    <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
                </div>

                <div class="volume"><i class="material-icons">volume_up</i></div>
                <div class="repeat"><i class="material-icons">repeat</i></div>
                <div class="shuffle"><i class="material-icons">shuffle</i></div>
                <div class="info"><img src="https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg"/></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'bottombar',
  data () {
    return {}
  }
}
</script>

<style scoped>
.right {
  position: relative;
  flex: 1 1 auto;
  padding-left: 30px;
  background-color: transparent;
}
.bouton{
    position: absolute;
    top: 565px;
    left:620px;
    width: 60px;
    height: 5.5px;
    -ms-border-radius: 4.5px;
    -o-border-radius: 4.5px;
    -moz-border-radius: 4.5px;
    -webkit-border-radius: 4.5px;
    border-radius: 4.5px;
    background: rgb(151,150,153);
    z-index: 3;
    cursor: pointer;
}
.right .current-play {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
  height: 70px;
  padding: 10px;
  margin-left: -30px;
  background-color: rgba(255,255,255,.2);

}
.right .current-play .info {
  display: flex;
}
.right .current-play img {
  width: 50px;
  height: 50px;
  border-radius: 5px;
}
.right .current-play .song {
  display: flex;
  flex-direction: column;
  padding: 8px;
}
.right .current-play .song .name {
  font-size: 16px;
  font-weight: bold;
}
.right .current-play .song .artist {
  margin-top: 3px;
}
.right .current-play .controls {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
}
.right .current-play .controls > * {
  margin: 0 10px;
}
.right .current-play .controls .prev,
.right .current-play .controls .next {
  color: grey;
  margin-top: 10px;
}
.right .current-play .controls .play {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: grey;
  background: transparent;
  border-radius: 50%;
  border: 1px solid grey;
  margin-top: 10px;
}
.play :hover{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgb(255,255,255,.2);
  border-radius: 50%;
  border: 1px solid white;
}
.play:active {
  box-shadow: 1px #666;
  transform: translateY(2px);
}
.right .current-play  .repeat,
.right .current-play  .shuffle,.right .current-play .volume{
  color: rgba(242,239,247,.5);
  margin-left: -250px;
  margin-right: -250px;
  margin-top: 10px;
}
.right .current-play .volume {
  display: flex;
  justify-content: flex-end;
  width: 150px;
}
.material-icons{
   cursor: pointer;
   z-index: 3;
}
.material-icons:hover,
.material-icons:focus{ color: lightgrey; transition:color 0.2s ease;}

.slidecontainer {
  width:40%;margin-left:-290px;height:4px
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 4.5px;
  border-radius: 5px;
  background: lightgrey;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgb(151,150,153);
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgb(151,150,153);
  cursor: pointer;
}
</style>
