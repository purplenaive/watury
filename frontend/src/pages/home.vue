<template>
  <main class="page home-page">
    <!-- ********** main carousel ********** -->
    <main-carousel></main-carousel>
    <!-- ********** 말라가고 있어요 ********** -->
    <section class="common-board getting-drier-board">
      <div class="board__title">
        <h2 class="text--green title__text">말라가고 있어요!</h2>
        <button class="title__action-button view-detail-info-button">
          <i class="icon info-circle green"><span class="sr-only">정보 보기</span></i>
        </button>
      </div>
      <ul class="dried-plant-list">
        <plant-item
          v-for="(plant, plant_index) in dried_plant.splice(0, 4)" 
          :key="`plant-${plant_index}-${plant.name}`"
          :data="plant"
        ></plant-item>
      </ul>
      <button class="view-all-dried-list-button">
        <i class="icon double-chevron-down">
          <span class="sr-only">식물 전체 보기</span>
        </i>
      </button>
    </section>
    <!-- ********** 말라가고 있어요 ********** -->
    <section class="common-board watering-calendar-board">
      <Calendar 
        class="common-calendar watering-calendar"
        :attributes="calendar.attrs"
        title-position="left"
        is-expanded trim-weeks
      />
    </section>
    <!-- ********** 내 식물 ********** -->
    <section class="common-board board--escape my-plants-board">
      <h2 class="board__title">
        <p class="title__text">내 식물, <span class="text--green plant__quantity">{{my_plant.length}}개</span></p>
      </h2>
      <div class="board__content">
        <plant-list :data="my_plant"></plant-list>
      </div>
    </section>
  </main>
</template>

<script>
  import mainCarousel from '@/components/mainCarousel.vue';
  import plantItem from '@/components/plantItem.vue';
  import plantList from '@/components/plantList.vue';

  import { Calendar } from "v-calendar";
  import "v-calendar/dist/style.css";

  export default {
    name: 'mainHome',
    components: {
      mainCarousel, plantItem, Calendar, plantList
    },
    data() {
      return {
        dried_plant: [
          {img: "", name: "식물 이름", last_watering: 1, watering_cycle: 1 },
          {img: "", name: "식물 이름 2", last_watering: 1, watering_cycle: 1 },
          {img: "", name: "식물 이름 3", last_watering: 1, watering_cycle: 1 },
          {img: "", name: "식물 이름 4", last_watering: 1, watering_cycle: 1 },
          {img: "", name: "식물 이름 5", last_watering: 1, watering_cycle: 1 },
        ],
        calendar: {
          attrs: [
            {
              bar: { style: { "background-color": "#7AB571" } },
              dates: new Date(2022, 8, 2),
              popover: {
                label: "테스트 1",
                visibility: "click",
              }
            },
            {
              bar: { style: { "background-color": "#7AB571" } },
              dates: new Date(2022, 8, 5),
              popover: {
                label: "테스트 2",
                visibility: "click",
              }
            },
            {
              bar: { style: { "background-color": "#7AB571" } },
              dates: new Date(2022, 8, 13),
              popover: {
                label: "테스트 3",
                visibility: "click",
              }
            },
          ]
        },
        my_plant: [
          {name: "몬스테라 알보", img: require("@/assets/images/main_carousel/image1.jpg")},
          {name: "식물 2", img: require("@/assets/images/main_carousel/image2.jpg")},
          {name: "식물 3", img: require("@/assets/images/main_carousel/image1.jpg")},
          {name: "식물 4", img: require("@/assets/images/main_carousel/image2.jpg")},
          {name: "식물 5", img: require("@/assets/images/main_carousel/image1.jpg")},
          {name: "식물 6", img: require("@/assets/images/main_carousel/image2.jpg")},
        ],
      }
    },
  }
</script>

<style lang='scss' scoped>
  .home-page {
    padding-bottom: $header-height;

    .common-board {
      margin-bottom: 32px;
    }
  }
  // ========== main carousel ========== //
  .main-carousel__wrapper {
    margin-bottom: 32px;
  }
  // ========== 말라가고 있어요 ========== //
  .getting-drier-board {
    padding: 16px 16px 0;
  }
  .dried-plant-list {
    @include flex(false, column, nowrap, flex-start, center);

    gap: 12px;
    
    .common-plant-item {
      background-color: rgba(white, .75);
    }
  }
  .view-all-dried-list-button {
    @include flex;

    width: 100%;
    height: 55px;
    background: unset;
  }
  // ========== watering calendar ========== //
  .watering-calendar-board {
    padding-bottom: 6px;
  }
  // ========== 내 식물 ========== //
  .my-plants-board {
    
    .board__title {
      margin-bottom: 16px;
    }
  }
</style>