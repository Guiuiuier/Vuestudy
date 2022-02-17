<template>
<div>

  <add></add>
  <p>--------</p>
  <subb></subb>
<p>--------</p>
  <!-- <router-view>
  </router-view> -->
</div>
</template>

<style>

</style>
<script>
import add from './components/add.vue';
import subb from './components/sub.vue';
export default {
  data()
  {
    return{};
    },
    components:{
      add,
      subb,
    }
};
</script>
