<template>
    <section class="auth account-setting">
      <div class="auth__form">
        <form action="" @submit.prevent="submitUpdate">
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
                :value="email"
                disabled
            >
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

          <button type="submit" class="btn-orange submit-form">Сменить пароль</button>
        </form>
      </div>
    </section>
</template>

<script>
import {required, minLength, maxLength} from 'vuelidate/lib/validators'
import Transliteration from "../mixins/Transliteration";

export default {
  name: "AccountSetting",
  beforeMount() {
    this.initData()
  },
  data() {
    return {
      name:'',
      email:'',
      password:'',
      name_en:'',
      inn:''
    }
  },
  mixins: [Transliteration],
  validations: {
    password:{required, minLength: minLength(6)},
    name:{required, minLength:minLength(10)},
    inn:{maxLength: maxLength(16)}
  },
  methods: {
    getTransliteration(e) {
      this.name_en = this.transliteration(e.target.value)
    },
    initData() {
      setTimeout(
          () => {
            let user = JSON.parse(localStorage.getItem('user'))
            this.name = user.username_local
            this.email = user.email
            this.password = user.password
            this.name_en = user.username_english
            this.inn = user.legal_profile
          }
          ,100
      )
    },
    submitUpdate() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      } else {
        alert('validate true')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
section.auth {
  margin: auto;
  max-width: 360px;
  width: 100%;
  background: var(--white);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  padding: 22px 0 0;
  display: flex;
  flex-direction: column;
  .auth__form {
    flex: 1 0 auto;
    form {
      .form-group {
        display: flex;
        flex-direction: column;
        padding: 0 15px;
        margin-bottom: 15px;
      label {
        font-size: 12px;
        line-height: 18px;
        color: var(--text_gray_color);
        padding-left: 20px;
        font-family: var(--ff_regular);
      }
      input {
        background: var(--light_white);
        box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.05);
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
      &__name {
      input {
        margin-bottom: 5px;
      }
      }
      }
      .recaptcha {
        margin: 40px 15px;
        height: 79px;
        display: flex;
        padding: 0 15px;
        align-items: center;
        background-color: #F9F9F9;
        border: 2px solid #E0E0E0;
      }
    }
  }
}

section.account-setting {
  padding: 0;
  background-color: transparent;
  .form-group {
    padding: 0 !important;
  }
  .change {
    padding: 12px 28px;
    font-family: var(--ff_medium);
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    margin-top: -5px;
  }
  .submit-form {
    margin-top: 50px !important;
    margin-bottom: 10px !important;
  }
}
</style>
