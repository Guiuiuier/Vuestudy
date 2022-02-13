// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip=false;
import axios from 'axios'; //引入axios
Vue.prototype.$http=axios; //修改内部的$http为axios $http.get("").post()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, 
  components: { App }, 
  template: '<App/>' 
})
