<template>
<div class="pick-ban-container">
    <div class="team-left">
        <TeamBan position="left" :maps="teamBlue"></TeamBan>
    </div>

    <div class="log-container">
        LOG CONTAINER
    </div>

    <div class="team-right">
        <TeamBan position="right" :maps="teamOrange"></TeamBan>
    </div>

    <div class="picked-container">
        PICKED CONTAINER
    </div>

    <div class="maps-container">
        <Maps />
    </div>
</div>
</template>

<script>
import TeamBan from '@/components/pick-ban/TeamBan'
import Maps from '@/components/pick-ban/Maps'

export default {
    name: 'pickBan',
    components: {
        TeamBan,
        Maps
    },
    data () {
        return {
            
        }
    },
    computed: {
        teamBlue () {
            return this.$store.state.bannedMaps.teamBlue
        },

        teamOrange () {
            return this.$store.state.bannedMaps.teamOrange
        }
    }
}
</script>

<style lang="scss" scoped>
.pick-ban-container {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-auto-rows: minmax(120px, auto);
    grid-column-gap: 10px;
    grid-template-areas: 
        "team-left team-left log    log    log    log    log    team-right team-right"
        "team-left team-left log    log    log    log    log    team-right team-right"
        "team-left team-left log    log    log    log    log    team-right team-right"
        "team-left team-left picked picked picked picked picked team-right team-right"
        "team-left team-left picked picked picked picked picked team-right team-right"
        "maps      maps      maps   maps   maps   maps   maps   maps       maps";

    .team-left {
        grid-area: team-left;
    }

    .log-container {
        grid-area: log;
    }

    .team-right {
        grid-area: team-right;
    }

    .picked-container {
        grid-area: picked;
    }

    .maps-container {
        grid-area: maps;
    }
}
</style>

