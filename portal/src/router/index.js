/*
 * @Author: your name
 * @Date: 2021-09-12 19:15:30
 * @LastEditTime: 2021-09-12 20:34:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /micro-web/portal/src/router/index.js
 */
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "app",
    component: () => import('../App.vue'),
  },
  {
    path: "/subapp1",
    name: "subapp1",
    component: () => import('../App.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
