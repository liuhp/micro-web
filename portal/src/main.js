import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { starMicroApp } from './util/startMicroApp';

// 注册、加载、启动子应用
starMicroApp();

createApp(App).use(store).use(router).mount("#app");
