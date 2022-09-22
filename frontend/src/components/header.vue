 <template>
  <header class="main-header component">
    <h1 class="sr-only watury-title">Watery : 내 식물 관리 워터리</h1>
    <!-- 프로필 -->
    <div class="header__profile">
      <router-link :to="{name: 'home'}" class="profile__router">
        <div class="profile__avatar">
          <div class="basic-profile">
            <i class="icon profile small"><span class="sr-only">프로필</span></i>
          </div>
        </div>
        <span class="proflie__name">{{"사용자"}}</span>
      </router-link>
    </div>
    <!-- 알람 -->
    <button class="alarm-record-button">
      <i class="icon bell"><span class="sr-only">알림</span></i>
    </button>
  </header>
 </template>

 <script>
  export default {
    name: "mainHeader",
  }
 </script>

 <style lang="scss" scoped>
  .main-header {
    @include flex(false, row, nowrap, flex-end, center);

    width: 100%;
    height: $header-height;
    padding: 10px 18px;
    border-bottom: 1px solid $navy--opacity-05;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 29;
    background-color: $pale;
  }

  // ========== 프로필 ========== //
  .header__profile {
    margin-right: auto;
    
    .profile__router {
      @include flex(false, row, nowrap, flex-start, center);
  
      gap: 6px;
      justify-self: flex-start;
    }

    .basic-profile {
      @include flex(false, row, nowrap, center, center);

      width: 28px;
      height: 28px;
      border-radius: 50%;
      background-color: $pale-green;
    }
    .profile__name {
      font-weight: $font-md;
    }
  }
  // ========== 알람 버튼 ========== //
  .alarm-record-button {
    padding: 4px;
    background-color: unset;
  }
 </style>