
import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'
import TopHeader from './components/TopHeader/TopHeader.vue'

Vue.component('TopHeader', TopHeader)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
