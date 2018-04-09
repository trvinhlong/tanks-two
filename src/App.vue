<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>
<style src="./assets/style.css"></style>
<script>
import Main from './components/Main.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Main,
  	Header,
    Footer
  }
}
</script>
