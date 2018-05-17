<template>
<div class="logger">
    <p :class="{'bold': item.team !== team}" v-for="(item, index) in log" :key="index">{{ item.message }}</p>
</div>
</template>

<script>
export default {
    name: 'log',
    computed: {
        log () {
            return this.$store.state.log
        },

        team () {
            return this.$store.state.playerTeam
        }
    }
}
</script>

<style lang="scss" scoped>
.logger {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-x: scroll;
    
    p {
        margin: 0;

        &.bold {
            font-weight: bold;
        }
    }
}
</style>

