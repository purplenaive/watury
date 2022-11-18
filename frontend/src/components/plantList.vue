<template>

  <ul class="component plant-list">
    <!-- ========== plant item ========== -->
    <li v-for="plant in 8" :key="plant" class="plant__item">
      <router-link class="plant__router" to="/">
        <!-- ===== image ===== -->
        <div class="plant-image">
          <div class="image--default">
            <i class="icon plant small green"></i>
          </div>
        </div>
        <!-- ===== name ===== -->
        <p class="plant__name">테스트입니다테슷흐</p>
      </router-link>
    </li>
  </ul>

</template>

<script>
  export default {
    name: "plantList",

  }
</script>

<style lang="scss" scoped>

  .plant-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    .plant__router {
      display: block;
      width: 100%;
    }
  }
  .plant__item {
    
    .plant-image {
      width: 100%;
      height: calc((100vw - 48px - (24px * 3)) / 4);
      margin-bottom: 6px;
      border-radius: 16px;
      overflow: hidden;

      .image--default {
        @include flex(false, row, nowrap, center, center);

        width: 100%;
        height: 100%;
        background-color: mix($primary-main, white, 8%);
      }
    }

    .plant__name {
      max-width: 100%;
      height: 32px;
      text-align: center;
      font-size: 14px;
      line-height: 16px;
      overflow: hidden;
      word-wrap: break-word;
      word-break: break-all;
    }
  }

</style>