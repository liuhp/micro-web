<!--
 * @Author: your name
 * @Date: 2021-09-12 19:15:30
 * @LastEditTime: 2021-09-12 20:21:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /micro-web/portal/src/App.vue
-->
<template>
  <Header/>
  <MainNav/>
  <div class="sub-container">
    <Loading v-show="loadingStatus" />
    <div v-show="!loadingStatus" id="sub-body">子应用内容</div>
  </div>
  <Footer/>
</template>
<script>
import Header from './components/Header/userInfo.vue';
import MainNav from './components/Header/main-nav.vue';
import Loading from './components/loading.vue';
import Footer from './components/Footer';
import { loading } from './store';

export default ({
  components: {
    Header,
    MainNav,
    Loading,
    Footer,
  },
  setup() {
    return {
      loadingStatus: loading.loadingStatus,
    }
  },
})
</script>

<style>
html, body, #app, #micro_web_main_app{
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.sub-container {
  min-height: 100%;
  position: relative;
}
#sub-body {
  min-height: 100%;
  width: 100%;
}

</style>
