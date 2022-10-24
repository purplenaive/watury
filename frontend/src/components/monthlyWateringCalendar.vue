<template>
  <article class="component monthly-watering-calendar-component" role="tab">
    <h2 class="component__title">&#127807; 이번 달, 물 준 날은?</h2>
    <form class="switching-calendar-mode" role="tablist">
      <button 
        v-for="mode in calendar_modes"
        :key="mode.mode"
        class="common-button mode-button" 
        :class="{
          'button--secondary': mode.mode === calendar_mode,
        }"
        type="button"
        @click="calendar_mode = mode.mode"
      >{{mode.title}}</button>
    </form>
    <div class="calendar__wrapper">
      <template v-for="calendar in calendar_modes" :key="calendar.mode">
        <calendar 
          v-show="calendar_mode === calendar.mode"
          role="tabpanel"
          class="common-calendar" 
          :attributes="attributes[calendar.mode]"
          locale="ko"
          is-expanded title-position="left"
        />
      </template>
    </div>
  </article>
</template>

<script>
  import { reactive, toRefs, } from "vue";
  import { Calendar } from "v-calendar";
  import "v-calendar/dist/style.css";
  import dayjs from "dayjs";

  export default {
    name: "monthlyWateringCalendar",
    components: { Calendar, },
    setup() {
      const state = reactive({
        calendar_mode: "watering",
        calendar_modes: [
          { mode: "repotting", title: "분갈이 달력" },
          { mode: "fertilizer", title: "비료 달력" },
          { mode: "watering", title: "관수 달력" },
        ],
        attributes: {
          repotting: [],
          fertilizer: [],
          watering: [
            {
              key: "watered-1",
              highlight: { color: "green", fillMode: "light" },
              dates: dayjs("2022-10-10").$d,
            }
          ],
        }
      });

      return {
        ...toRefs(state),
      }
    },
  }
</script>

<style lang="scss" scoped>

  .monthly-watering-calendar-component {
    width: 100%;
  }

  // 달력 모드 변경 버튼들
  .switching-calendar-mode {
    @include flex(false, row, nowrap, center, center);

    gap: 8px;
    margin-bottom: 16px;
  }

</style>