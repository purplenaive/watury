<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: "App",
  components: {
  }
}
</script>

<style lang="scss">
  html, body {
    min-height: 100vh;
    margin: 0;
  }
  #app {
    min-height: 100vh;
    font-family: $ptd;
    letter-spacing: -0.005em;
    color: $navy;
  }
</style>
