<template>
  <section class="main-app-block">
    <main-block-header
        :Point="Point"
    />

    <setting-depositing
        :stateId = Point.stateId
        :Point = Point
        :allowSave="true"
    />

    <transition name="files">
      <div v-if="showFiles && Point.stateId === 2" class="files">
        <transition-group name="point-list">
          <depositing-files
              v-for="file in $store.state.ClientStorageFilesModule.RepositoryFiles"
              :file="file"
              :key="file.id"
          />
        </transition-group>
      </div>
    </transition>
    <div
        v-if="showFiles && Point.stateId !== 1 && !$store.state.ClientStorageFilesModule.all_files_arrived"
        class="show-more"
        @click="onloadFilesMore"
    >
      Показать еще...
    </div>
    <a
        v-if="!showFiles"
        @click="getFiles"
        href=""
        class="show-files"
    >
      ПОКАЗАТЬ ФАЙЛЫ
    </a>
    <a
        v-if="showFiles"
        @click="hideFiles"
        href=""
        class="show-files"
    >
      СКРЫТЬ ФАЙЛЫ
    </a>
  </section>
</template>

<script>
import MainBlockHeader from "./../main_block_header/MainBlockHeader";
import SettingDepositing from "./setting_depositing/SettingDepositing";
import DepositingFiles from "./DepositingFiles";
import {mapActions} from 'vuex'

export default {
  name: "Depositing",
  components: {
    DepositingFiles,
    SettingDepositing,
    MainBlockHeader,
  },
  props: {
    Point: {
      type:Object
    }
  },
  data() {
    return {
      showFiles: false,
    }
  },
  methods: {
    ...mapActions({
      onloadClientRepositoryFiles: 'ClientStorageFilesModule/onloadClientRepositoryFiles',
      onloadFilesMore: 'ClientStorageFilesModule/onloadFilesMore'
    }),
    getFiles(e) {
      e.preventDefault();
      this.Point.stateId === 2 ? this.showFiles = !this.showFiles : this.showFiles
      this.onloadClientRepositoryFiles()
    },
    hideFiles(e) {
      e.preventDefault();
      this.showFiles = !this.showFiles
    }
  }
}
</script>

<style scoped lang="scss">

.files {
  display: flex;
  flex-direction: column;
}
.show-more {
  cursor:pointer;
}
</style>
