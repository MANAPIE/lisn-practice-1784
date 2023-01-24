import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    loading: false,
    gnbHidden: false
  },
  mutations: {
    setGnbHidden (state, value) {
      state.gnbHidden = value
    },
    setLoading (state, value) {
      setTimeout(() => {
        state.loading = value
      }, value ? 0 : 500)
    }
  }
})
export default store
