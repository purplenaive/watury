<template>
  <main class="page-view login-view">

    <section class="view__inner">
      <!-- ============ logo ============ -->
      <h1 class="watury-logo">
        <i class="icon watury" aria-hidden="true"></i>
        <span class="sr-only logo__text">Watury, 워터리</span>
      </h1>
      
      <!-- ============ signup form ============ -->
      <form v-if="!login.status" action="" class="common-form signup-form">
        <div class="form__content"><!-- 이름 -->
          <label class="common-label label--align-vertical">
            <p class="label__text">이름</p>
            <input 
              type="text" 
              name="login" 
              v-model="signup_form.name"
              class="common-field field--box name-field" 
              placeholder="이름을 입력하세요" 
            >
          </label>
          <!-- 이메일 -->
          <label class="common-label label--align-vertical">
            <p class="label__text">이메일</p>
            <input 
              type="email" 
              name="login" 
              v-model="signup_form.email"
              class="common-field field--box email-field" 
              placeholder="watury@gmail.com" 
            >
          </label>
          <!-- 아이디 -->
          <label class="common-label label--align-vertical">
            <p class="label__text">아이디</p>
            <input 
              type="text" 
              name="login" 
              v-model="signup_form.id"
              class="common-field field--box id-field" 
              placeholder="아이디를 입력하세요" 
            >
          </label>
          <!-- 비밀번호 -->
          <label class="common-label label--align-vertical">
            <p class="label__text">비밀번호</p>
            <input 
              type="password" 
              name="login" 
              v-model="signup_form.password"
              class="common-field field--box password-field" 
              placeholder="비밀번호를 입력하세요" 
            >
          </label>
          <!-- 비밀번호 확인 -->
          <label class="common-label label--align-vertical">
            <p class="label__text">비밀번호 확인</p>
            <input 
              type="password" 
              name="login" 
              v-model="signup_form.password_confirm"
              class="common-field field--box password-confirm-field" 
              placeholder="비밀번호를 확인합니다" 
            >
          </label>
        </div>

        <div class="form__actions">
          <button 
            type="submit"
            class="common-button button--active button--box action-button signup-button" 
          >회원가입</button>
          <p class="action-notice" @click="login.status = true">로그인으로 돌아가기</p>
        </div>
      </form>
      <!-- ============ login form ============ -->
      <form v-else action="" class="common-form login-form">

        <div class="form__content">
          <!-- 아이디 -->
          <input 
            type="text" 
            name="login" 
            v-model="login.form.id"
            class="common-field field--box id-field" 
            placeholder="아이디" 
          >
          <!-- 비밀번호 -->
          <input 
            type="password" 
            name="login" 
            v-model="login.form.password"
            class="common-field field--box password-field" 
            placeholder="비밀번호" 
          >
        </div>

        <div class="form__actions">
          <button class="common-button button--active button--box action-button login-button" type="submit">
            로그인
          </button>
          <p class="action-notice login-notice">
            회원이 아니신가요?<span class="text--green change-to-signup" @click="login.status = false">회원가입</span>
          </p>
        </div>
      </form>
    </section>

  </main>
</template>

<script>
  import { reactive, toRefs } from "vue";

  export default {
    name: "loginView",
    setup() {
      const state = reactive({
        login: {
          status: true,
          form: {
            id: "",
            password: "",
          }
        },
        signup_form: {
          name: "",
          email: "",
          id: "",
          password: "",
          password_confirm: "",
        },
      });

      return {
        ...toRefs(state),
      }
    },

  }
</script>

<style lang="scss" scoped>

  .login-view {
    @include flex(false, column, nowrap, center, center);

    min-height: 100vh;

    .view__inner {
      width: vw(400);
    }

    .common-form {

      .form__content {
        @include flex(false, column, nowrap, flex-start, center);
          
        gap: 16px;
      }
    }
  }
  
  // ============ login form ============ //
  .watury-logo {
    width: 100%;
    text-align: center;
    margin-bottom: 24px;
    
    .watury {
      display: block;
      width: auto;
      height: vh(80);
    }
  }
  
  // ============ signup form ============ //
  .signup-form {

    .action-notice {
      cursor: pointer;
    }
  }
  // ============ login form ============ //
  .login-form {
    
    .change-to-signup {
      padding: 6px 10px;
      cursor: pointer;
    }
  }

</style>