<template>
    <div>
        <h3>当前最新的count值为:{{count}}</h3>
        <button @click='btn2'>-1</button>
        <button @click='btn3'>-N</button>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return{};
    },
    computed:{
        ...mapState(['count']),  //三个点是展开运算符 全局里面的数据映射为当前组件的计算属性
        
    },
    methods: {
        ...mapMutations(['subb','subbN']), //映射完毕  mapmutations 固定
        btn2(){
           this.subb()
        },
        btn3(){
            this.subbN(3)
        },
    },
};
</script>