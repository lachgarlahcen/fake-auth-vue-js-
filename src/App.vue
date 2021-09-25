<template>
  <div id="app">
    <navbar v-if="showNavbar" class="mb-5"/>
    <router-view/>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    navbar
  },
  computed:{
    showNavbar(){
      return !(['login', 'register'].includes(this.$route.name))
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(225,225, 225, .08);
  height: 100vh;
}
</style>
