<template>
  <div id="app">
    <AppHeader />
    <HelloWorld msg="Welcome to Your Vue.js App 123"/>
  </div>
</template>
<style src="./assets/style.css"></style>
<script>
import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/Header.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
      AppHeader
  }
}
</script>
