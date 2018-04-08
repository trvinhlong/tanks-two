<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>
<style src="./assets/style.css"></style>
<script>
import Main from './components/Main.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Main,
  	Header
  }
}
</script>
