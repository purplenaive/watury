import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/homeView.vue"),
      meta: {
        headerActive: false,
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/pages/loginView.vue"),
      meta: {
        headerActive: false,
      },
    },
  ]
})