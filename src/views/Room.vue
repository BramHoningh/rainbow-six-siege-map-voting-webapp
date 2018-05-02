<template>
  
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
      alphabet: "abcdefghijklmnopqrstuvwxyz0123456789"
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

    let room = this.generateRandomId("")
    console.log('room', room)

    socket.on('connect', () => {
      socket.emit('room', room)
    })

    socket.on('message', data => {
      console.log('incoming message', data)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>

