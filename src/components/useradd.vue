<template>
    <div>
  <h2>添加用户信息</h2>
    <form action="">
          用户名:<input type="text" v-model="user.name"><br>
          年龄 : <input type="text" v-model="user.age"><br>
          生日: <input type="text" v-model="user.bir"><br>
          <input type="button" value="添加用户信息" @click='saveUserInfo'>
        
        </form>      
    </div>
</template>

<script>
export default {
     name:'useradd',
     data(){
         return{
             user:{},
         }
     },
     methods: {
          saveUserInfo(){
              console.log(this.user);
            //   发送axios请求
             this.$http.post("http://rap2api.taobao.org/app/mock/298235/user/useradd?name=xiao&age=23&bir=2013-1-2",this.user).then((res)=>{
                 console.log(res);
                 if(res.data.sucess){
                      //切换路由  添加后切换路由
                      this.$router.push("/users")
                 }
             });
          }
     },
}
</script>
<style scoped>
    
</style>
