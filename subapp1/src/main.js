// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

let instance = null;
export async function bootstrap() {
  console.log('vue app bootstraped');
}
if (!window.__MICRO_WEB__) {
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}

export async function mount() {
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app-vue')
}
export async function unmount(ctx) {
  instance = null;
  const { container } = ctx
  if (container) {
    document.querySelector(container).innerHTML = ''
  }
}
