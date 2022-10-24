<template>
  <article class="component need-water-plants-component">
    <h2 class="component__title">&#129488; 식물들이 말라가고 있어요!</h2>
    <div id="need-water__wrapper" class="need-water-plant-list__wrapper">
      <ul 
        id="need-water-plant-list" 
        class="need-water-plant-list"
        :class="{'list--align-masonry': list_max_width, }"
        :style="{
          width: list_width ?  list_max_width + 'px' : 'auto',
        }"
      >
        <li 
          v-for="plant in plants"
          :key="plant.id"
          class="plant__item"
        >
          <p class="plant__last-water-day">
            <i class="icon water-drop" aria-hidden="true"></i>
            <span class="day__text">{{plant.last_watered}}일 전</span>
          </p>
          <p class="plant-name">{{plant.name}}</p>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
import { computed, onMounted, reactive, toRefs } from "vue";
import scrollBooster from "scrollbooster";

  export default {
    name: "needWaterPlants",
    setup() {
      const state = reactive({
        list_width: 0,
        plants: [
          { id: 1, name: "몬스테라 알보", last_watered: 7 },
          { id: 4, name: "삼색달개비", last_watered: 6 },
          { id: 7, name: "크리스탈리넘", last_watered: 5 },
          { id: 5, name: "포게티", last_watered: 5 },
          { id: 22, name: "무늬알로카시아", last_watered: 4 },
          { id: 12, name: "호야 마틸다", last_watered: 3 },
          { id: 15, name: "블루스타펀", last_watered: 3 },
          { id: 10, name: "히메몬", last_watered: 3 },
          { id: 9, name: "실버레이스", last_watered: 2 },
          { id: 8, name: "무보고", last_watered: 2 },
        ],
      });
      const list_max_width = computed(() => {
        return state.list_width ? state.list_width * (2 / 3) : 0;
      });

      // 식물이 말라가고 있어요 리스트 넓이 지정
      const calculateMasonryLayout = () => {
        const plant_list = document.getElementById("need-water-plant-list");
        const width = plant_list.offsetWidth;

        state.list_width = width;
        new scrollBooster({
          viewport: document.getElementById("need-water__wrapper"),
          content: document.getElementById("need-water-plant-list"),
          scrollMode: "native",
          direction: "horizontal",
          emulateScroll: true,
        });
      };
      
      onMounted(() => {
        calculateMasonryLayout();
      })
      
      return {
        list_max_width,
        ...toRefs(state),
        calculateMasonryLayout,
      }
    }
  }
</script>

<style lang="scss" scoped>

  .need-water-plant-list__wrapper {
    width: calc(100% + 24px);
    overflow: hidden;
  }
  .need-water-plant-list {
    @include flex(true, row, nowrap, flex-start, flex-start);

    gap: 12px;
    cursor: grab;

    &.list--align-masonry {
      flex-wrap: wrap;
    }
  }
  // plant__item
  .plant__item {
    @include flex(false, row, nowrap, flex-start, center);

    gap: 8px;
    flex: 0 0 auto;
    height: 32px;
    padding: 0 12px;
    background-color: $primary-main;
    border-radius: 32px;
    overflow: hidden;

    .plant__last-water-day {
      @include flex(false, row, nowrap, flex-start, center);

      .water-drop {
        @include icon-custom(20);

        margin-right: 2px;
      }
      .day__text {
        font-weight: $font-b;
      }
    }
  }

</style>