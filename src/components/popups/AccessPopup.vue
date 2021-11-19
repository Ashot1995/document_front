<template>
  <div class="popup__body">
    <div class="title">Дайте доступ сервису депонирование к одной из папок, к которой вы хотели бы применить услугу</div>

    <div class="mailbox">
      Для этого почтового ящика <span>deponirovanie@domain.com</span>
    </div>

    <div class="control-buttons">
      <button class="btn-edit_border">Инструкция</button>
      <button class="btn-orange" @click="hidePopup">Сделаю</button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'
export default {
  name: "AccessPopup",
  methods: {
    ...mapActions({
      mapHidePopup:'PopupModule/hidePopup'
    }),
    ...mapMutations({
      createNewPoint: 'ClientStoragesModule/createNewPoint'
    }),
    hidePopup() {
      this.mapHidePopup()
      this.createNewPoint()
    }
  }
}
</script>

<style></style>
