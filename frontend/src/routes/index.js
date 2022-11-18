import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { // ========== -> 메인
      path: "/",
      name: "home",
      component: () => import("@/pages/homeView.vue"),
      meta: {
        headerActive: false,
        menu: "home",
      },
    },
    { // ========== -> 로그인
      path: "/login",
      name: "login",
      component: () => import("@/pages/loginView.vue"),
      meta: {
        headerActive: false,
        menu: "",
      },
    },
    { // ========== -> 프로필
      path: "/profile",
      name: "profile",
      component: () => import("@/pages/profileView.vue"),
      meta: {
        headerActive: false,
        menu: "profile",
      },
    },
  ]
})