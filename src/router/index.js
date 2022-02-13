import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import users from '../components/users.vue'  //引入模块
import student from '../components/student.vue'
import Footer from '../components/Footer.vue'
import  useradd from '../components/useradd.vue'
import useredit from '../components/useredit.vue'

Vue.use(Router)
export default new Router({
  routes: [
    { path:'/',redirect:'/HelloWorld'},  //重定向
    {
      path: '/HelloWorld',
      name: 'HelloWorld', //路由名字可写可不写
      component: HelloWorld
    },
    {
      path:'/users',component:users,
      children:[
        {path:'useradd',component:useradd},//子路由不需要加斜杠 用户添加路由},
      {path:'useredit',component:useredit}, //用户添加路由
     ],
    }
    ,{
      path:'/student',component:student
    },
    {
      path:'/Footer',component:Footer
    }
    ,
  ]
})
