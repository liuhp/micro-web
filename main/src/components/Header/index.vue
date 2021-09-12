<!--
 * @Author: your name
 * @Date: 2021-09-12 18:29:09
 * @LastEditTime: 2021-09-12 18:41:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /micro-web/main/src/components/Header/index.vue
-->
<template>
<div>
  <!-- 导航 -->
  <MainNav />
</div>
</template>

<script>
import MainNav from './main-nav'
export default {
  name: 'header',
  components: {
    MainNav
  },
};
</script>
