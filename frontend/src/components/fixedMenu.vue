<template>
  <nav class="component fixed-menu">
    <div 
      :to="{ name: item.path }"
      class="menu__item"
      :class="name"
      v-for="item in menu"
      :key="item.name"
    >
      <i class="menu__icon icon" :class="item.icon"></i>
      <span class="menu__text">{{item.title}}</span>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "fixedMenu",
    data() {
      return {
        menu: [
          { name: "home", title: "홈", path: "home", icon: "home"},
          { name: "calendar", title: "달력", path: "wateringCalendar", icon: "calendar"},
          { name: "watering", title: "물주기", path: "watering", icon: "watering-can"},
          { name: "care", title: "돌보기", path: "care", icon: "plant"},
          { name: "profile", title: "프로필", path: "profile", icon: "profile"},
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  .fixed-menu {
    @include flex(false, row, nowrap, space-between, center);

    width: 100%;
    padding: 8px 24px;
    border-top: 1px  solid $navy--opacity-05;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: $pale;

    .menu__item {
      @include flex(flase, column, nowrap, center, center);

      gap: 4px;
      width: 38px;

      .menu__text {
        font-size: 14px;
        font-weight: $font-md;
      }
    }
  }
</style>