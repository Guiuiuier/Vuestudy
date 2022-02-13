<template>
    <div>
        <h2>编辑用户信息</h2>
         <form action="">
             name: <input type="text" v-model="user.name" ><br>
             age:  <input type="text"  v-model="user.age"><br>
             bir: <input type="text" v-model="user.bir"><br>
             <input type="button" value="添加" @click="edituser">
         </form>
    </div>
</template>
<script>
export default {
    name:'edit',
    data(){
  return {
      user:{
          id:"",
      }
  };
    },
    methods: {
         findOne(){
             this.$http.get("http://rap2api.taobao.org/app/mock/298235/users/findOne?id="+this.user.id).then((res)=>{
                 console.log(res.data);
                  this.user=res.data;
             })
         },
         edituser(){
             this.$http.post("http://rap2api.taobao.org/app/mock/298235/users/update",this.user).then((res)=>{
                  console.log(res);
                  if(res.data.sucess){
                      this.$router.push("/users");
                  }
             })
         }
    },
    created() {
        //  console.log(this.$route.query.id);  //query 前端中a？是query语法
       this.user.id=this.$route.query.id;
      this.findOne();
    },
}
</script>
<style  scoped>

</style>