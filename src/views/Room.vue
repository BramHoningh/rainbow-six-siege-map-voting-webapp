<template>
<div>
  <h1>Your code: {{roomCode}}</h1>
</div>
</template>

<script>
import io from 'socket.io-client'

// Add your location to the socket server. 
// You can find my socket server at https://github.com/Pixeldenker/map-voting-socket-server
import serverLocation from '../assets/server'

export default {
  name: 'room',
  data () {
    return {
      alphabet: "abcdefghijklmnopqrstuvwxyz",
      roomCode: ''
    }
  },
  methods: {
    generateRandomId(id) {
      if (id.length === 10) {
        return id
      } else {
        return this.generateRandomId(id += this.alphabet.charAt(Math.floor(Math.random() * this.alphabet.length)).toUpperCase())
      }
    }
  },
  created () {
    if (this.$store.state.socket !== null) {
      const socket = io(serverLocation)
      this.$store.commit('ADD_SOCKET', {
        socket: socket
      })
    }

    if (this.$store.state.code === "") {
      // New session
      this.roomCode = this.generateRandomId("")

      this.$store.state.socket.on('connect', () => {
        this.$store.state.socket.emit('room', this.roomCode)
        this.$store.commit('UPDATE_CODE', {
          newCode: this.roomCode
        })
      })
    }

    this.$store.state.socket.on('room-complete', data => {
      this.$router.push('pick-ban')
    })
  }
}
</script>

<style lang="scss" scoped>

</style>

