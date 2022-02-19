import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import less from 'less' //引入less
Vue.use(less); //引入less

// 引入 bootstrap
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../public/login.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
