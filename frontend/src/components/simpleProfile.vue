<template>
  <article class="simple-profile-component">
    <div class="profile-area">
      <!-- profile image -->
      <div class="profile-image">

        <div class="profile--default">
          <i class="icon profile"></i>
        </div>
      </div>
      <div class="profile__info">
        <p class="profile-name">purplenaive</p>
        <p class="profile-plant-count">
          <span class="text--dark-green plant-count">24개</span> 식물
        </p>
      </div>
    </div>
    <button class="profile-setting-button" title="설정 열기">
      <i class="icon setting" aria-hidden="true"></i>
      <span class="sr-only">설정 열기</span>
    </button>
  </article>
</template>

<script>
  export default {
    name: "simpleProfile",
    setup() {

    }
  }
</script>

<style lang="scss" scoped>
  .simple-profile-component {
    @include flex(false, row, nowrap, flex-start, center);
  }
  
  // profile image
  .profile-area {
    @include flex(false, row, nowrap, flex-start, center);

    gap: 12px;
    flex: 1 1 auto;

    .profile-image {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      overflow: hidden;
      background-color: white;

      .profile--default {
        @include flex(false, row, nowrap, center, center);

        width: 100%;
        height: 100%;
        background-color: white;
      }
    }
    .profile__info {
      line-height: 1.4;

      .plant-count {
        font-weight: $font-md;
      }
    }

  }
  // profile-setting-button
  .profile-setting-button {
    width: 40px;
    height: 40px;
    transform: translate(8px, 0);
  }
</style>