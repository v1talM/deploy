import Vue from 'vue'
import App from './App'
import Router from './router'
import Store from './store'

Vue.config.productionTip = false

Vue.use(VueAxios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  Router,
  Store,
  components: { App },
  template: '<App/>'
})
