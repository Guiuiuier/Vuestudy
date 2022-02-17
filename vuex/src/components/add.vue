<template>
    <div>
        <h3>当前最新的count值为:{{this.$store.state.count}}</h3>
        <h4>{{this.$store.getters.showNum}}</h4>
        <h5>{{showNum}}</h5>
        <button @click='btn1'>+3</button>
        <button @click='btn4'>异步操作加法</button>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    data(){
        return{};
    },
    computed:{
        ...mapGetters(['showNum'])
    },
    methods:{
        btn1(){
            // this.$store.state.count++  //在vuex中不允许直接修改vue store里的数据 vue开发不合适 不合法
            this.$store.commit('add',3);
        },
        btn4(){
            this.$store.dispatch("addAsync") //这里的dispatch专门用来触发action
        }
    }
};
</script>