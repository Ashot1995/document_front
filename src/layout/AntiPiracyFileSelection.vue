<template>
  <article>
    <div class="content">
      <notification/>

      <section class="main-app-block" v-for="Point in $store.state.ClientStoragesModule.Points">
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
        </div>
        <div class="auto_add_new_file">
          <div class="custom-radio-form-group">
            <input type="checkbox" name="auto_add_new_file" id="add-new-file" class="custom-radio">
            <label for="add-new-file">Автоматически добавлять новые файлы</label>
          </div>
        </div>

        <div class="files">
          <depositing-files
              v-for="file in $store.state.FilesForAntiPiracy.FilesForAntiPiracyRepositories"
              :file="file"
              :control-type=2
          />
        </div>
      </section>

      <section class="main-app-block">
        <div class="main-app-block__header">
          <img :src="repo_logo" class="logo_repository">
          <div class="title">
            Хранилище iReg
          </div>
        </div>

        <div class="files">
            <depositing-files
              v-for="file in $store.state.FilesForAntiPiracy.FilesForAntiPiracyMainRepository"
              :file="file"
              :control-type=2
            />
        </div>
      </section>

      <section class="transfer_defense">
        <div class="count_files">
          Выбрано файлов - {{ $store.state.FilesForAntiPiracy.FilesOnAntiPiracy.length }}
        </div>
      </section>
    </div>
  </article>
</template>

<script>
import repo_logo from '../assets/icons/main-reposiory-logo.svg'
import copy from "../assets/icons/copy.svg";
import Notification from "../components/UI/Notification";
import {mapActions} from 'vuex'
import ExtensionIcon from "../components/icons/extensionIcons/ExtensionIcon";
import DepositingFiles from "../components/main_block_app/depositing/DepositingFiles";
import MyImageRepositoryLogo from "../components/UI/image/MyImageRepositoryLogo";

export default {
  name: "AntiPiracyFileSelection",
  components: {
    DepositingFiles,
    Notification, ExtensionIcon,
    MyImageRepositoryLogo
  },
  data: function () {
    return {
      repo_logo:repo_logo,
      copy: copy
    }
  },
  beforeMount() {
    this.fetchGetFiles()
    this.onloadClientRepositories()
    this.onloadClientRepositoryFiles()
    this.GetFiles()
  },
  methods: {
    ...mapActions({
      fetchGetFiles:'MainRepositoryModule/fetchGetFiles',
      FilesForAntiPiracyCollector: 'FilesForAntiPiracy/FilesForAntiPiracyCollector',
      onloadClientRepositoryFiles: 'ClientStorageFilesModule/onloadClientRepositoryFiles',
      onloadClientRepositories: 'ClientStoragesModule/onloadClientRepositories'
    }),
    GetFiles() {
      setTimeout(this.FilesForAntiPiracyCollector, 100)
    },
  }
}
</script>

<style scoped lang="scss">

  .auto_add_new_file {
    min-height: 60px;
    display: flex;
    align-items:center;
    padding: 20px 50px;
    border: 2px solid var(--border_block);
    box-sizing: border-box;
    border-radius: 20px;
    margin-bottom: 15px;
    &:hover {
      border: 2px solid var(--border_block-hover);
    }

  }

  section.transfer_defense {
    display: flex;
    align-items: center;
    padding-top: 3px;
    width: 100%;
    justify-content: end;
    margin-bottom: 40px;
    .count_files {
      font-family: var(--ff_regular);
      font-size: 22px;
      line-height: 21px;
      color: var(--text_gray_color);
      margin-right: 20px;
    }
    //button {
    //  height: 40px;
    //  max-width: 245px;
    //  width: 100%;
    //  font-family: var(--ff_medium);
    //  font-weight: 500;
    //  font-size: 16px;
    //  line-height: 21px;
    //}
  }
</style>
