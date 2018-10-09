<template lang="pug">
  .top-bar.pure-menu.pure-menu-horizontal
    ul.pure-menu-list
      li.pure-menu-item
        a.pure-menu-link(href="javascript:void(0)" @click="logout()") Logout
</template>

<script>
export default {
  methods: {
    logout () {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped lang="css">
</style>
