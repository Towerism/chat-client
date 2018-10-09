<template lang="pug">
  form.app-page-wrapper.pure-form(@submit.prevent="login()")
    fieldset
      legend Login to start chatting
      input(type="text" placeholder="Your name" v-model="name")
      button.pure-button.pure-button-primary Login
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    login () {
      this.$router.push({ name: 'chat', params: { user: this.name } })
    }
  }
}
</script>

<style scoped lang="less">
</style>
