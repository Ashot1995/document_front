<template>
  <div class="main">
    <article>
      <AccountSetting />
    </article>
  </div>
</template>

<script>
import AccountSetting from "./../components/AccountSetting";
export default {
  name: "Account",
  components: {
    AccountSetting
  }
}
</script>

<style scoped lang="scss">
  article {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>