/*
 * @Author: your name
 * @Date: 2021-09-09 22:27:37
 * @LastEditTime: 2021-09-12 18:33:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /micro-web/main/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/Header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'portal',
      component: header
    }
  ]
})
