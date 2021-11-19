<template>
  <section class="main-app-block">
    <div class="main-app-block__header">
      <img :src="main_reposiory_logo" class="logo_repository">
      <div class="title">
        Хранилище
      </div>
      <div class="button">
        <button class="btn-orange">ОПЛАТИТЬ</button>
      </div>
      <div class="count_files">
        Доступно файлов: <span>{{ count_files }}</span>
      </div>
    </div>

    <div class="repository-files">
      <file
          v-for="file in Files"
          :file="file"
          :key="file.id"
      />
      <div class="repository-files__item">
        <div class="logo" @click="$emit('showBlockNewFile')">
          <icon-new-file class="add_new_file_toggle"/>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import main_reposiory_logo from '../../assets/icons/main-reposiory-logo.svg'
import File from "./storage/File";
import IconNewFile from "../icons/IconNewFile";


export default {
  name: "Storage",
  components: {IconNewFile, File},
  data() {
    return {
      main_reposiory_logo: main_reposiory_logo,
    }
  },
  props: {
    Files: {
      type:Array
    },
    count_files: {
      type:Number
    },
  }
}
</script>

<style lang="scss">

.repository-files {
  display: flex;
  align-items: flex-start;
  gap:25px;
  flex-wrap: wrap;
  &__item {
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-bottom: 15px;
    margin-right: 0;
    position: relative;
    .logo {
      position: relative;
      width: 150px;
      height: 150px;
      background-color: var(--light_white);
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
      border-radius: 20px;
      margin-bottom: 8px;
      //&:hover {
      //  .file-control {
      //    display: block;
      //  }
      //}
      .file-extension {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto auto;
        width: 50px;
        height: 50px;
      }
      .file-control {
        //display: none;
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        .point {
          position: absolute;
          background: var(--control-point);
          cursor: pointer;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          &:hover {
            background: var(--control-point-hover);
          }
        }
        &__ru {
          left: 0;
          top: 0;
          border-top-left-radius: 20px;
          border-bottom-right-radius: 20px;
        }
        &__en {
          bottom: 0;
          left: 0;
          border-bottom-left-radius: 20px;
          border-top-right-radius: 20px;
        }
        &__close {
          top: 0;
          right: 0;
          border-bottom-left-radius: 20px;
          border-top-right-radius: 20px;
        }
        &__additionally {
          bottom: 0;
          right: 0;
          border-bottom-right-radius: 20px;
          border-top-left-radius: 20px;
        }
      }
      &-add {
        position: relative;
        cursor: pointer;
        input[type="file"] {
          cursor: pointer;
          opacity: 0;
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    }
    .name {
      display: flex;
      align-items: center;
      font-size: 16px;
      line-height: 16px;
      color: var(--gray);
      font-family: var(--ff_regular);
      .edit {
        margin-left: 3px;
        cursor: pointer;
      }
    }
  }
}
</style>
