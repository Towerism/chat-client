<template lang="pug">
  .chat
    .messages
      li.message(v-for="message in messages") {{message.author}}: {{message.content}}
    textarea.new-message(v-model="newMessage")
    button.send-button(@click="sendMessage(newMessage)") Send
</template>

<script>
export default {
  sockets: {
    chatbroadcast (payload) {
      this.addMessage(payload)
    }
  },
  data () {
    return {
      messages: [],
      newMessage: ''
    }
  },
  methods: {
    sendMessage (content) {
      const payload = {
        author: 'Martin Fracker',
        content
      }
      this.addMessage(payload)
      this.$socket.emit('chatmessage', payload)
    },
    addMessage ({ author, content }) {
      this.messages.push({ author, content })
    }
  }
}
</script>

