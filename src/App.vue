<template>
  <div id="app">
    <ygg/>
    <home/>
  </div>
</template>

<script>

import Ygg from "./page/home/ygg";
import Home from "./page/home/home";
export default {
  name: 'app',
  components: {
      Home,
      Ygg

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


}

html,body,#app{
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
</style>
