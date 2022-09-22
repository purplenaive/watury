<template>
  <div class="main-carousel__wrapper">
    <Splide 
      aria-label="각종 소식과 이벤트를 확인하세요!"
      :options="{
        height: '150px',
        arrows: false,
        pagination: false,
      }"
      class="main-carousel component"
      @splide:mounted="carouselMounted"
      @splide:moved="carouselMove"
    >
      <splideSlide class="carousel__item">
        <img src="@/assets/images/main_carousel/image1.jpg" alt="메인 슬라이드 1">
      </splideSlide>
      <splideSlide class="carousel__item">
        <img src="@/assets/images/main_carousel/image2.jpg" alt="메인 슬라이드 2">
      </splideSlide>
    </Splide>
    <!-- pagination -->
    <div class="carousel__pagination">
      {{active}} / {{length}}
    </div>
  </div>
</template>

<script>
  import { Splide, SplideSlide } from "@splidejs/vue-splide";
  import '@splidejs/vue-splide/css/core';

  export default {
    name: "mainCarousel",
    components: {
      Splide, SplideSlide,
    },
    data() {
      return {
        active: 1,
        length: "-",
      }
    },
    methods: {
      // 슬라이드 mounted
      carouselMounted() {
        const length = document.querySelectorAll(".carousel__item").length;
        
        this.length = length;
      },
      // 페이지 넘길 때마다 실행
      carouselMove(splide_data, now_index, prev_index, dest_index) {
        this.active = now_index + 1;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main-carousel__wrapper {
    position: relative;
  }
  .main-carousel {
    
    .carousel__item {
      @extend .common-card;
  
      overflow: hidden;

      img {
        display: block;
        width: 100%;
      }
    }
  }
  .carousel__pagination {
    padding: 4px 10px;
    font-size: 12px;
    border-radius: 16px;
    position: absolute;
    left: 12px;
    bottom: 12px;
    background-color: rgba(white, .6);
  }
</style>