import { createStore } from 'vuex'

export default createStore({
  state: {
    sneakers: [],
  },
  getters: {
    sneakers(state) {
      return state.sneakers;
    },
  },
  mutations: {
    setSneakers(state, sneakers) {
      state.sneakers = sneakers;
    }
  },
  actions: {
    fetchAllSneakers(context) {
      return fetch("https://cassidyromariolawrence.github.io/sneakersJSONfileAPI/data.json")
        .then((response) => response.json())
        .then((data) => {
          context.commit("setSneakers", data.sneakers);
        })
        .catch((err) => console.error(err));
    }
  },
  modules: {
  }
})
