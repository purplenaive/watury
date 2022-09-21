<template>
  <Transition>
    <div 
      v-if="text" 
      class="toast-message component" 
      :width="width" 
    >
      <div class="toast__background" :style="{backgroundColor: background}"></div>
      <i class="icon toast__icon red" :class="icon"></i>
      <p class="toast__text" v-html="text"></p>
    </div>
  </Transition>
</template>

<script>
  export default {
    name: "toastMessage",
    props: {
      width: {
        type: String,
        default: "100%",
      },
      background: {
        type: String,
        default: "#FF6464",
      },
      icon: {
        type: String,
        default: "alert-circle"
      },
      text: {
        type: String,
        default: "",
      },
    }
  }
</script>

<style lang="scss" scoped>
  .toast-message {
    @extend .common-card;
    @include flex(false, row, nowrap, flex-start, flex-start);

    gap: 8px;
    padding: 10px 12px;
    color: $red;
    line-height: 1.4;
    font-weight: $font-md;
    overflow: hidden;
    margin-bottom: 16px;
    position: relative;

    .toast__background {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0.3;
    }
    .toast__icon {
      @include icon-custom(16);

      margin: 2px 0;
    }
    .toast__text {
      font-size: 14px;
    }
  }
</style>