<template>
  <main class="page login-page">
    <div class="page__inner">
      <h1 class="login__title">
        <i class="icon icon--escape watury logo-icon" aria-hidden="true"></i>
        <span v-show="mode === 'sign-up'" class="title__text">회원가입</span>
      </h1>
      <!-- ========== 로그인 form ========== -->
      <form 
        v-if="mode === 'login'"
        id="login-form"
        action="" 
        method="POST"
        class="common-form login-form"
      >
        <div class="form__content">
          <!-- 아이디 -->
          <input type="text" v-model="login.id" class="form__field common-field id-field" placeholder="아이디">
          <!-- 비밀번호 -->
          <div class="field__wrapper field--has-button">
            <input 
              :type="login.password.mode" 
              v-model="login.password.value"
              class="form__field common-field id-field" 
              placeholder="비밀번호"
            >
            <button 
              type="button"
              class="field__action-button change-password-view password-mode-button" 
              @click="login.password.mode = changePasswordView(login.password.mode)"
            >
              <i 
                v-show="login.password.mode === 'text'" 
                class="icon small eye"
              ><span class="sr-only">비밀번호 보기</span></i>
              <i 
                v-show="login.password.mode === 'password'" 
                class="icon small eye-close"
              ><span class="sr-only">비밀번호 숨기기</span></i>
            </button>
          </div>
          <p class="guide-text forgot-password-guide text--green">비밀번호를 잊어버리셨나요?</p>
        </div>
        <div class="form__actions">
          <button 
            type="submit" 
            form="login-form" 
            class="common-button button--full button--active login-button"
          >로그인</button>
        </div>
        <p class="guide-text switch-to-sign-up-guide">
          회원이 아니신가요?
          <button class="to-sign-up-button text--green" @click="switchToSignup">회원가입</button>
        </p>
      </form>
      <!-- ========== 회원가입 form ========== -->
      <form 
        v-else-if="mode === 'sign-up'"
        class="common-form sign-up-form" 
        action="" 
        method="POST" 
        id="sign-up-form"
      >
        <div class="form__content">
          <input type="text" 
            v-model="sign_up.name" 
            class="form__field common-field name-field" 
            placeholder="이름을 입력하세요"
            @change="signupValidation"
          >
          <input 
            type="text" 
            v-model="sign_up.id" 
            class="form__field common-field id-field" 
            placeholder="아이디를 입력하세요"
            @change="signupValidation"
          >
          <input 
            type="password" 
            v-model="sign_up.password"
            class="form__field common-field password-field" 
            placeholder="비밀번호를 입력하세요"
            @change="signupValidation"
          >
          <input 
            type="password" 
            v-model="sign_up.confirm_password"
            class="form__field common-field confirm-password-field" 
            placeholder="비밀번호를 확인합니다"
            @change="signupValidation"
          >
        </div>
        
        <div class="form__actions">
          <toast-message :text="sign_up.error"></toast-message>
          <button 
            type="submit" 
            form="sign-up-form" 
            class="common-button button--full button--active sign-up-button"
            :disabled="sign_up.error !== ''"
            @click.prevent="signup"
          >회원가입</button>
        </div>
        <p class="guide-text text--green return-to-login" @click="mode = 'login'">로그인으로 돌아가기</p>
      </form>
    </div>
  </main>
</template>

<script>
  import toastMessage from '@/components/toastMessage.vue';

  export default {
    name: "loginPage",
    components: {
      toastMessage,
    },
    data() {
      return {
        mode: "login",
        login: {
          id: "",
          password: {
            mode: "password",
            value: "",
          }
        },
        sign_up: {
          name: "",
          id: "",
          password: "",
          confirm_password: "",
          error: "",
        },
      }
    },
    methods: {
      // 회원가입 모드로 변경
      switchToSignup() {
        this.mode = "sign-up";
      },
      // [공통] 비밀번호 필드 비밀번호 표시, 숨기기 버튼 토글
      changePasswordView(target) {
        return target === "password" ? "text" : "password";
      },
      // 회원가입 폼 validation
      signupValidation() {
        const sign = this.sign_up;

        sign.error = "";

        if(!sign.name) {
          this.sign_up.error = "이름을 입력해주세요";
          return;
        } else if(!sign.id) {
          sign.error = "아이디를 입력해주세요";
          return;
        } else if(!sign.password) {
          sign.error = "비밀번호를 입력해주세요";
          return;
        } else if(sign.password !== sign.confirm_password) {
          sign.error = "비밀번호가 일치하지 않습니다.<br>다시 확인해주세요."
          return;
        }
      },
      // 회원가입 버튼 누를 경우
      signup() {
        this.signupValidation();
      },
    },
  }
</script>

<style lang="scss" scoped>
  .login-page {
    min-height: 100vh;
    font-family: $ptd;
    background-color: $pale;

    .page__inner {
      @include flex($direction: column);

      min-height: 100vh;
    }

    // ********** title ********** //
    .login__title {
      @include flex;

      gap: 8px;
      font-size: 16px;
      text-align: center;
      margin-bottom: 20px;

      .logo-icon {
        width: 70px;
        height: 26px;
        margin-bottom: -5px;
      }
    }
  }

  // ********** 공통 form ********** //
  .common-form {

    .form__content {
      @include flex(false, column, nowrap, flex-start, center);
    
      width: vw(240);
      gap: 12px;
    }
    .common-field {
      width: 100%;
    }
  }

  // ********** 가이드 텍스트 ********** //
  .guide-text {
    font-size: 12px;
    text-align: center;
  }
  .forgot-password-guide {
    width: 100%;
    text-align: left;
  }
  .switch-to-sign-up-guide {
    width: 100%;
    margin-top: 8px;

    .to-sign-up-button {
      font-size: 12px;
      padding: 8px 6px;
      line-height: 1;
      background-color: unset;
    }
  }
  .return-to-login {
    margin-top: 8px;
    padding: 8px;
  }


</style>