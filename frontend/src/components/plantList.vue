<template>
  <ul class="component plant-list-component">
    <li 
      v-for="plant, plant_index in data" 
      :key="`my-plant-${plant_index}-${plant.name}`" 
      class="plant__item"
    >
      <!-- 이미지 -->
      <div class="plant__image-wrapper">
        <div class="plant__image">
          <img :src="plant.img" alt="내 식물" class="plant-image">
        </div>
      </div>
      <!-- 이름 -->
      <p class="plant__name">{{plant.name}}</p>
      <!-- 삭제 버튼 -->
      <button class="common-button button--escape remove-this-plant">
        <i class="icon close small"><span class="sr-only">삭제하기</span></i>
      </button>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "plantList",
    props: {
      data: {
        type: Array,
        default() {
          return [];
        },
      }
    }
  }
</script>

<style lang="scss" scoped>
  .plant-list-component {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  .plant__item {
    position: relative;
    overflow: hidden;

    .plant__image-wrapper {
      width: 100%;

      .plant__image {
        @extend .nue--normal;
        
        width: 100%;
        height: calc(25vw - (36px / 4) - (16px * 3 / 4));
        border-radius: 24px;
        overflow: hidden;
        margin-bottom: 12px;
        background-color: $pale;
      }
      .plant-image {
        display: block;
        width: 100%;
        height: 100%;
        max-width: unset;
        object-fit: cover;
      }
    }
    .plant__name {
      width: 100%;
      height: 40px;
      line-height: 20px;
      font-size: 15px;
      overflow: hidden;
      text-align: center;
    }
    .remove-this-plant {
      display: none;
      border-radius: 10px;
      padding: 8px;
      position: absolute;
      right: 0;
      top: 0;

      .icon {
        @include icon-custom(12);
      }
    }
  }
</style>