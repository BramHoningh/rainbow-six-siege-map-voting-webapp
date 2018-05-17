<template>
<div 
  class="maps"
>
  <div  
    class="map"
    :class="{'disabled': map.team !== ''}" 
    v-for="(map, index) in maps" 
    :key="index" 
    @click="banMap(map.name)"
  >
    <div 
      class="image" 
      :class="{'is-picked': map.team !== ''}" 
      :style="{'background-image': 'url(' + map.image + ')'}"
    >
      <div 
        class="team-overlay" 
        :class="'team-' + map.team" 
        v-show="map.team"
      ></div>
    </div>
    <div class="name">{{map.name}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: "maps",
  data() {
    return {};
  },
  computed: {
    maps() {
      return this.$store.state.maps;
    },

    hadLastTurn() {
      return this.$store.state.hadLastTurn;
    },

    playerTeam() {
      this.$store.state.playerTeam;
    }
  },
  methods: {
    banMap(mapName) {
      if (this.$store.state.playerTeam === this.$store.state.hadLastTurn) {
        alert("It is not your turn");
      } else {
        this.commitBannedMap(mapName);

        this.$store.state.socket.emit("user-choose-map", {
          team: this.$store.state.playerTeam,
          code: this.$store.state.code,
          map: mapName
        });
      }
    },

    commitBannedMap(mapName) {
      this.$store.commit("ADD_BANNED_MAP", {
        map: {
          name: this.maps.filter(map => map.name === mapName)[0].name,
          image: this.maps.filter(map => map.name === mapName)[0].image,
          team: this.$store.state.playerTeam
        }
      });

      // this.$store.commit('UPDATE_HAD_LAST_TURN', {
      //   team: this.$store.state.playerTeam
      // })

      this.$store.dispatch("CHANGE_TURN", {
        team: this.$store.state.playerTeam
      });
    }
  },

  created() {
    if (!this.$store.state.socket) {
      this.$router.push("/");
    } else {
      this.$store.state.socket.on("choosen-map", data => {
        this.$store.commit("ADD_BANNED_MAP", {
          map: {
            name: this.maps.filter(map => map.name === data.map)[0].name,
            image: this.maps.filter(map => map.name === data.map)[0].image,
            team: data.team
          }
        });

        // this.$store.commit('UPDATE_HAD_LAST_TURN', {
        //   team: data.team
        // })

        this.$store.dispatch("CHANGE_TURN", {
          team: data.team
        });
      });
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

    &.disabled {
      pointer-events: none;
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
        width: 100%;
        height: 100%;
        opacity: 0.7;

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

