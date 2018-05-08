<template>
<div>
  <h1>Start a new session</h1>
  <div class="new-box">
    <button class="large" @click="$router.push('room')">New session</button>
  </div>
</div>
</template>

<script>
export default {
    name: 'newBox',
    data () {
        return {

        }
    },
    methods: {
        startNewSession() {
            console.log('Start new session')
        }
    }
}
</script>

<style lang="scss" scoped>
.new-box {
    position: relative;
    width: 100%;
    min-height: 200px;
    background-color: #d8602d;
    padding: 20px;
    box-sizing: border-box;

    button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>

