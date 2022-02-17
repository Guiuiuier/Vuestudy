import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0 //全局共享的count=0
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  mutations:{
    add(state,step){ //形参永远都是state
     state.count+=step;
    },
    addN(state){
      state.count++;
    },
    subb(state){
      state.count--;
    },
    subbN(state,step){
      state.count-=step;
    },
  },
  //  只有mutation中的操作才可以有修改数据的权力
  actions:{
     //actions中不能直接修改state中的数据 必须通过context.commit()触发某个muations
    addAsync(context){
      setTimeout(()=>{
        context.commit('addN');
      },1000)
    },
    subbAsync(context){
      setTimeout(()=>{
        context.commit("subb");
      },1000)
    },
    subbNAsync(context,step){
      setTimeout(()=>{
        context.commit("subbN",step)
      },1000)
    }
  },
  getters:{
    showNum(state){
      return "当前最新的数量["+state.count+"]";
    }
  }
})
