import Vue from "vue";
import VueCompositionAPI, { createApp, h } from "@vue/composition-api";
import App from "./App.vue";
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import { routes } from './router/index'
const router = new VueRouter({
  routes
})
//vuex
import Vuex from 'vuex'
Vue.use(Vuex)
import {storage} from './store/index'
const store = new Vuex.Store(storage)

Vue.use(VueCompositionAPI);
const app = createApp({
  router,
  store,
  render: () => h(App),
});
app.mount("#app");