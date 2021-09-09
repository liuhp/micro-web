/*
 * @Author: your name
 * @Date: 2021-09-09 22:26:26
 * @LastEditTime: 2021-09-09 22:50:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /micro-web/subapp1/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
