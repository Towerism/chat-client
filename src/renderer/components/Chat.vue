<template lang="pug">
  .chat
    top-bar
    .app-page-wrapper
      .messages.pure-g(v-if="messages.length > 0")
        .message.pure-u-1.pure-g(v-for="message in messages")
          .author {{message.author}}
          .content {{message.content}}
      .new-message.pure-g
        form.pure-form
          textarea(type="text" placeholder="Type your message here" v-model="newMessage" @keyup.enter.exact="sendMessage()")
</template>

<script>
import TopBar from './TopBar'

export default {
  components: {
    TopBar
  },
  sockets: {
    chatbroadcast (payload) {
      this.addMessage(payload)
    }
  },
  props: {
    user: String
  },
  data () {
    return {
      messages: [],
      newMessage: ''
    }
  },
  methods: {
    sendMessage () {
      const payload = {
        author: this.user,
        content: this.newMessage
      }
      this.addMessage(payload)
      this.$socket.emit('chatmessage', payload)
      this.newMessage = ''
    },
    addMessage ({ author, content }) {
      this.messages.push({ author, content })
    }
  }
}
</script>

<style scoped lang="less">
.author {
  font-weight: 900;
}

.new-message {
  form {
    width: 100%;
  }
  textarea {
    width: 100%;
  }
}

.messages + .new-message {
  margin-top: 1rem;
}
</style>

