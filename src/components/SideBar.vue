<template>

  <aside>
    <div class="aside">
      <div class="aside__links">
        <router-link
            to="/"
            :class="{'active' : this.$route.path === '/'}"
        >
          Депонирование
        </router-link>
        <a
            class="js-antipiracy"
            :class="{'active' : (this.$route.path === '/ap-file-selection') || (this.$route.path === '/ap-result') || (this.$route.path === '/documents')}"
            @click="showSublinksToggle"
        >
          Антипиратство
        </a>
        <div
            class="aside__links__sublinks"
            v-show="this.showSublinks"
            style="display: none"
        >
          <router-link
              to="/ap-file-selection"
              :class="{'active' : this.$route.path === '/ap-file-selection'}"
          >
            выбор файла
          </router-link>
          <router-link
              to="/ap-result"
              :class="{'active' : this.$route.path === '/ap-result'}"
          >
            результаты
          </router-link>
          <router-link
              to="/documents"
              :class="{'active' : this.$route.path === '/documents'}"
          >
            документы
          </router-link>
        </div>

        <router-link
            to="/signup"
            v-if="$store.state.isAuth"
        >
          Регистрация
        </router-link>
        <a href="javascript:void(0)"
           v-if="!$store.state.isAuth"
           @click="logout">выйти</a>
      </div>
      <div class="aside__links">
        <router-link
            to="/account"
            :class="{'active' : this.$route.path === '/account'}"
        >
          Аккаунт
        </router-link>
        <router-link
            to="/subscriptions-management"
            :class="{'active' : this.$route.path === '/subscriptions-management'}"
        >
          Управление подписками
        </router-link>
        <router-link
            to="/integration"
            :class="{'active' : this.$route.path === '/integration'}"
        >
          Интеграция 1С
        </router-link>
      </div>
    </div>
  </aside>

</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'Sidebar',
  data() {
    return {
      showSublinks:false
    }
  },
  beforeMount() {
    this.checkShowSublinks()
  },
  methods: {
    ...mapActions(['logoutUserAction']),
    logout() {
      this.logoutUserAction({token: this.$store.state.Auth.token}).then((res) => {
        this.$store.state.isAuth = true;
        const allCookies = document.cookie.split(';')
        for (let i = 0; i < allCookies.length; i++) {
          document.cookie = allCookies[i] + '=;expires=' +
              new Date(0).toUTCString()
        }
        router.push('/signup')
      })
    },
    checkShowSublinks() {
      if ((this.$route.path === '/ap-file-selection') || (this.$route.path === '/ap-result') || (this.$route.path === '/documents')) {
        this.showSublinks = true
      }
    },
    showSublinksToggle(e) {
      this.showSublinks = !this.showSublinks
      if (this.showSublinks === false) {
        e.target.classList.remove('active')
        e.target.classList.remove('aside__links__sublinks-active')
      } else {
        e.target.classList.add('active')
        e.target.classList.add('aside__links__sublinks-active')
      }
    }
  }
}
</script>

<style lang="scss">

aside {
  max-width: 300px;
  width: 100%;
  height: 100vh;
  position: fixed;
  @media screen and (max-width: 992px) {
    position: relative;
    left: -100%;
    display: none !important;
  }
  .aside {
    display: flex;
    background-color: var(--aside_main_color);
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 25px 30px;
    box-sizing:border-box;
    &__links {
      display: flex;
      flex-direction: column;
      a {
        color: rgba(255, 255, 255, 0.9);
        margin-top: 15px;
        margin-bottom: 15px;
        position: relative;
        display: inline-block;
        width: fit-content;
        font-family: var(--ff_regular);
        font-size: 16px;
        line-height: 21px;
        cursor:pointer;
        &:hover {
          color: rgba(255, 255, 255, 1);
        }
      }
      .active {
        color: rgba(255, 255, 255, 1);
        &::after {
          transition: .3s;
          width: 100%;
          height: 1px;
          position: absolute;
          bottom: -1px;
          left: 0;
          background-color: white;
          content: '';
        }
      }
      &__sublinks {
        flex-direction: column;
        margin-top: -15px;
        margin-left: 20px;
        //display:none;
        display:flex;
        &-active {
          display: flex !important;
        }
        a {
          margin-bottom: 0;
          margin-top: 10px;
        }
      }
    }
    &__popups {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .hint {
        color: var(--white);
      }
      button {
        margin-top: 10px;
      }
    }
  }
}


.aside-show {
  @media screen and (max-width: 992px) {
    left: 0;
    display: block !important;
    max-width: 992px;
    width: 100%;
    .aside {
      padding: 30px 0 30px 90px;
    }
  }
}

</style>