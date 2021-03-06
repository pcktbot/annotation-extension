export default {
  async resetNote({ commit }) {
    await commit('ON_RESET')
  },
  async setTeam({ commit }, team) {
    await commit('SET_TEAM', team)
  },
  async dropClients({ commit }) {
    await commit('DROP_CLIENTS')
  },
  setClients({ commit }, clients) {
    if (clients.payload) {
      commit('SET_CLIENTS', clients.payload)
    } else {
      commit('SET_CLIENTS', clients)
    }
  },
  setLocations({ commit }, payload) {
    commit('SET_LOCATIONS', payload)
  },
  async updateField({ commit }, keyVal) {
    await commit('UPDATE_FIELD', keyVal)
  },
  async hasToken({ commit }) {
    await commit('HAS_TOKEN', true)
  },
  setLastUpdated({ commit }) {
    commit('SET_LAST_UPDATED')
  }
}
