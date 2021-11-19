<template>
  <div class="files__point">
    <div class="extension" @mouseover="fillOpacity = 1" @mouseleave="fillOpacity = 0.6">
      <extension-icon
        :iconType="file.extension"
        class="extension-icon"
        :fillOpacity="fillOpacity"
      />
    </div>

    <div class="link">
      <div class="way">
        <span>{{ file.directories }}</span>
        <p contenteditable="true" v-model="file.filename">{{ file.filename }}</p>
      </div>
      <div class="link__copy">
        <img :src="copy">
      </div>
    </div>

    <div class="controls" v-if="controlType === 1">
      <div class="controls__item ru">
        <icon-ru/>
      </div>
      <div class="controls__item en">
        <icon-en/>
      </div>

      <div class="controls__item additionally" @click="toggleAdditionaly">
        <icon-additionally/>
      </div>
      <div class="additionally__js" v-if="show_additionaly">
        <p>изменить данные свидетельств</p>
        <p>передать права</p>
      </div>
    </div>

    <div class="controls" v-else-if="controlType === 2">

      <div
          class="controls__item onion"
          :class="{'onion-active' : file.onAntipiracy}"
          @click="addFile"
          @mouseover="onionColor = '#FFFFFF'" @mouseleave="onionColor = '#8D8D8D'"
      >
        <icon-onion :color="onionColor"/>
      </div>
    </div>
  </div>
</template>

<script>
import copy from "../../../assets/icons/copy.svg";
import ExtensionIcon from "../../icons/extensionIcons/ExtensionIcon";
import IconRu from "../../icons/controls/IconRu";
import IconEn from "../../icons/controls/IconEn";
import IconAdditionally from "../../icons/controls/IconAdditionally";
import {mapMutations, mapActions} from 'vuex'
import IconOnion from "../../icons/controls/IconOnion";


export default {
  name: "DepositingFiles",
  components: {IconOnion, IconAdditionally, IconEn, IconRu, ExtensionIcon},
  props: {
    file: {
      type: Object
    },
    controlType: {
      type:Number,
      default: 1
    }
  },
  data() {
    return {
      copy:copy,
      show_additionaly:false,
      fillOpacity:0.6,
      onionColor:'#8D8D8D',
      fileAddedToAntiPiracy: false
    }
  },
  methods: {
    ...mapMutations({
      addFileOnAntiPiracy:'FilesForAntiPiracy/addFileOnAntiPiracy',
      updateData: 'FilesForAntiPiracy/updateData'
    }),
    ...mapActions({
      showPopup:'PopupModule/showPopup'
    }),
    toggleAdditionaly() {
      this.show_additionaly = !this.show_additionaly
    },
    addFile() {
      if (!this.file.onAntipiracy) {
        this.addFileOnAntiPiracy(this.file)
        this.showPopup('warning')
      } else {
        this.addFileOnAntiPiracy(this.file)
        this.updateData(false)
      }
    }
  }
}
</script>

<style lang="scss">

.files__point {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 2px;
  margin-bottom: 2px;
  .extension {
    border: 2px solid var(--btn_edit_border);
    background-repeat: no-repeat;
    background-position: 50%;
    position: relative;
    &-icon {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      margin: auto;
    }
    &:hover {
      border: 2px solid var(--btn_edit_border-hover);
      &-icon {
        .extension-icon {
          fill: red !important;
        }
        svg {
          path {
          }
        }
      }
    }
  }


  .link {
    .way {
      display: inline-flex;
      align-items: center;
      p {
        font-size: 16px;
        line-height: 16px;
        font-family: var(--ff_regular);
        color: var(--gray);
      }
      span {
        font-size: 16px;
        line-height: 21px;
        color: var(--text_gray_color);
        font-family: var(--ff_regular);
      }
    }
  }



}


.controls {
  position: relative;
  &__item {
    position: relative;
  }
  .onion {
    display: flex;
    align-items: center;
    justify-content: center;
    &-active {
      svg {
        path {
          stroke:#ffffff !important;
        }
      }
    }
  }
  .additionally__js {
    display: block !important;
    position: absolute;
    right: 0;
    bottom: 30px;
    padding: 0 10px;
    background: var(--white);
    border-radius: 10px;
    width: 220px;
    z-index: 10;
    p {
      margin-top: 9px;
      margin-bottom: 9px;
      font-size: 13px;
      line-height: 15px;
      color: var(--black);
      font-family: var(--ff_regular);
      cursor: pointer;
    }
  }
}


</style>
