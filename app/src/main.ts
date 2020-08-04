import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import * as MyComponents from "./plugins/my-components";

Vue.config.productionTip = false;

// Myコンポーネントをグローバルコンポーネントとして登録するプラグイン
Vue.use(MyComponents);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
