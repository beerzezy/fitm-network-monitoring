import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import VCharts from 'v-charts'
import 'v-charts/lib/style.css'

import moment from 'moment'

import router from './router'
import store from './store'
import './midleware'

import vuetify from './plugins/vuetify'

import '@/assets/css/font.css'
import '@/assets/css/main.css'

import App from './App.vue'

import VueSimpleAlert from "vue-simple-alert"

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(VueSimpleAlert);
Vue.use(VCharts)
Vue.use(moment)

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.prototype.$moment = moment

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
