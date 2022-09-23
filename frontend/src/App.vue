<template>
  <main-header v-if="$route.meta.headerActive"></main-header>
  <router-view :class="{'content--header-active': $route.meta.headerActive}"></router-view>
  <fixed-menu></fixed-menu>
</template>

<script>
  import mainHeader from "@/components/header.vue";
  import fixedMenu from "@/components/fixedMenu.vue";

export default {
  name: "App",
  components: {
    mainHeader, fixedMenu,
  }
}
</script>

<style lang="scss">
  html, body {
    min-height: 100vh;
    margin: 0;
    background-color: $pale;
  }
  #app {
    min-height: 100vh;
    font-family: $ptd;
    letter-spacing: -0.005em;
    color: $navy;
  }

  .content--header-active {
    padding-top: $header-height + 18px !important;
  }
</style>
