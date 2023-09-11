import axios from "axios";

const search = {
    namespaced: true,
    state: {
        searchKata: [],

    },
    getters: {
        getsearchKata: (state) => state.searchKata,
    },
    actions: {
        async fetchsearchKata({ commit }, katakunci) {
            try {
                const response = await axios.get(`https://ecommerce.olipiskandar.com/api/v1/search.ajax/${katakunci}`);

                if (response.data.products && response.data.products.data) {
                    const products = response.data.products.data;
                    commit('SET_SEARCH_RESULTS', products);
                } else {
                    commit('SET_SEARCH_RESULTS', []);
                }
            } catch (error) {
                alert('Ada Error')
                console.error(error);
            }
        },

    },
    mutations: {
        SET_SEARCH_RESULTS(state, results) {
            state.searchKata = results;
        },
    }
}

export default search;