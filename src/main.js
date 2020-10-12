import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Home from './components/Home.vue'
const router = new VueRouter({
  routes:[
    {
      path: '/', component: Home,
    }
  ],
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
