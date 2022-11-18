<template>
  <main class="page-view home-view">

    <section class="pale-section">
      <!-- ========== 상단 프로필 정보 ========== -->
      <simple-profile></simple-profile>
      <!-- ========== 식물들이 말라가고 있어요 ========== -->
      <need-water-plants></need-water-plants>
    </section>

    <section class="white-section">
      <!-- ========== 주기능 바로가기 버튼 ========== -->
      <ul class="main-tool-shortcuts">
        <li 
          v-for="tool in tools"
          :key="tool.name"
          class="tool__item"
        >
          <router-link :to="tool.path" class="tool-button">
            <i class="icon" :class="tool.icon" aria-hidden="true"></i>
            <span class="sr-only button__text">{{tool.title}}</span>
          </router-link>
          <p class="tool__name">{{tool.title}}</p>
        </li>
      </ul>

      <!-- ========== 이번 달, 물 준 날은? ========== -->
      <monthly-watering-calendar></monthly-watering-calendar>

      <!-- ========== 내 식물들 ========== -->
      <section class="component my-plant-list">
        <h2 class="component__title">&#129716; 내 식물들</h2>
        <plant-list></plant-list>
      </section>
    </section>

  </main>
</template>

<script>
  import { reactive, toRefs } from "vue";

  import simpleProfile from "@/components/simpleProfile.vue";
  import needWaterPlants from "@/components/needWaterPlants.vue";
  import monthlyWateringCalendar from "@/components/monthlyWateringCalendar.vue";
  import plantList from "@/components/plantList.vue";

  export default {
    name: "mainView",
    components: { simpleProfile, needWaterPlants, monthlyWateringCalendar, plantList },
    setup() {
      const state = reactive({
        tools: [
          { name: "repotting", title: "분갈이", icon: "repotting", path: "/" },
          { name: "addPlant", title: "식물 추가", icon: "add-plant", path: "/" },
          { name: "fertilizer", title: "비료 주기", icon: "fertilizer", path: "/" },
          { name: "watering", title: "물 주기", icon: "watering-can", path: "/" },
        ],
      })

      return {
        ...toRefs(state)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .home-view {
    padding: 0;
  }
  
  // ========== pale section ========== //
  .pale-section {
    padding: 24px;
  }
  // 상단 프로필 정보
  .simple-profile-component {
    margin-bottom: 32px;
  }

  // ========== white section ========== //
  .white-section {
    @include flex(false, column, nowrap, flex-start, center);

    gap: 32px;
    width: 100%;
    border-radius: 24px 24px 0 0;
    padding: 40px 24px 24px;
    background-color: white;
  }
  // ===== 주기능 바로가기 버튼 ===== //
  .main-tool-shortcuts {
    @include flex(false, row, nowrap, center, center);

    gap: 24px;
    width: 100%;
    padding-bottom: 8px;

    .tool-button {
      @include flex(false, row, nowrap, center, center);

      width: vw(120);
      height: vw(120);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 8px;
      background-color: $secondary-06;

      .icon {
        width: vw(48);
        height: vw(48);
      }
    }
    .tool__name {
      text-align: center;
      font-size: 14px;
    }
  }
  // ===== 내 식물들 ===== //
  .my-plant-list {
    width: 100%;

  }

</style>