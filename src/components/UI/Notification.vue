<template>

  <section class="notification">
    <div class="message">Услуга антипиратсво работает с депонироваными файлами. Воспользуйтесь услугой депонирования и каждый из защищенных файлов станет доступен здесь для антипиратства</div>
    <div class="close" @click="hideNotification">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L21 21M1 21L21 1" stroke="#555555" stroke-opacity="0.6" stroke-width="2"/>
      </svg>
    </div>
  </section>

</template>

<script>
export default {
  name: "Notification",
  methods: {
    hideNotification(e) {
      e.target.closest('.notification').style.display = 'none'
    }
  }
}
</script>

<style scoped lang="scss">

section.notification {
  background: var(--bg_notification);
  border-radius:30px;
  padding: 17px 20px 13px 30px;
  position: relative;
  margin-bottom: 15px;
  .message {
    font-weight: 300;
    font-size: 22px;
    line-height: 30px;
    color: var(--gray);
    font-family: var(--ff_light);
    max-width: 780px;
  }
  .close {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    &:hover {
      svg {
        path {
          stroke-opacity:1;
        }
      }
    }
  }
}

</style>