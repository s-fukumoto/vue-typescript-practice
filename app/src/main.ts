import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueCompositionAPI from "@vue/composition-api";
import MyComponents from "./plugins/my-components";

Vue.config.productionTip = false;

// Composition API
Vue.use(VueCompositionAPI);

// Myコンポーネントをグローバルコンポーネントとして登録
Vue.use(MyComponents);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
