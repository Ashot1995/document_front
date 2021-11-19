<template>
  <div class="type__of__popup" v-if="show">
    <div class="popup__bg" @click.stop="hideDialog"></div>
    <slot></slot>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "Popup",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapActions({
      hideDialog: 'PopupModule/hidePopup'
    })
  }
}
</script>

<style lang="scss">
.type__of__popup {
  display: block;
  .popup__bg {
    z-index: 100;
    background-color: var(--black);
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    opacity: .7;
  }
  .popup__body {
    z-index: 101;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto auto !important;
    background: var(--white);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    border-radius: 30px;
    padding: 15px 30px 20px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    width: 100%;
    height: fit-content;
    .title {
      font-weight: 300;
      font-size: 22px;
      line-height: 30px;
      color: var(--text_gray_color);
      font-family: var(--ff_light);
      margin-bottom: 30px;
      text-align: center;
    }
    .form-group {
      margin-bottom: 25px;
      width: 100%;
      input {
        background: var(--light_white);
        box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.05);
        border-radius: 20px;
        font-size: 16px;
        line-height: 21px;
        color: var(--text_gray_color);
        font-family: var(--ff_regular);
        height: 40px;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
      }
    }
    .mailbox {
      margin-bottom: 60px;
      text-align: center;
      font-weight: 300;
      font-size: 16px;
      line-height: 30px;
      color: var(--text_gray_color);
      font-family: var(--ff_light);
      span {
        font-family: var(--ff_bold);
        font-size: 22px;
        line-height: 30px;
        color: var(--text_gray_color);
      }
    }
    .control-buttons {
      display: flex;
      align-items:center;
      flex-direction: row;
      justify-content: center;
      button {
        font-family: var(--ff_medium);
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        width: 165px;
        height: 40px;
      }
      button:first-child {
        margin-right: 10px;
      }
    }
  }
}
</style>
