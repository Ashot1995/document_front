<template>
  <div class="popup__body">
    <div class="title">Укажите вашу Google-почту</div>
    <form  @submit.prevent="submitEmail">
      <div class="form-group">
        <input
            type="text"
            ref="input"
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
      <div class="control-buttons">
        <button class="btn-orange" type="submit">
          Продолжить
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {email, required} from 'vuelidate/lib/validators'

export default {
  name: "SpecifyMailPopup",
  data() {
    return {
      email: '',
    }
  },
  validations: {
    email:{email, required},
  },
  mounted() {
    this.$nextTick(()=>{
      this.$refs.input.focus()
    });
  },
  methods: {
    ...mapActions({
      toggleTypePopup: 'PopupModule/toggleTypePopup'
    }),
    submitEmail() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      } else {
        this.toggleTypePopup('access')
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .invalid {
    border: 1px solid red;
  }
  input {
    width: 350px !important;
  }
  .error {
    margin-top: 5px;
    color: red;
    padding: 0 15px;
    font-size: 12px;
  }
</style>
