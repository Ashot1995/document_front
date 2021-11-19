<template>
  <div class="main-app-block__header">
    <my-image-repository-logo
      :type="Point.logoType"
    />
    <div class="link">
      <p>/deponirovanie</p>
      <div class="link__copy">
        <img :src="copy">
      </div>
    </div>
    <div v-if="Point.stateId === 1" class="button">
      <button class="btn-orange">ВЫБРАТЬ ТАРИФ</button>
    </div>
    <div v-if="Point.stateId === 2" class="button">
      <button class="btn-premium">Premium <p>(изменить)</p></button>
    </div>
    <div class="control">
      <div class="icon play"
         @click="play_active = true; pause_active = false; remove_active = false"
        :class="{'play-active' : play_active}"
      >
        <icon-play/>
      </div>
      <div class="icon pause"
         @click="pause_active = true; remove_active = false; play_active = false"
       :class="{'pause-active' : pause_active}"
      >
        <icon-pause/>
      </div>
      <div class="icon close"
         @click="removePoint"
        :class="{'close-active' : remove_active}"
      >
        <icon-close/>
      </div>
    </div>
  </div>
</template>

<script>
import IconPlay from "../../icons/controls/IconPlay";
import IconPause from "../../icons/controls/IconPause";
import IconClose from "../../icons/controls/IconClose";

import {mapMutations, mapActions} from 'vuex'
import MyImageRepositoryLogo from "../../UI/image/MyImageRepositoryLogo";


export default {
  name: "MainBlockHeader",
  components: {
    MyImageRepositoryLogo,
    IconPlay,IconPause,IconClose
  },
  data: function () {
    return {
      play_active: false,
      pause_active: false,
      remove_active: false,
    }
  },
  props: {
    Point: {
      type:Object
    }
  },
  methods: {
    ...mapMutations({
      setPointToRemove:"ClientStoragesModule/setPointToRemove"
    }),
    ...mapActions({
      showPopup: "PopupModule/showPopup"
    }),
    removePoint() {
      this.setPointToRemove(this.Point)
      this.showPopup('point-remove')
    }
  }
}
</script>

<style lang="scss">

.main-app-block__header {
  .title {
    font-size: 22px;
    line-height: 21px;
    color: var(--text_gray_color);
    max-width: 430px;
    width: 100%;
    font-family: var(--ff_regular);
  }

  .button {
    margin-right: 10px;
    button {
      width: 130px;
    }
  }

  .add_file {
    .file {
      .input-data {
        background-image: url('../../../assets/icons/file-add.svg');
        &:hover {
          background-image: url('../../../assets/icons/file-add-hover.svg');
        }
      }
    }
  }
}
</style>
