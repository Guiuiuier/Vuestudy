import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/index.vue'
import find from '../views/find/index.vue'
Vue.use(VueRouter)

// 引入bootstarp
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


const routes = [
  {
    path:'/login/index',
    name:"login",
    component:login,
  },
  {
    path:'/find/index',
    name:'find',
    component:find,
  }
]

const router = new VueRouter({
  routes
})

export default router
