/*
 * @Author: your name
 * @Date: 2021-09-09 22:27:37
 * @LastEditTime: 2021-09-12 18:46:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /micro-web/main/src/main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
