<template>
  <section class="repositorys" :class="{'repositorys-crutch' : $store.state.ThirdPartyStoragesModule.showMore}">
    <transition-group name="list" class="boxes">

      <button
          class="repository"
          v-for="box in $store.getters['ThirdPartyStoragesModule/getComputedRepositories']"
          :key="box.id"
          @click="addRepositoryClient(box.name)"
      >
        <img :src="require(`@/assets/images/${box.filename}`)" :alt="box.name">
      </button>

    </transition-group>

    <button
        class="repository-show-more"
        v-if="!$store.state.ThirdPartyStoragesModule.showMore"
        @click="showMoreBox"
    >
      Ещё >
    </button>
  </section>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'

export default {
  name: "Repositories",
  beforeMount() {
    this.fetchRepositories()
  },
  methods: {
    ...mapActions({
      showMoreBox: 'ThirdPartyStoragesModule/showMoreBox',
      fetchRepositories: 'ThirdPartyStoragesModule/fetchRepositories',
      showPopup: 'PopupModule/showPopup'
    }),
    ...mapMutations({
      setNewPointType: 'ClientStoragesModule/setNewPointType'
    }),
    addRepositoryClient(name) {
      this.showPopup('mail')
      this.setNewPointType(name)
    }
  }
}
</script>

<style scoped lang="scss">
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
    opacity: 0;
    transform: translateX(-30px);
  }
  section.repositorys {
    display: flex;
    align-items: flex-start;
    gap:20px;
    flex-wrap: wrap;
    margin-bottom: 25px;
    height: auto;
    max-height: 130px;
    transition: max-height .5s;
    .boxes {
      display: inline-flex;
      align-items: flex-start;
      gap: 20px;
      flex-wrap: wrap;
    }
    .repository {
      background: var(--white);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
      border-radius: 30px;
      width: 130px;
      height: 130px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease-in-out;
      padding: 20px 10px;
      flex-wrap: wrap;
      img {
        max-width: 80px;
        max-height: 80px;
      }
      &:hover {
        cursor: pointer;
        transform: scale(1.08)
      }
      &-show-more {
        border: 4px solid var(--show_more-border);
        box-sizing: border-box;
        filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.05));
        background-color: transparent;
        border-radius: 30px;
        width: 130px;
        height: 130px;
        font-size: 22px;
        line-height: 16px;
        color: var(--show_more-color);
        font-family: var(--ff_bold);
        cursor:pointer;
      }
    }
}
  .repositorys-crutch {
    max-height: 285px !important;
  }

</style>
