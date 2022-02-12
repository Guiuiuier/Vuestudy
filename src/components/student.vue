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
                <tr v-for="student in students" :key='student.id'>
                    <td>{{student.id}}</td>
                    <td>{{student.name}}</td>
                    <td>{{student.age}}</td>
                    <td><a href="">删除</a><a href="">修改</a></td>
                </tr>
            </table>
          <!-- 使用组件-->
           <footer></footer>
     </div>
</template>

<script>
//  把模块暴露出去
 import Footer from "./Footer";
export default {
   name:'student',
   data(){
       return{
            students:[
                 {id:'1',name:"zhangsan",age:11},
                 {id:'2',name:"zhangsan2",age:11},
                 {id:'3',name:"zhangsan3",age:11},
             ]
       }
   },

   components:{
       Footer,
       },//组件注册
}
</script>

<style>

</style>
