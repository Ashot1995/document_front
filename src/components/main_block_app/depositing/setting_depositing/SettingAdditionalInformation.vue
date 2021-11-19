<template>
  <div class="file-description__point-item">
    <div class="title">Дополнительная информация <span class="hint" title="Подсказка">?</span></div>
    <input type="text" :value="AdditionalInformation" @input="UpdateData" :disabled="savedDepon">
  </div>
</template>

<script>
export default {
  name: "SettingAdditionalInformation",
  props: {
    savedDepon: {
      type:Boolean
    },
    AdditionalInformation: {
      type:String
    }
  },
  methods: {
    UpdateData(e) {
      this.$emit('UpdateAdditionalInformation', e.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
  .title {
    position: relative;
    .hint {
      height: 10px;
      width: 10px;
      border-radius: 50%;
      color: var(--white);
      font-size: 8px;
      line-height: 18px;
      background: #8D8D8D;
      top: -5px;
      right: -1px;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
      font-family: var(--ff_regular);
      cursor:pointer;
    }
  }
  input {
    background-color: transparent;
    border-radius: 20px;
    height: 40px;
    padding: 12px;
    box-sizing: border-box;
    color: var(--text_gray_color);
    border: 1px solid var(--btn_edit_border);
    outline: none;
    &:focus {
       border: 1px solid var(--aside_main_color);
     }
  }
</style>
