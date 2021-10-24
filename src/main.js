import Vue from 'vue'
import App from './App.vue'
import VueParallaxJs from 'vue-parallax-js'
import { BootstrapVue } from 'bootstrap-vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueMeta from 'vue-meta'

Vue.use(VueParallaxJs)
Vue.use(BootstrapVue)
Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
