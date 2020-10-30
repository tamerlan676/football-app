import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store'

Vue.use(VueRouter)

Vue.config.productionTip = false


new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')



