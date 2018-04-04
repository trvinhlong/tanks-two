import Vue from 'vue'
import App from './App.vue'
import lightbox from 'vlightbox'
Vue.use(lightbox)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
