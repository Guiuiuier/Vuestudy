<template>
    <div>
        <h3>当前最新的count值为:{{this.$store.state.count}}</h3>
        <button @click='btn1'>+3</button>
    </div>
</template>
<script>
export default {
    data(){
        return{};
    },
    methods:{
        btn1(){
            // this.$store.state.count++  //在vuex中不允许直接修改vue store里的数据 vue开发不合适 不合法
            this.$store.commit('add',3);
        }
    }
};
</script>