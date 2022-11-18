<template>
  <nav-menu></nav-menu>
  <router-view :class="{'content--header-active': $route.meta.headerActive}"></router-view>
</template>

<script>
import navMenu from "@/components/navMenu.vue"

export default {
  name: "App",
  components: { navMenu, }
}
</script>

<style lang="scss">
  @import "~@/assets/css/common";

  html, body {
    min-height: 100vh;
    margin: 0;
  }
  
  #app {
    min-height: 100vh;
    font-family: $ptd !important;
    letter-spacing: -0.005em;
    color: $secondary-main;
    background-color: $pale-dark;
  }
  .nav-menu + main {
    margin-bottom: 90px;
  }

  .content--header-active {
    padding-top: $header-height + 18px !important;
  }
</style>
