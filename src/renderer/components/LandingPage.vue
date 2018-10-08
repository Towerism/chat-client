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
    news ({ text }) {
      console.log(`news: ${text}`)
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
      this.messages.push({
        author: 'Martin Fracker',
        content
      })
      this.$socket.emit('chatmessage', content)
    }
  }
}
</script>

