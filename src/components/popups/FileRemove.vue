<template>
  <div class="popup__body">
    <div class="title">Вы уверены, что хотитие удалить файл?</div>
    <div class="control-buttons">
      <button class="btn-edit_border" @click="RemoveFile(false)">Отменить</button>
      <button class="btn-orange" @click="RemoveFile(true)">Удалить</button>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'

export default {
  name: "FileRemove",
  methods: {
    ...mapMutations({
      mapRemoveFile: 'MainRepositoryModule/removeFile'
    }),
    ...mapActions({
      mapHidePopup: 'PopupModule/hidePopup'
    }),
    RemoveFile(arg) {
      this.mapRemoveFile(arg)
      this.mapHidePopup()
    }
  }
}
</script>
