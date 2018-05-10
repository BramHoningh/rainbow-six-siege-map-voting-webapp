<template>
<div :class="position" class="team-ban">
    <div class="header">
        <span class="team-label">TEAM</span>
        <span class="team" v-if="position === 'left'">TEAM BLUE</span>
        <span class="team" v-else>TEAM ORANGE</span>
    </div>
    <div class="banned-maps">
      <div class="banned-map" v-for="(map, index) in maps" :key="index">
        <div class="image" :style="{'background-image': 'url(' + map.image + ')'}"></div>
        <div class="overlay">
          <span class="left"></span>
          <span class="right"></span>
          <span class="overlay-label">{{ map.name }}</span>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: "teamBan",
  props: ["position", "maps"],
  data() {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/all.scss";

.team-ban {
  height: 100%;

  &.left {
    .header {
      border-bottom: 4px solid $siege-blue;

      .team-label {
        right: 5px;
        top: 0;
      }

      .team {
        right: 5px;
        bottom: 5px;
      }
    }
  }

  &.right {
    .header {
      border-bottom: 4px solid $siege-orange;

      .logo {
        position: absolute;
        right: 0;
      }

      .team-label {
        top: 0;
        left: 5px;
      }

      .team {
        bottom: 5px;
        left: 5px;
      }
    }
  }

  .header {
    position: relative;
    height: 60px;

    .logo {
      width: 50px;
      height: 50px;
      background-color: red;
    }

    .team-label {
      position: absolute;
    }

    .team {
      position: absolute;
      font-size: 28px;
      font-weight: bold;
    }
  }

  .banned-maps {
    padding: 10px 0;
    height: calc(100% - 75px); // height of header
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 10px;
    grid-template-columns: auto;
    box-sizing: border-box;

    .banned-map {
      position: relative;
      
      .image {
        width: 100%;
        height: 100%;
        // background-image: url('../../assets/images/chalet.jpg');
        background-size: cover;
        -webkit-filter: grayscale(100%) brightness(50%);
        filter: grayscale(100%) brightness(50%);
      }

      .overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40px;
        height: 40px;
        border: 4px solid $white;

        span.left {
          position: absolute;
          bottom: -2px;
          left: 0;
          transform: rotate(-45deg);
          transform-origin: left bottom;
          display: block;
          width: 58px;
          height: 3px;
          background-color: $white;
        }

        span.right {
          position: absolute;
          bottom: -2px;
          right: 0;
          transform: rotate(45deg);
          transform-origin: right bottom;
          display: block;
          width: 58px;
          height: 3px;
          background-color: $white;
        }

        span.overlay-label {
          width: 110px;
          text-align: center;
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 20px;
        }
      }
    }
  }
}
</style>

