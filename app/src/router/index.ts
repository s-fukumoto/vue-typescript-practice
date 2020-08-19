import Vue from "vue";
import VueRouter, { RouteConfig, RouterMode } from "vue-router";

Vue.use(VueRouter);

const mode: RouterMode = "history";

// productionをGitHubPages用にベースを変更しているためrouterでも指定
const base = process.env.BASE_URL;

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/car/",
    name: "CarList",
    component: () =>
      import(/* webpackChunkName: "car" */ "../views/car/List.vue"),
  },
  {
    path: "/car/form/",
    name: "CarForm",
    component: () =>
      import(/* webpackChunkName: "car" */ "../views/car/Form.vue"),
  },
  {
    path: "/about/",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode,
  base,
  routes,
});

export default router;
