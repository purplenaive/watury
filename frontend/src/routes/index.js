import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/home.vue"),
      meta: {
        headerActive: true,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../pages/login.vue"),
      meta: {
        headerActive: false,
      },
    }
  ]
})