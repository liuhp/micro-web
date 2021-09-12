<!--
 * @Author: your name
 * @Date: 2021-09-12 18:29:09
 * @LastEditTime: 2021-09-12 18:49:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /micro-web/main/src/components/Header/main-nav.vue
-->
<template>
  <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">子应用1</el-menu-item>
  <el-menu-item index="2">子应用2</el-menu-item>
  <el-menu-item index="3">子应用3</el-menu-item>
</el-menu>

</template>