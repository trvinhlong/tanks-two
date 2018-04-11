import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import lightbox from 'vlightbox'
import VueAnalytics from 'vue-analytics'
import Config from './Config'

const routes = [
    { path: '/', component: App }
]

const router = new VueRouter({
    routes // short for `routes: routes`
})
Vue.use(VueAnalytics, {
    id: Config.gaTrackingId,
    router,
    autoTracking: {
        page: true
    }
})
Vue.use(lightbox)

Vue.config.productionTip = false

new Vue({
    router,
  render: h => h(App)
}).$mount('#app')
