import Vue from 'vue'
import { Upload,Button,Popover,Message} from 'element-ui';
import upload from "../src/plugins/upload";
import rightmenu from "../src/plugins/rightmenu";
import App from './App.vue'


Vue.component(upload.name, upload);
Vue.component(rightmenu.name, rightmenu);//右键
Vue.component(Upload.name, Upload);
Vue.component(Button.name, Button);
Vue.component(Popover.name, Popover);
Vue.prototype.$message = Message;

new Vue({
  el: '#app',
  render: h => h(App)
})
