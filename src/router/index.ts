import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Challenge1 from "../views/Challenge1.vue";

Vue.use(VueRouter);
const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: '/challenge-1',
  },
  {
    path: "/challenge-1",
    name: "Challenge1",
    component: Challenge1
  },
  {
    path: "/challenge-2",
    name: "Challenge2",
    component: /* webpackChunkName: "Challenge2"  */ () => import("../views/Challenge2.vue")
  },
  {
    path: "/challenge-3",
    name: "Challenge3",
    component: /* webpackChunkName: "Challenge3"  */ () => import("../views/Challenge3.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
