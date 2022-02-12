<template>
     <div>
          <h1>用户模块</h1>

            <table border="1">
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>age</td>
                    <td>操作</td>
                </tr>
                <tr v-for="user in users" :key='user.id'>
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.age}}</td>
                    <td><a href="">删除</a><a href="">修改</a></td>
                </tr>
            </table>
          <!-- 使用组件-->
           <footer></footer>
     </div>
</template>

<script>
import Footer from './Footer.vue';
//  把模块暴露出去
export default {
   name:'user',
   data(){
       return{
             users:[
                 {id:'1',name:"zhangsan",age:11},
                 {id:'2',name:"zhangsan2",age:11},
                 {id:'3',name:"zhangsan3",age:11},
             ]
       }
   },
   components:{
        Footer, //注册
   },
   created(){
       //axios
   }
}
</script>

<style>

</style>
