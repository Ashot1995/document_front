<template>
  <div class="popup__body">
    <div class="title">Вы уверены, что хотите удалить хранилище?</div>
    <div class="control-buttons">
      <button class="btn-edit_border" @click="removePoint(false)">Отменить</button>
      <button class="btn-orange" @click="removePoint(true)">Удалить</button>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapActions} from 'vuex'
export default {
  name: "PointRemove",
  methods: {
    ...mapMutations({
      mapRemovePoint: 'ClientStoragesModule/removePoint'
    }),
    ...mapActions({
      mapHidePopup: 'PopupModule/hidePopup'
    }),
    removePoint(arg) {
      this.mapRemovePoint(arg)
      this.mapHidePopup()
    }
  }
}
</script>
