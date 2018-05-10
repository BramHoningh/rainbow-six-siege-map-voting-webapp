import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    code: '',
    bannedMaps: {
      teamBlue: [],
      teamOrange: []
    }
  },
  mutations: {
    updateCode (state, payload) {
      state.code = payload.newCode
    },

    addBannedMap (state, payload) {
      if (payload.team === "blue") {
        state.bannedMaps.teamBlue.push(payload.map)
      } else {
        state.bannedMaps.teamOrange.push(payload.map)
      }
    }
  },
  actions: {
    
  },
});
