<template>
  <div id="app">
    <NavBar/>
    <img alt="Vue logo" src="./assets/serengeticargo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <MainHome karibu="Karibu Serengeti Cargo"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainHome from './components/pages/MainHome.vue'
import NavBar from './components/layout/Navbar'

export default {
  name: 'App',
  components: {
    MainHome,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
