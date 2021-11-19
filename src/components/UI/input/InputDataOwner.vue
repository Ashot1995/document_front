<template>
  <div class="input-title item">
    <span
        class="js-remove-item"
        @click="removeModel"
    >
      +
    </span>

    <input type="text" ref="input" @input="getTransliteration" v-on:blur="handleBlur" v-model.trim="Model.name">
  </div>
</template>

<script>
import Transliteration from "../../../mixins/Transliteration";

export default {
  name: "InputDataOwner",
  props: {
    Model: {
      type:Object,
    },
    savedDepon: {
      type:Boolean
    }
  },
  mixins:[Transliteration],
  mounted() {
    this.$nextTick(()=>{
      if (this.savedDepon !== true) {
        this.$refs.input.focus()
      }
    });
  },
  methods: {
    handleBlur(e) {
      if (e.target.value.length < 3) {
        this.removeModel()
      }
    },
    removeModel() {
      this.$emit('remove', this.Model)
    },
    getTransliteration(e) {
      this.Model.name_en = this.transliteration(e.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
.input-title {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

input {
  width: 100%;
  margin-left: 2px;
  font-size: 16px;
  line-height: 21px;
  color: var(--text_gray_color);
  font-family: var(--ff_regular);
  background-color: transparent;
  &::placeholder {
    color: var(--text_gray_color);
  }
}
</style>
