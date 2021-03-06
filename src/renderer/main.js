import Vue from 'vue'
import axios from 'axios'
import VueSocketio from 'vue-socket.io'

import 'purecss/build/pure-min.css'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueSocketio, 'http://localhost:3030')

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
