<template>
  <nav class="component nav-menu">
    <router-link 
      v-for="m in menu"
      :key="m.icon"
      class="menu__item" 
      :class="{ 'menu--active': m.value == route_active, }"
      :to="{ name: m.path }"
    >
      <div class="icon-circle">
        <i 
          class="menu__icon icon" 
          :class="[m.icon, {
            'white': m.value == route_active,
          }]"
        ></i>
      </div>
      <p class="menu__text">{{m.text}}</p>
    </router-link>
  </nav>
</template>

<script>
import { reactive, toRefs, computed, } from 'vue';
  import { useRoute } from 'vue-router';

  export default {
    name: "navMenu",
    setup() {
      const route = useRoute();
      const state = reactive({
        menu: [
          { value: "calendar", text: "달력", icon: "calendar", path: "home" },
          { value: "addPlant", text: "식물 추가", icon: "add-plant", path: "home" },
          { value: "home", text: "홈", icon: "home", path: "home" },
          { value: "watering", text: "물주기", icon: "watering-can", path: "home" },
          { value: "profile", text: "프로필", icon: "profile", path: "profile" },
        ]
      });
      const route_active = computed(() => {
        return route.meta.menu;
      });

      return {
        route_active,
        ...toRefs(state),
      }
    }
  }
</script>

<style lang="scss" scoped>

  .nav-menu {
    @include flex(false, row, nowrap, center, center);

    gap: vw(46, 720);
    height: 56px;
    box-sizing: content-box;
    border: 5px solid $pale-dark;
    border-bottom: 0;
    border-radius: 24px 24px 0 0;
    position: fixed;
    bottom: 0;
    left: -5px;
    width: 100%;
    z-index: 49;
    background-color: white;

    .menu__item {
      @include flex(false, column, nowrap, center, center);

      width: 40px;
      min-height: 40px;
      position: relative;

      &.menu--active {
        min-height: unset;

        .icon-circle {
          padding: 10px;
          border: 5px solid $pale-dark;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translate(-50%, -100%);
          background-color: $primary-main;

          &::before,
          &::after {
            content: "";
            display: block;
            width: 4px;
            height: 4px;
            position: absolute;
            bottom: 10px;
            background-color: white;
          }
          &::before {
            border-radius: 0 16px 0 0;
            box-shadow: 1px -1px 0 1px $pale-dark;
            transform: translate(-100%, 0);
            left: -3px;
          }
          &::after {
            border-radius: 16px 0 0 0;
            box-shadow: -1px -1px 0 1px $pale-dark;
            transform: translate(0100%, 0);
            right: -3px;
          }
        }
        .menu__text {
          max-width: unset;
          max-height: unset;
          transform: translate(0, 6px);
          color: $primary-dark;
        }
      }
    }
    .icon-circle {
      border-radius: 50%;
      
      .menu__icon {
        @include icon-custom(20)
      }
    }
    .menu__text {
      max-width: 0;
      max-height: 0;
      overflow: hidden;
      font-size: 14px;
      font-weight: $font-md;
    }
  }

</style>

