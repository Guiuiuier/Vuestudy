<template>
  <div id="app" class="aa">
 {{cont}}
     <a href='#/users'>用户模块</a>
     <a href="#/HelloWorld">主页</a>
     <a href='#/student'>学生模块</a>
     <a href='#/Footer'>页脚模块</a>
  <!-- 用来展示路由组件 -->
    <router-view/>
  </div>
</template>

<script>
     export default{
        // es6暴露当前组件对象
         name:'app',  //一般这里的组件叫什么这里就叫什么
         data(){
           return {
              cont:"xiaofeng"
           }
         }
     }
</script>

<style>
  .aa{
    background-color: gray;
    width: 100%;
    height: 500px;
  }
</style>
