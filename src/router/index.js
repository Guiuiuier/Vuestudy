import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import users from '../components/users.vue'  //引入出去模块
import student from '../components/student.vue'
import Footer from '../components/Footer.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path:'/HelloWord',redirect:'/HelloWord'},  //重定向
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/users',component:users
    }
    ,{
      path:'/student',component:student
    },
    {
      path:'/Footer',component:Footer
    }
  ]
})
