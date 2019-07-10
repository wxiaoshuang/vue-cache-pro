<template>
  <div id="app">
    <keep-alive :exclude="excludeComponents">
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    excludeComponents () {
      return this.$store.state.excludeComponents
    }
  }
}
</script>

<style scoped>
#app {
  width: 800px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
}
ul {
  width: 800px;
  display: flex;
  justify-content: space-evenly;
}
  ul li{
    list-style: none;
  }
</style>
