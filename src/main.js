import Vue from 'vue'

import VCharts from 'v-charts'
import 'v-charts/lib/style.css'

import moment from 'moment'

import router from './router'
import store from './store'

import vuetify from './plugins/vuetify'

import '@/assets/css/font.css'
import '@/assets/css/main.css'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VCharts)
Vue.use(moment)

Vue.prototype.$moment = moment

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
