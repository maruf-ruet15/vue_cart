import Vue from "vue";
import VueCompositionAPI, { createApp, h } from "@vue/composition-api";
import App from "./App.vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import { routes } from './router/index'
const router = new VueRouter({
  routes
})

Vue.use(VueCompositionAPI);
const app = createApp({
  router,
  render: () => h(App),
});
app.mount("#app");