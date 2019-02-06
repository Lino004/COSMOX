<template>
    <body>
<div id="logo">
  <link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet' type='text/css'>
<h1>
  <em>C</em>
  <em class="planet left">O</em>
  <em>S</em>
  <em>M</em>
  <em class="planet right">O</em>
  <em>X</em>
</h1>
  </div>
  

</body>

</template>

<script>
export default {
    name: 'logo'
}
</script>

<style>


h1 {
  margin: 0;
  height: 12px;
  width: 120px;
  display: flex;
  justify-content: center;
  position: relative;
}

h1::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  top: -26px;
  left: 29px;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: 1.3px solid white;
  box-sizing: border-box;
}

em {
  font-family: 'Josefin Sans', sans-serif;
  color: white;
  font-size: 15px;
  position: relative;
  font-style: normal;
  width: 20px;
  text-align: center;
}

em.planet {
  -webkit-animation: planet-rotate 8s linear infinite;
  animation: planet-rotate 8s linear infinite;
  position: relative;
}

em.planet::before {
  content: "";
  position: absolute;
  top: -.5px;
  left: 3.5px;
  z-index: -1;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: white;
}

em.planet.left {
  -webkit-transform-origin: 40px 5px;
  transform-origin: 40px 5px;
}

em.planet.right {
  -webkit-transform-origin: -20px 5px;
  transform-origin: -20px 5px;
}

@-webkit-keyframes planet-rotate {
  to {
    -webkit-transform: rotate(1turn);
  }
}

@keyframes planet-rotate {
  to {
    -webkit-transform: rotate(1turn);
            transform: rotate(1turn);
  }
}
</style>
