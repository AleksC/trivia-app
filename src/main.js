import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import TriviaApp from './components/TriviaApp'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: "/", component: TriviaApp }
]

const router = new VueRouter({ routes })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
