<template>
  <li class="common-plant-item">
    <!-- 이미지 -->
    <div class="plant__image">
      <img v-if="data.img !== ''" :src="data.img" alt="내 식물 사진" class="plant-iamge">
      <div class="plant__default-image">
        <i class="icon sprout green"></i>
      </div>
      <!-- <img src="" alt="내 식물 이미지"> -->
    </div>
    <!-- 이름 -->
    <span class="plant__name">{{data.name}}</span>
    <!-- 물주기 정보 -->
    <p class="plant__watering-info">
      <span class="last-watering-day">
        <i class="icon water-drop green small"></i>
        {{data.last_watering}}일 전
      </span>
      <span class="watering-cycle">{{data.watering_cycle}}일마다</span>
    </p>
  </li>
</template>

<script>
  export default {
    name: "plantItem",
    props: {
      data: {
        type: Object,
        default() {
          return { img: "", name: "식물 이름", last_watering: 0, watering_cycle: 2 };
        },
      }
    },
  }
</script>

<style lang="scss" scoped>
  .common-plant-item {
    @extend .common-card;
    @include flex(false, row, nowrap, flex-start, center);

    width: 100%;
    padding: 10px 12px 10px 10px;
    background-color: white;
  }

  // ========== 식물 이미지 ========== //
  .plant__image {
    flex: 0 0 50px;
    height: 50px;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 12px;
    position: relative;

    .plant__default-image {
      @include flex;

      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 0;
      background-color: $pale-green;    
    }
  }
  // ========== 식물 이름 ========== //
  .plant__name {
    flex: 1 1 auto;
    padding-right: 12px;
  }
  // ========== 식물 물주기 정보 ========== //
  .plant__watering-info {
    flex: 0 0 auto;
    
    .last-watering-day {
      @include flex(false, row, nowrap, flex-end, center);

      gap: 3px;
      font-weight: $font-b;
      color: $green;
      text-align: right;
    }
    .watering-cycle {
      display: inline-block;
      width: 100%;
      text-align: right;
      font-size: 14px;
      font-weight: $font-md;
      color: $navy--opacity-05;
    }
  }
</style>