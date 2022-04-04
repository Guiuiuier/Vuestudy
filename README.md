   build  webpack打包使用的依赖
   config  用来做整个项目配置目录
   node_modules 用来管理项目中的依赖

   -src 用来书写vue的源代码#
   component   组件#
   assets 用来存放静态资源#
   router  配置项目中的路由#
   app.vue  项目的根组件#
   main.js  项目中主入口#1

   static 其他静态
   babelrc 将es6转换为es5
   editorconfig 项目编辑配置
   gittignore git版本控制忽略文件
   postcssrc.js 源码相关js
   package.json 类似于pom.xml 依赖管理 jquery不建议手动修改
   package-lock.json  对package.json上锁
   
   很小很小一个小单页
  //更新


   build  webpack打包使用的依赖
   config  用来做整个项目配置目录
   node_modules 用来管理项目中的依赖

   -src 用来书写vue的源代码#
   component   组件#
   assets 用来存放静态资源#
   router  配置项目中的路由#
   app.vue  项目的根组件#
   main.js  项目中主入口#

   static 其他静态
   babelrc 将es6转换为es5
   editorconfig 项目编辑配置
   gittignore git版本控制忽略文件
   postcssrc.js 源码相关js
   package.json 类似于pom.xml 依赖管理 jquery不建议手动修改
   package-lock.json  对package.json枷锁
   
   在脚手架中使用axios  安装axios  npminstall axios --save-dev 
     import axios from axios
   改写axios vue原型属性
    vue.prototype.$http=axios;
    在需要发送异步请求的位置 this.$http.get("url).then((res=>{})) this.$http.post("url).then((res)=>{})

    vue 2.96有个bug 要先卸载再重新安装才能安装到最新版本
     vue ui是管理面板相当于可视化创建  vue ui 命令就可以了 或者使用node创建

     Vuex内容
父向子传值 v-bind 属性绑定
子向父传值 v-on时事件绑定
兄弟组件之间共享数据 EventBus
$on 接收数据的组件
$emit 发送数据的组件
Vuex 是实现组件全局状态数据管理的一种机制 可以方便实现组件之间的数据共享。

好处
能够在vuex中集中管理共享的数据 易于开发和后期维护
能够高效的实现组件之间的数据共享 提高开发效率
存储在vuex中的数据都是响应式的 能够实时保护数据域页面的同步。

//导入vuex的依赖包 
npm install vuex --save

//导入Vuex包
import Vuex from “vuex'
Vue.use(Vuex);
创建store对象
 const store=new Vuex.Store({
     //state中存放的就是全局共享的数据
     state:{count:0}
 })
 //将store对象挂载到vue实例中
new Vue({
    el:'#app',
    render:h=>h(app),
    router
    //将创建的共享数据对象，挂载到vue实例中
    所有的组件就可以直接从store中获取全局的数据了
    store
})

//访问state数据的第一种方式
this.$store.state.全局数据名称
//组件访问第二种方式
  通过导入的mapstate函数将当前组件需要的全局数据 映射为当前组件的computed计算属性
import {mapState} from 'vuex'
 computed:{
   ...mapState(['count'])
 }
   methods：{
      ...mapMutation(['add'，'addN']) //固定写法
   }
mutation 不要再里面写setimeout这种异步操作， 
必须通过action 但是在action中还是要通过触发mutation的方式变更数据 
mutations:{
  add(state){
    state.count++
  }
}
actions:{context}{
  setimeout(()=>{
    context.commit("add")
  },1000)
}
//触发action第一种方式
 this.$store.dispatch("addAsync")

触发actions的第二种方式
从 vuex中按需导入mapActions 函数
import {mapActions} from ’vuex‘
 //将指定的actions函数 映射为当前组件的methods函数
 methods:{
   ...mapActions(['addAsync','addNasync'])
 }

 Mutation 修改组件中的数据 只能通过mutation变更store数据 不可以直接操纵store的数据 可以监控所有数据的变化
触发mutaion的第一种方式  this.$store.commit('add');
可以触发参数  add(state,step){state.count+=step}  this.$store.commit('add',3)
  


  Getter用于对store中的数据进行加工处理形成新的数据
  1，getter可以对store中已有的数据加工处理之后形成新的数据，类似vue的计算属性
  2 store中数据发生变化，getter的数据也会跟着变化 在computed中
   定义getter
    const store =new Vuex.store({
      state:{
        count:0
      },
    }),
    getters:{
      showNum:state=>{
        return '当前最新的数量是'['+state.count+']'
      }
    }
    第一种方式 this.$stote.getters.名称
    第二种方式 通过映射 mapGetters 
     computed:{
       ...mapGetters('showNum');
     }
git提交
 git status 
 git add .
 git status
 git commit -m "初始化"
