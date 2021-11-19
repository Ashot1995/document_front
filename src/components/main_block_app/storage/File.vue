<template>
  <div class="repository-files__item">
    <div class="logo" @mouseover="fillOpacity = 1" @mouseleave="fillOpacity = 0.6">
      <div class="file-control">
        <div class="file-control__ru point">
          <img :src="file_control_ru">
        </div>
        <div class="file-control__en point">
          <img :src="file_control_en">
        </div>
        <div
            class="file-control__close point"
            @click="removeFile"
        >
          <img :src="file_control_close">
        </div>
        <div class="file-control__additionally point">
          <img :src="file_control_additionally">
        </div>
      </div>
      <extension-icon
        :iconType="file.extension"
        :size="'big'"
        class="logo-icon"
        :fillOpacity="fillOpacity"
      />
      <div class="name-edit" @click="editName"></div>
    </div>
    <div class="name">
      <p contenteditable="true" ref="name">{{ file.filename }}</p>
    </div>
  </div>
</template>

<script>
import file_control_ru from "./../../../assets/icons/file-control-ru.svg";
import file_control_en from "./../../../assets/icons/file-control-en.svg";
import file_control_close from "./../../../assets/icons/file-control-close.svg";
import file_control_additionally from "./../../../assets/icons/file-control-additionally.svg";
import edit from "../../../assets/icons/edit.svg";
import {mapMutations, mapActions} from 'vuex'
import ExtensionIcon from "../../icons/extensionIcons/ExtensionIcon";

export default {
  name: "File",
  components: {ExtensionIcon},
  props: {
    file: {
      type: Object
    }
  },
  data() {
    return {
      file_control_ru: file_control_ru,
      file_control_en: file_control_en,
      file_control_close: file_control_close,
      file_control_additionally: file_control_additionally,
      edit: edit,
      fillOpacity:0.6
    }
  },
  methods: {
    editName() {
      this.$nextTick(()=>{
        this.$refs.name.focus()
      });
    },
    ...mapMutations({
      setFileToRemove:"MainRepositoryModule/setFileToRemove"
    }),
    ...mapActions({
      showPopup: "PopupModule/showPopup"
    }),
    removeFile() {
      this.setFileToRemove(this.file)
      this.showPopup('file-remove')
    }
  }
}
</script>

<style lang="scss">

.file-control {
  .point {
    z-index: 4;
  }
}
.name-edit {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
}
.name {
  p {
    max-width: 130px;
  }
}
.logo{
  position: relative;
  cursor: pointer;
  background-position: 50%;
  background-repeat: no-repeat;
  &-icon {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  &:hover {
    .other-extension {
      p {
        color: var(--control-point-hover);
      }
    }
    &-icon {
      path {
        fill-opacity: 1 !important;
      }
    }
  }
}
</style>
