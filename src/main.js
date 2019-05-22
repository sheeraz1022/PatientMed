import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vueXlsxTable from 'vue-xlsx-table'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(vueXlsxTable, {rABS: false})
Vue.use(VueRouter)

Vue.use(BootstrapVue)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes
})


new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
