<template>
  <div>
    <div class="ui secondary menu inverted">
      <div class="ui search item">
        <div class="ui left icon transparent inverted input">
          <input class="prompt" type="text" placeholder="Find music...">
          <i class="search icon"></i>
        </div>
        <div class="results"></div>
      </div>
      <div class="right menu">
        <div class="item">
          <div class="ui icon">
            <i class="bars icon inverted large" style="opacity: 0.8"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topbar'
}
</script>

<style scoped>
</style>
