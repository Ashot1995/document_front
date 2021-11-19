<template>
  <section class="auth">
    <div class="auth__nav">
      <div class="nav__point" @click="showSignUp = true">
        Регистрация
      </div>
      <div class="nav__point" @click="showSignUp = false">
        Авторизация
      </div>
    </div>
    <sign-up-form :sitekey="$store.state.recaptcha"
                  v-show="showSignUp"
    />
    <sign-in-form :sitekey="$store.state.recaptcha"
                  v-show="!showSignUp"
    />
  </section>
</template>

<script>
import SignInForm from "../components/signForms/SignInForm";
import SignUpForm from "../components/signForms/SignUpForm";

export default {
  name: "SignUp",
  components: {
    SignInForm, SignUpForm
  },
  data() {
    return {
      showSignUp: true,
    }
  }
}
</script>

<style lang="scss">

section.auth {
  margin: auto;
  .auth__form {
    flex: 1 0 auto;
    min-width: 360px;
    max-width: 360px;
    width: 100%;
    background: var(--white);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    border-radius: 30px;
    padding: 17px 15px 20px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    form {
      .form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 12px;
        label {
          font-size: 12px;
          line-height: 18px;
          color: var(--text_gray_color);
          padding-left: 20px;
          font-family: var(--ff_regular);
        }
        input {
          background: var(--light_white);
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
          border-radius: 20px;
          font-size: 16px;
          line-height: 21px;
          color: var(--text_gray_color);
          padding: 9px 20px;
          font-family: var(--ff_regular);
        }
        .error {
          margin-top: 5px;
          color: red;
          padding: 0 15px;
          font-size: 12px;
        }
        .invalid {
          border: 1px solid red !important;
          transition: .3s;
        }
        &__name {
          input {
            margin-bottom: 5px;
          }
        }
      }
      .recaptcha {
        margin: 22px 0 60px;
        height: 70px;
        max-width: 241px;
        display: flex;
        padding: 0 15px;
        align-items: center;
        background-color: #F9F9F9;
        border: 2px solid #E0E0E0;
      }
      .submit-form {
        display: block;
        margin: 0 auto;
        padding: 10px 30px;
        font-family: var(--ff_medium);
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
      }
    }
  }
  .auth__nav {
    flex: 0 0 auto;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    .nav__point	{
      width: 100%;
      display: flex;
      align-items:center;
      padding-left: 30px;
      font-family: var(--ff_regular);
      font-size: 16px;
      line-height: 18px;
      color: var(--text_gray_color);
      cursor: pointer;
      height: 22px;
      }
    .active {
      background: var(--white);
    }
  }
}
</style>
