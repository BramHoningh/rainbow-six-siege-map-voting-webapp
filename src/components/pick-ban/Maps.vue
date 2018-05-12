<template>
<div class="maps">
  <div  class="map" 
        v-for="(map, index) in maps" 
        :key="index" 
        @click="banMap(map.name)"
  >
    <div class="image" :class="{'is-picked': map.team !== ''}" :style="{'background-image': 'url(' + map.image + ')'}">
      <div class="team-overlay" :class="'team-' + map.team" v-show="map.team"></div>
    </div>
    <div class="name">{{map.name}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: "maps",
  data() {
    return {
    
    }
  },
  computed: {
    maps () {
      console.log('hallo')
      return this.$store.state.maps
    }
  },
  methods: {
    banMap(mapName) {
      this.$store.commit('ADD_BANNED_MAP', {
        map: {
          name: this.maps.filter(map => map.name === mapName)[0].name,
          image: this.maps.filter(map => map.name === mapName)[0].image,
          team: this.$store.state.playerTeam
        }
      })

      this.$store.commit('UPDATE_HAD_LAST_TURN', {
        team: this.$store.state.playerTeam
      })

      // ONLY FOR DEVEOPMENT
      let team = ''

      if (this.$store.state.playerTeam === 'blue') {
        team = 'orange'
      } else {
        team = 'blue'
      }

      this.$store.commit('ADD_TEAM_TO_PLAYER', {
        team: team
      })
      // END OF O-F-D 
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/all.scss";

.maps {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-column-gap: 20px;

  .map {
    height: 100%;
    transition: all, 230ms;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }

    .image {
      position: relative;
      height: 80px;
      background-size: cover;
      background-position: center;

      &.is-picked {
        // -webkit-filter: grayscale(100%);
        // filter: grayscale(100%);
      }

      .team-overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        border-radius: 50px;

        &.team-blue {
          background-color: $siege-blue;
        }

        &.team-orange {
          background-color: $siege-orange;
        }
      }
    }

    .name {
      text-align: center;
    }
  }
}
</style>

