<template>
  <div class="input-title item">
    <input type="text" ref="input" v-model.trim="Model.name_en">
  </div>
</template>

<script>
export default {
  name: "InputDataOwnerEn",
  props: {
    Model:{
      type: Object,
    }
  }
}
</script>

<style scoped lang="scss">
  .item {
    input {
      background-color: transparent !important;
      font-size: 16px;
      line-height: 21px;
      color: var(--text_gray_color);
      display: block;
      font-family: var(--ff_regular);
    }
  }
</style>
