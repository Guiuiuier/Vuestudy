<template>
     <div>
          <h1>用户模块</h1>
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
       return{}
   },
   components:{
        Footer, //注册
   }
}
</script>

<style>

</style>