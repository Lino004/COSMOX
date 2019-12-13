<template>
    <div class="center">
        <div class="right">
            <div class="search"><i class="material-icons">search</i>
                <input placeholder="Find music..."/>
            </div>
            <div class="menu"><i class="material-icons">menu</i></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'topbar'
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.center {
  position: absolute;
  display: flex;
  top: 2%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  width: 100%;
  overflow: hidden;
}
.right {
  position: relative;
  flex: 1 1 auto;
  padding-left: 30px;
  background-color: transparent;
}
.right .search {
  position: relative;
  margin-top: 15px;
  display: flex;
  align-items: center;
  color: grey
}
.right .search input {
  width: 210px;
  border:none;
  outline: none;
  background: none;
  color: white
}
.right .menu {
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  align-items: center;
  color: grey;
}
.material-icons{z-index: 3;}
.material-icons:hover, .material-icons:focus{color: lightgrey; transition:color 0.2s ease;}

</style>
