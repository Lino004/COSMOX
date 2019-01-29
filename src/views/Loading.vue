<template>
  <div id="loading">
    <div id="horizon">
      <div class="glow"></div>
    </div>
    <div id="earth"></div>

    <div id="title">
      <h2 data-text="COSMOX">COSMOX</h2>
    </div>

    <div id="subtitle" @click.prevent="go()">
      <span>CLICK </span>
      <span>HERE </span>
      <span>... </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'loading',
  components: {},
  methods: {
    go () {
      this.$router.push('/home')
    }
  }
}
</script>

<style>
#loading {
  font-family: "lato", sans-serif;
}
#horizon {
  position: absolute;
  width: 160%;
  height: 70%;
  border-radius: 100%/100%;
  background: #038bff;
  filter: blur(30px);
  -webkit-filter: blur(30px);
  left: 50%;
  bottom: -20%;
  margin-left: -80%;
}
#horizon:before {
  content: " ";
  position: absolute;
  width: 81.25%;
  height: 70%;
  border-radius: 100%/100%;
  background: #51afff;
  filter: blur(30px);
  -webkit-filter: blur(30px);
  opacity: 0.6;
  margin-left: 9.375%;
}
#horizon:after {
  content: " ";
  position: absolute;
  width: 32%;
  height: 20%;
  border-radius: 650px/350px;
  background: #b0daff;
  filter: blur(30px);
  -webkit-filter: blur(30px);
  opacity: 0.5;
  margin-left: 34%;
}
#horizon .glow {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%/100%;
  background: #215496;
  filter: blur(200px);
  -webkit-filter: blur(200px);
  opacity: 0.7;
  top: -10%;
}

#earth {
  position: absolute;
  width: 200%;
  height: 100%;
  background: black;
  border-radius: 100%/100%;
  left: 50%;
  bottom: -50%;
  margin-left: -100%;
}
#earth:before {
  content: " ";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%/100%;
  box-shadow: inset 0px 0px 62px 20px rgba(60, 105, 138, 0.85);
}
#earth:after {
  *zoom: 1;
  filter: progid:DXImageTransform.Microsoft.gradient(gradientType=1, startColorstr='#FF000000', endColorstr='#FF000000');
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMCIgeTE9IjAuNSIgeDI9IjEuMCIgeTI9IjAuNSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIvPjxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjMDAwMDAwIiBzdG9wLW9wYWNpdHk9IjAuMCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwMDAwMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==");
  background-size: 100%;
  background-image: -webkit-gradient(
    linear,
    0% 50%,
    100% 50%,
    color-stop(0%, #000000),
    color-stop(50%, rgba(0, 0, 0, 0)),
    color-stop(100%, #000000)
  );
  background-image: -moz-linear-gradient(
    left,
    #000000 0%,
    rgba(0, 0, 0, 0) 50%,
    #000000 100%
  );
  background-image: -webkit-linear-gradient(
    left,
    #000000 0%,
    rgba(0, 0, 0, 0) 50%,
    #000000 100%
  );
  background-image: linear-gradient(
    to right,
    #000000 0%,
    rgba(0, 0, 0, 0) 50%,
    #000000 100%
  );
  content: " ";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%/100%;
}

h2 {
  position: relative;
  font-weight: 300;
  top: 36%;
  left: 0;
  right: 0;
  margin-top: 110px;
  font-size: 130px;
  text-align: center;
  letter-spacing: 20px;
  padding-left: 20px;
  color: rgba(0, 0, 0, 0.3);
}
h2:before {
  content: attr(data-text);
  position: absolute;
  overflow: hidden;
  max-width: 7em;
  white-space: nowrap;
  text-transform: uppercase;
  background: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: loading 8s linear;
  animation: loading 8s linear;
}
@-webkit-keyframes loading {
  0% {
    max-width: 0;
  }
}
@keyframes loading {
  0% {
    max-width: 0;
  }
}
#subtitle {
  position: absolute;
  font-weight: 300;
  top: 70%;
  left: 0;
  right: 0;
  font-size: 25px;
  text-align: center;
  letter-spacing: 6px;
}
#subtitle span {
  color: #d8d8d8;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
}
#subtitle span:nth-child(1) {
  animation-name: animDont;
}
#subtitle span:nth-child(2) {
  animation-name: animLet;
}
#subtitle span:nth-child(3) {
  animation-name: animGo;
}

@keyframes animGravity {
  0% {
    transform: translateY(-26px);
    opacity: 0;
  }
  30%,
  80% {
    letter-spacing: 40px;
    padding-left: 40px;
    transform: translateY(0px);
    opacity: 1;
  }
  92%,
  100% {
    letter-spacing: 35px;
    padding-left: 35px;
    transform: translateY(-4px);
    opacity: 0;
  }
}
@keyframes animDont {
  0%,
  15% {
    transform: translateY(-26px);
    opacity: 0;
  }
  35%,
  80% {
    transform: translateY(0px);
    opacity: 1;
  }
  92%,
  100% {
    transform: translateY(-4px);
    opacity: 0;
  }
}
@keyframes animLet {
  0%,
  25% {
    transform: translateY(-26px);
    opacity: 0;
  }
  45%,
  80% {
    transform: translateY(0px);
    opacity: 1;
  }
  92%,
  100% {
    transform: translateY(-4px);
    opacity: 0;
  }
}
@keyframes animGo {
  0%,
  35% {
    transform: translateY(-26px);
    opacity: 0;
  }
  55%,
  80% {
    transform: translateY(0px);
    opacity: 1;
  }
  92%,
  100% {
    transform: translateY(-4px);
    opacity: 0;
  }
}
</style>
