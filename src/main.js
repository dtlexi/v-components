import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import upload from "../src/plugins/upload";
import rightmenu from "../src/plugins/rightmenu";
import table from "../src/plugins/table";
import App from './App.vue'
import VueResource from 'vue-resource'


/*使用VueResource插件*/
Vue.use(VueResource)

Vue.component(upload.name, upload);
Vue.component(rightmenu.name, rightmenu);//右键
Vue.component(table.name, table);//右键

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
})
