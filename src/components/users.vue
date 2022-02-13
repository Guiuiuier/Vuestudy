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
                    <td><a href="javascript:;" @click='del(user.id)'>删除</a>
                    <a :href="'#/users/useredit?id='+user.id">修改</a></td>
                </tr>
            </table>
            <a href="#/users/useradd">添加</a>
            <!-- 展示add路由 -->
            <router-view></router-view> 
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
               
             ]
       }
   },
   methods: {
              //axios
      findAll(){ this.$http.get("http://rap2api.taobao.org/app/mock/298235/user/findAll?page=1&rows=4").then((res)=>{
             this.users=res.data.datas;
             
        });
      },
        del(id){
            console.log(id);
            this.$http.get('http://rap2api.taobao.org/app/mock/298235/user/del?id='+id).then((res)=>{
                if(res.data.sucess){
                    alert(res.data.msg+",点击刷新当前数据");
                    this.findAll();
                }
            })
        }
   },
   components:{
        Footer, //注册
   },
   created(){
       this.findAll();
   },
        //watch 用来监听 侦听器  route监听路由
        watch:{
            $route:{
                handler:function(val,oladVal){
                    console.log(val)
                    if(val.path=='/users'){
                          //这个时候就重新调用一次 由于这里的接口是假的 所以不会更新
                        this.findAll();
                    }
                },
                //深度观察监听
                deep:true
            }
        },
}
</script>

<style>

</style>