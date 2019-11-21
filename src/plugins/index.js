let vPlugins = {};

//导出右键菜单组件
import rightmenu from './rightmenu';
//导出上传组件
import upload from './upload';
//table插件
import table from './table'

vPlugins.install=function(Vue, options)
{
    Vue.component(rightmenu.name, rightmenu);//注册右键菜单组件
    Vue.component(upload.name, upload);//注册上传组件
    Vue.component(table.name, table);//注册上传组件
}

// 标签的方式引入
const install = function (Vue, opts = {}) {
    Vue.component(rightmenu.name, rightmenu);
    Vue.component(upload.name, upload);
    Vue.component(table.name, table);
}
/* 支持使用标签的方式引入 Vue是全局变量时，自动install */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default vPlugins;


