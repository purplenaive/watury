<template>
  <router-view :class="{'content--header-active': $route.meta.headerActive}"></router-view>
</template>

<script>

export default {
  name: "App",
  components: {
  }
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

  .content--header-active {
    padding-top: $header-height + 18px !important;
  }
</style>
