<template>
<div class="maps">
  <div  class="map" 
        v-for="(map, index) in this.maps" 
        :key="index" 
        @click="banMap(map.name)"
  >
    <div class="image" :style="{'background-image': 'url(' + map.image + ')'}"></div>
    <div class="name">{{map.name}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: "Maps",
  props: ['maps'],
  data() {
    return {
      // maps: this.maps
    }
  },
  methods: {
    banMap(mapName) {
      this.$store.commit('addBannedMap', {
            team: 'blue',
            map: {
                name: this.maps.filter(map => map.name === mapName)[0].name,
                image: this.maps.filter(map => map.name === mapName)[0].image
            }
        })
    }
  }
};
</script>

<style lang="scss" scoped>
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
      height: 80px;
      background-size: cover;
      background-position: center;
    }

    .name {
      text-align: center;
    }
  }
}
</style>

