<template>
<div class="pick-ban-container">
    <div class="team-left">
        <TeamBan position="left" :maps="$store.state.bannedMaps.teamBlue"></TeamBan>
    </div>

    <div class="log-container">
        LOG CONTAINER
    </div>

    <div class="team-right">
        <TeamBan position="right" :maps="$store.state.bannedMaps.teamOrange"></TeamBan>
    </div>

    <div class="picked-container">
        PICKED CONTAINER
    </div>

    <div class="maps-container">
        <Maps :maps="maps" />
    </div>
</div>
</template>

<script>
import maps from '@/assets/maps'

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
            maps: maps
        }
    },
    mounted () {
        // this.$store.commit('addBannedMap', {
        //     team: 'blue',
        //     map: {
        //         name: this.maps.filter(map => map.name === 'Chalet')[0].name,
        //         image: this.maps.filter(map => map.name === 'Chalet')[0].image
        //     }
        // })
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

