<template>
  <div class="auth__form sign_in">
    <form action="" @submit.prevent="submitLogin">
      <div
          class="error"
          v-if="authError"
      >
        неправильный емейл или пароль
      </div>
      <div class="form-group">
        <label for="">Email:</label>
        <input
            type="email"
            name="email"
            v-model.trim="email"
            :class="{invalid:($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        >
        <div
            class="error"
            v-if="$v.email.$dirty && !$v.email.required"
        >
          Поле email не должно быть пустым
        </div>
        <div
            class="error"
            v-else-if="$v.email.$dirty && !$v.email.email"
        >
          Введите корректный Email
        </div>
      </div>

      <div class="form-group">
        <label for="">Пароль:</label>
        <input
            type="password"
            name="password"
            v-model.trim="password"
            :class="{invalid:($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        >
        <div
            class="error"
            v-if="$v.password.$dirty && !$v.password.required"
        >
          Введите пароль
        </div>
        <div
            class="error"
            v-else-if="$v.password.$dirty && !$v.password.minLength"
        >
          Пароль должен быть не менее {{ $v.password.$params.minLength.min }} символов
        </div>
      </div>

      <div
          id="g-recaptcha"
          class="g-recaptcha"
          :data-sitekey="sitekey">
      </div>
      <div
          class="error"
          v-if="recaptcha"
      >
        Подтвердите что вы не робот
      </div>

      <button type="submit" class="btn-orange submit-form">Авторизоваться</button>
    </form>
  </div>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
import {mapActions} from "vuex";
import router from "../../router";

export default {
  name: "SignInForm",
  data() {
    return {
      email: '',
      password: '',
      authError: false,
      recaptcha: false
    }
  },
  validations: {
    email:{email, required},
    password:{required, minLength: minLength(6)},
  },
  props:['sitekey'],
  methods: {
    ...mapActions(['loginUserAction']),
    submitLogin(event) {
      let captcha = event.target['g-recaptcha-response'].value;
      if (this.$v.$invalid || !captcha) {
        this.recaptcha = true
        this.$v.$touch()
      } else {
        let login = {
          email: this.email,
          password: this.password,
          captcha: this.captcha
        }
        this.recaptcha = false
        this.loginUserAction(login).then((res) => {
          if (res === 200) {
            this.$store.state.isAuth = false;
            router.push('/')
          } else {
            this.authError = true
          }
        }).catch((error) => {
          console.log(error, 'error')
        })
      }
    }
  }
}
</script>