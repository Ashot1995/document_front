<template>
  <div class="auth__form sign_up">
    <form action="" @submit.prevent="submitRegister">
      <div
          class="error"
          v-if="authError"
      >
        неправильные даные
      </div>
      <div class="form-group">
        <label for="">Фамилия, Имя, Отчество:</label>
        <input
            type="text"
            name="name"
            v-model.trim="name"
            @input="getTransliteration"
            :class="{invalid:($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength)}"
        >
        <div
            class="error"
            v-if="$v.name.$dirty && !$v.name.required"
        >
          Поле ФИО не должно быть пустым
        </div>
        <div
            class="error"
            v-else-if="$v.name.$dirty && !$v.name.minLength"
        >
          Поле Фио должно быть не менее {{ $v.name.$params.minLength.min }} символов
        </div>
      </div>

      <div class="form-group">
        <label for="">Для международных свидетельств:</label>
        <input type="text" v-model.trim="name_en" name="name_en">
      </div>

      <div class="form-group">
        <label for="">ИНН: (необязательно)</label>
        <input
            type="text"
            v-model.trim="inn"
            name="inn"
            maxlength="16"
            :class="{invalid: ($v.inn.$dirty && !$v.inn.maxLength)}"
        >
        <div
            class="error"
            v-if="$v.inn.$dirty && !$v.inn.maxLength"
        >
          Поле ИНН должно быть не более 16 символов
        </div>
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

      <button type="submit" class="btn-orange submit-form">Зарегестрироваться</button>
    </form>
  </div>
</template>

<script>
import {email, required, minLength, maxLength} from 'vuelidate/lib/validators'
import Transliteration from "../../mixins/Transliteration";
import {mapActions} from "vuex";
import router from "../../router";

export default {
  name: "SignUpForm",
  data() {
    return {
      recaptcha: false,
      authError: false,
      errorText: '',
      name:'',
      email:'',
      password:'',
      name_en:'',
      inn:''
    }
  },
  props:['sitekey'],
  mixins: [Transliteration],
  validations: {
    email:{email, required},
    password:{required, minLength: minLength(6)},
    name:{required, minLength:minLength(10)},
    inn:{maxLength: maxLength(16)}
  },
  methods: {
    ...mapActions(['registerUserAction']),
    submitRegister(event) {
      let captcha = event.target['g-recaptcha-response'].value;
      if (this.$v.$invalid || !captcha) {
        this.recaptcha = true
        this.$v.$touch()
        return
      } else {
        let register = {
          username_local: this.name,
          username_english: this.name_en,
          email: this.email,
          password: this.password,
          inn: this.inn,
          captcha: captcha
        }
        this.recaptcha = false
        this.registerUserAction(register).then((res) => {
          if (res === 200) {
            this.$store.state.isAuth = false;
            router.push('/')
          } else {
            this.authError = true
            let response = JSON.parse(res.data)
            for (let item in response) {
              this.errorText = response[item][0];
            }
          }
        }).catch((error) => {
          console.log(error, 'error')
        })
      }
    },
    getTransliteration(e) {
      this.name_en = this.transliteration(e.target.value)
    }
  }
}
</script>

<style>
.submit-form {
  margin-bottom: 10px !important;
}
</style>
