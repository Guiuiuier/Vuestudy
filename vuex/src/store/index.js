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
      setTimeout(()=>{
        state.count+=step;

      },3000)
    },
    subb(state){
      state.count--;
    },
    subbN(state,step){
      state.count-=step;
    },
  }
})
