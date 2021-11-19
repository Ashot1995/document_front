<template>
  <div class="popup__body">
    <div class="title">Услуга Антипиратство работает с публичными файлами,  открывая каждый из выбранных файлов в сети интернет.</div>
    <div class="control-buttons">
      <button class="btn-edit_border" @click="answer(false)">Отменить</button>
      <button class="btn-orange" @click="answer(true)">Продолжить</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "WarningPopup",
  methods: {
    ...mapActions({
      hidePopup:'PopupModule/hidePopup',
      listenAnswerForAddFile: 'FilesForAntiPiracy/listenAnswerForAddFile'
    }),
    answer(arg) {
      this.listenAnswerForAddFile(arg)
      this.hidePopup()
    }
  }
}
</script>

<style></style>
