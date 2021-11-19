<template>
  <div id="app">
    <div class="main">
      <mobile-control-sidebar
          @toggleSidebar="showSidebar"
      />
      <Sidebar
          v-if="this.$route.path !== '/signup'"
      />
      <router-view/>

      <popup
          :show.sync="$store.state.PopupModule.dialogVisibleShow"
      >

        <transition name="bounce">
          <specify-mail-popup
              v-if="$store.state.PopupModule.dialogVisibleType === 'mail'"
          />
          <access-popup
              v-else-if="$store.state.PopupModule.dialogVisibleType === 'access'"
          />
          <file-remove
              v-else-if="$store.state.PopupModule.dialogVisibleType === 'file-remove'"
          />
          <point-remove
              v-else-if="$store.state.PopupModule.dialogVisibleType === 'point-remove'"
          />
          <warning-popup
              v-else-if="$store.state.PopupModule.dialogVisibleType === 'warning'"
          />

        </transition>
      </popup>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/SideBar";
import MobileControlSidebar from "./components/UI/MobileControlSidebar";
import AccessPopup from "./components/popups/AccessPopup";
import SpecifyMailPopup from "./components/popups/SpecifyMailPopup";
import WarningPopup from "./components/popups/WarningPopup";
import Popup from "./components/popups/Popup";
import FileRemove from "./components/popups/FileRemove";
import PointRemove from "./components/popups/PointRemove";

export default {
  name: "app",
  components: {
    MobileControlSidebar,
    Sidebar,
    AccessPopup,
    SpecifyMailPopup,
    WarningPopup,
    Popup,
    FileRemove,
    PointRemove
  },
  methods: {
    showSidebar() {
      document.querySelector('aside').classList.toggle('aside-show')
      document.querySelector('article').classList.toggle('article-hide')
      document.querySelector('.control-sidebar').classList.toggle('control-sidebar-active')
    }
  }
}
</script>

<style lang="scss">
@import "./assets/styles/reset";
@import "./assets/styles/fonts";
@import "./assets/styles/const";
@import "./assets/styles/buttons";
@import "./assets/styles/custom-radio-form-group";
@import "./assets/styles/transition-group";

* {
  font-family: var(--ff_regular);
}

.error {
  color: red;
  font-size: 12px;
  margin-left: 10px;
}

main {
  background-color: var(--main_bg_content);
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;

  article {
    width: 100%;
    margin-left: 300px;

    .content {
      min-height: 100vh;
      max-width: 880px;
      width: 100%;
      margin: 0 auto;
      padding: 15px 0;
      box-sizing: border-box;
    }

    .content-account {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .article-hide {
    display: none !important;
  }
}


</style>
