import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'




import vueXlsxTable from 'vue-xlsx-table'


Vue.use(vueXlsxTable, {rABS: false})


Vue.use(BootstrapVue)

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')
