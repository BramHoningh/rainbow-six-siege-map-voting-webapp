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
    const socket = io(serverLocation)

    if (this.$store.state.code === "") {
      this.roomCode = this.generateRandomId("")

      socket.on('connect', () => {
        socket.emit('room', this.roomCode)
        this.$store.commit('UPDATE_CODE', {
          newCode: this.roomCode
        })
      })
    } else {
      socket.emit('room', this.$store.state.code)
    }

    socket.on('message', data => {
      console.log('incoming message', data)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>

