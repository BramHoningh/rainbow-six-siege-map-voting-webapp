import Vue from 'vue';
import Vuex from 'vuex';
import maps from './assets/maps'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    code: '',
    maps: maps,
    socket: null,
    log: [],
    playerTeam: '',
    hadLastTurn: 'orange',
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
      if (payload.map.team === "blue") {
        state.bannedMaps.teamBlue.push(payload.map)
      } else {
        state.bannedMaps.teamOrange.push(payload.map)
      }

      state.maps.filter(map => map.name === payload.map.name)[0].team = payload.map.team
    },

    ADD_TEAM_TO_PLAYER (state, payload) {
      state.playerTeam = payload.team
    },

    UPDATE_HAD_LAST_TURN (state, payload) {
      state.hadLastTurn = payload.team
    },
    
    ADD_LOG_ITEM (state, payload) {
      state.log.push({
        team: payload.team,
        message: payload.message
      })
    }
  },
  actions: {
    CHANGE_TURN (context, payload) {
      context.commit('UPDATE_HAD_LAST_TURN', payload.team)

      let log = {
        team: payload.team,
        message: (context.state.playerTeam === payload.team) ? 'The opposite team may vote.' : 'You may vote.'
      }
      context.commit('ADD_LOG_ITEM', log)
    }
  },
});
