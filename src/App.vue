<template>
  <div id="app">
    <Header />
    <HelloWorld msg="Welcome to Your Vue.js App 123"/>
  </div>
</template>
<style src="./assets/style.css"></style>
<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
  	Header
  }
}
</script>
