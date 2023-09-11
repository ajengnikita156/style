import axios from "axios";

const offers = {
  namespaced: true,
  state: {
    offerss: [],

  },
  getters: {
    getoffers: (state) => state.offers,

  },
  actions: {
    async fetchoffers({ commit }) {
      try {
        const dataoffers = await axios.get("https://ecommerce.olipiskandar.com/api/v1/offer/:slug", {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        console.log(dataoffers.data)
        commit('SET_offers', dataoffers)
      } catch (error) {
        alert('Ada Error')
        console.log(error)
      }
    },

  },
  mutations: {
    SET_offers(state, offers) {
      state.offers = offers
    },
  }
}

export default offers;