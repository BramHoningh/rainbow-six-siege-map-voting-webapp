<template>
  
</template>

<script>
import io from 'socket.io-client'
import serverLocation from '../assets/server'

// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {

    }
  },
  created () {
    const socket = io(serverLocation)
  }
};
</script>
