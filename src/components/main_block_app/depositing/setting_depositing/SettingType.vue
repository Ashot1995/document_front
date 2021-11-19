<template>
  <div class="file-description__point-item">
    <div class="title">Тип: <span class="hint" title="Подсказка">?</span></div>
    <select name="" id="" :disabled="savedDepon">
      <option value="">Не нужен (по умолчанию)</option>
      <option value="">Нужен</option>
      <option value="">Важен</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SettingType",
  props: {
    Type: {
      type: Number
    },
    savedDepon: {
      type:Boolean
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
</style>
