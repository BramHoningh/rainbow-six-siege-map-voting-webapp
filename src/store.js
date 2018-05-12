import Vue from 'vue';
import Vuex from 'vuex';
import maps from './assets/maps'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    code: '',
    maps: maps,
    socket: null,
    playerTeam: 'blue',
    hadLastTurn: '',
    bannedMaps: {
      teamBlue: [],
      teamOrange: []
    }
  },
  mutations: {
    UPDATE_CODE (state, payload) {
      state.code = payload.newCode
    },

    ADD_SOCKET (state, payload) {
      state.socket = payload.socket
    },

    ADD_BANNED_MAP (state, payload) {
      if (state.playerTeam === "blue") {
        state.bannedMaps.teamBlue.push(payload.map)
      } else {
        state.bannedMaps.teamOrange.push(payload.map)
      }

      state.maps.filter(map => map.name === payload.map.name)[0].team = state.playerTeam
    },

    ADD_TEAM_TO_PLAYER (state, payload) {
      state.playerTeam = payload.team
    },

    UPDATE_HAD_LAST_TURN (state, payload) {
      state.hadLastTurn = payload.team
    }    
  },
  actions: {

  },
});
