
 package.json中  浏览器自动打开
{
  "name": "demoproject",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve  --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },


在main.js中引入
  import less from 'less' //引入less
  Vue.use(less); //引入less
  import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
  
// app.vue中写入
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

//在 index.js中写入
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)