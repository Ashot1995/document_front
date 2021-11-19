<template>
    <article>
      <div class="content">
        <repositories/>
        <transition-group name="point-list">
          <depositing
              v-for="Point in $store.state.ClientStoragesModule.Points"
              :Point="Point"
              :key="Point.id"
          />
        </transition-group>
        <storage
            @showBlockNewFile="showBlockNewFile"
            :Files="$store.state.MainRepositoryModule.Files"
            :count_files="$store.state.MainRepositoryModule.Files.length"
        />

        <new-file
            v-if="showComponentNewFile"
        />
      </div>
    </article>
</template>

<script>
import Repositories from "../components/main_block_app/Repositories";
import NewFile from "../components/main_block_app/NewFile";
import Storage from "../components/main_block_app/Storage";
import Depositing from "../components/main_block_app/depositing/Depositing";

import {mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
    Repositories,
    NewFile,
    Storage,
    Depositing
  },
  beforeMount() {
    this.onloadClientRepositories()
    this.fetchGetFiles()
  },
  methods: {
    showBlockNewFile() {
      this.showComponentNewFile = !this.showComponentNewFile
    },
    ...mapActions({
      onloadClientRepositories: 'ClientStoragesModule/onloadClientRepositories',
      fetchGetFiles: 'MainRepositoryModule/fetchGetFiles'
    })
  },
  data() {
    return {
      showComponentNewFile: false,
    }
  }
}
</script>
<style lang="scss">

.main {
  background-color: var(--main_bg_content);
	min-height: 100vh;
	width:100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	article {
		width: 100%;
		margin-left: 300px;
    @media screen and (max-width: 992px) {
      margin-left: 0;
      padding-left: 15px;
      padding-right: 15px;
      box-sizing: border-box;
    }
		.content {
			min-height: 100vh;
			max-width: 880px;
			width: 100%;
			margin: 0 auto;
			padding: 15px 0;
      box-sizing:border-box;
		}
	}
  .article-hide {
    display: none !important;
  }
}

.description-point__en {
  .list-companies {
    input {
      font-size: 16px;
      width: 340px !important;
      line-height: 21px;
      color: #8D8D8D;
      display: block;
      font-family: var(--ff_regular);
      margin-left: 15px;
      margin-top: 5px;
      border: 1px solid rgba(60, 60, 60, 0.26);
      border-radius: 4px;
      height: 30px;
    }
  }
}

.file-description-disable .file-description__point  {
  .items {
    .item {
      pointer-events: none;
      .js-remove-item {
        display: none !important;
      }
      input {
        pointer-events: none;
      }
    }
  }
  &.description-point__en {
    pointer-events: none;
  }
  .list-owner, .list-company {
    pointer-events: none;


    .owner-item, .company-item {
      span {
        display: none !important;
      }
    }
  }
}

.file-description__point .list-owner {
  position: relative;
  div.owner-item:first-child {
    input {
      margin-top: 0;
    }
  }
  div.owner-item:last-child {
    span {
      display: inherit;
    }
  }
}

.file-description__point .list-company {

  .company-disabled {
    .input-select-company {
      pointer-events: none;

      .vs__dropdown-toggle {
        border: none;
      }
    }
  }

  div.company-item:last-child {
    span {
      display: inherit;
    }
  }
}

section.main-app-block {
  background: var(--white);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  border-radius: 30px;
  padding: 15px 15px 20px 15px;
  position: relative;
  margin-bottom: 20px;
  .setting-depositing {
    background: var(--light_white);
    transition: background 1s ease;
    max-height: 100%;
    //transition: max-height 3s;
  }
  .file-description {
    border: 2px solid var(--btn_edit_border);
    max-height: 100%;
    transition: .5s;
    &-disable {
      background: var(--light_white);
      border: none;
    }
    &__point {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 4px;
      &-item {
        width: 45%;
      }
      .items {
        .item {
          display: flex;
          align-items: center;
          .js-remove-item {
            display: inline-flex;
            width: 8px;
            height: 8px;
            color: var(--text_add);
            transform: rotate(45deg);
            position: relative;
            top: -1px;
            font-size: 14px;
            cursor: pointer;

            &:hover {
              color: var(--text_add-hover);
            }
          }
        }
      }
      &:last-child {
        margin-bottom: 0 !important;
      }
      .title {
        font-size: 12px;
        line-height: 21px;
        color: var(--text_gray_color);
        font-family: var(--ff_regular);
      }
      select {
        background-color: transparent;
        font-size: 16px;
        line-height: 21px;
        color: var(--text_gray_color);
        font-family: var(--ff_regular);
      }
      p {
        font-size: 16px;
        line-height: 21px;
        color: var(--text_gray_color);
        display: block;
        font-family: var(--ff_regular);
      }
      .add {
        display: flex;
        width: 100%;
        align-items:center;
        justify-content: space-between;
        margin-bottom: 20px;
        &__point {
          cursor: pointer;
          color: var(--text_add);
          font-family: var(--ff_regular);
          font-size: 12px;
          line-height: 21px;
          &:hover {
            color: var(--text_add-hover);
          }
        }

      }
      .js-owners-en, .js-authors-en {
        p {
          padding-left: 4px;
        }
      }
    }
    .save {
      position: absolute;
      right: 10px;
      bottom: 9px;
      height: 30px;
      width: 130px;
      cursor: pointer;
    }
  }
}
</style>
