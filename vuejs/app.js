new Vue({
  el: "#app",
  data: {
    isiChat: [],
    chatBaru: []
  },
  methods: {
    send() {
      this.isiChat.push(this.chatBaru);
    }
  }
});
