<template>
  <div class="control-sidebar" @click="$emit('toggleSidebar')">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "MobileControlSidebar"
}
</script>

<style scoped lang="scss">
  .control-sidebar {
    z-index: 10;
    display: none;
    position: fixed;
    width: 82px;
    height: 82px;
    border-radius: 50%;
    bottom: -12px;
    left: -12px;
    background-color: #0C1841;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media screen and (max-width: 992px) {
      display: flex;
    }
    .line {
      background-color: #fff;
      width: 36px;
      height: 2px;
      display: block;
      margin-bottom: 10px;
      transition: .5s;
      position: relative;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &-active {
      background-color: var(--white);
      .line {
        background-color: #0C1841;
        display: none;
        &:first-child {
          display: block;
          transition: .5s;
          transform: rotate(45deg);
          top: 5px;
        }
        &:last-child {
          display: block;
          transition: .5s;
          transform: rotate(-45deg);
          bottom: 6px;
        }
      }
    }
  }
</style>