<template>
   <div> 
     <h1>主页内容</h1>
     <div style="width:100%;heigt:100px; background-color:yellow">数据内容</div>     
     <!-- 使用组件 -->
     
     <Footer></Footer>
   </div>
</template>

<script>
import Footer from './Footer'; //引入组件
export default {
  name: 'HelloWorld',
  data () {
    return {}
  },
  methods: {
    
  },
  components:{
    Footer,
    //注册组件
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
