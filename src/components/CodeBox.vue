<template>
<div>
  <h1>Enter your received code</h1>
  <div class="code-box">
    <input type="text" v-model="inputCode" placeholder="Code Here">
    <span class="error-message">{{errorMessage}}</span>
    <div class="send-button">
      <button @click="checkCode()">Go!</button>
    </div>
  </div>
</div>
</template>

<script>
import io from 'socket.io-client'

// Add your location to the socket server. 
// You can find my socket server at https://github.com/Pixeldenker/map-voting-socket-server
import serverLocation from '../assets/server'

export default {
  name: "codeBox",
  data() {
    return {
      inputCode: "",
      errorMessage: "",
      socket: null,
      isConnected: false
    };
  },
  methods: {
    checkCode() {
      if (this.inputCode.replace(/\s/g, "").length === 10) {
        this.errorMessage = ""

        if (this.isConnected) {
          this.socket.emit('checkRoom', this.inputCode)

          let senderId = 'id-' + this.inputCode

          this.socket.on(senderId, message => {
            if (message === 200) {
              this.$store.commit('UPDATE_CODE', {
                newCode: this.inputCode
              })
              this.$router.push('room')
            } else {
              this.errorMessage = message
            }
          })
        } else {
          this.errorMessage = "Connection lost... try reloading?"
        }

      } else if (this.inputCode.replace(/\s/g, "").length === 0) {
        this.errorMessage = "Uhm, how about entering a code?"
      } else {
        this.errorMessage = "This code is not valid"
      }
    }
  },
  created () {
    this.socket = io(serverLocation)

    this.socket.on('connect', () => {
      this.isConnected = true
    })
  }
};
</script>

<style lang="scss" scoped>
.code-box {
  position: relative;
  width: 100%;
  min-height: 200px;
  background-color: #1579a0;
  padding: 20px;
  box-sizing: border-box;

  input {
    width: calc(100% - 20px);
    margin-bottom: 5px;
  }

  .send-button {
    position: absolute;
    right: 20px;
    bottom: 20px;
    text-align: right;
  }
}
</style>

