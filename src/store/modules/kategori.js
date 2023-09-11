import axios from "axios";

const kategori = {
    namespaced: true,
    state: {
        dataKategori: [],
        categoryBySlug: [],

    },
    getters: {
        getKategori: (state) => state.dataKategori,
        getCategoriesBySlug: (state) => state.categoryBySlug

    },
    actions: {
        async fetchKategori ({ commit }) {
            try{
                const data = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/all-categories"
                );
                commit("SET_KATEGORI", data.data);
            } catch (error) {
                alert( error);
                console.log(error);
            }
        },
        async fetchCategoryBySlug({ commit }, categorySlug) {
            try {
                const response = await axios.get('https://ecommerce.olipiskandar.com/api/v1/product/search', {
                    params: {
                        page: 1,
                        category_slug: categorySlug,
                        brand_ids: '',
                        attribute_values: '',
                        sort_by: 'popular',
                    },
                });
                commit('SET_CATEGORY_BY_SLUG', response.data.products.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
      
      
    },
    mutations: {
        SET_KATEGORI(state, kategori) {
            state.dataKategori = kategori;
        },
        SET_CATEGORY_BY_SLUG(state, CategorySlug) {
            state.categoryBySlug = CategorySlug
        }
        
    }
}

export default kategori;