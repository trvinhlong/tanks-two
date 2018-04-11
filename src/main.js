import Vue from 'vue'
import App from './App.vue'
import lightbox from 'vlightbox'
import VueAnalytics from 'vue-analytics'
import Config from './Config'

Vue.use(VueAnalytics, {
    id: Config.gaTrackingId,
    autoTracking: {
        screenview: true
    }
})
Vue.use(lightbox)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
