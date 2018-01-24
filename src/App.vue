<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 38px 20px 40px;
  min-height: 100vh;
  background: rgba(45, 37, 80, 0.98);
}

a {
  color: #42b983;
}
</style>
