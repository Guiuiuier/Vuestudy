<template>
    <div>
        <h3>当前最新的count值为:{{count}}</h3>
        <button @click='btn2'>-1</button>
        <button @click='subb()' name="这样写也不用专门去定义一个按钮了">-1</button>
        <button @click='btn3'>-N</button>
        <button @click='btn5'>异步-1</button>
         <button @click='subbAsync' name="函数名直接映射放进去就可以不用专门写一个按钮了">异步-1</button>   
         <button @click="subbNAsync(3)" name="异步调用">异步调用-3</button>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return{};
    },
    computed:{
        ...mapState(['count']),  //三个点是展开运算符 全局里面的数据映射为当前组件的计算属性
         //mapgetters 和 mapstate是在coumputed中的实时更新
    },
    methods: {
        ...mapActions(['subbAsync','subbNAsync']), //映射异步
        ...mapMutations(['subb','subbN']), //映射完毕  mapmutations 固定
        btn2(){
           this.subb()
        },
        btn3(){
            this.subbN(3)
        },
        btn5(){
         this.subbAsync();
        }
    },
};
</script>