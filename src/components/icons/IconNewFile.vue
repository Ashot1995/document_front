<template>
  <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 45.2486H14.4724H90M44.7739 90V0" stroke="#8D8D8D" stroke-opacity="0.6" stroke-width="6"/>
  </svg>
</template>

<script>
export default {
  name: "IconNewFile"
}
</script>

<style scoped lang="scss">
  svg {
    position: absolute;
    z-index: 5;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    padding: 30px;
    &:hover {
      path {
        stroke-opacity: 1;
      }
    }
  }
</style>
