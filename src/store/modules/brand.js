import axios from "axios";

const brand = {
    namespaced: true,
    state: {
        dataBrand: [],
        brandbyId: [],

    },
    getters: {
        getBrand: (state) => state.dataBrand,
        getBrandById: (state) => state.brandbyId

    },
    actions: {
        async fetchBrand({ commit }) {
            try{
                const data = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/all-brands"
                );
                commit("SET_BRAND", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async fetchBrandById({ commit }, brandId) {
            try {
                const response = await axios.get('https://ecommerce.olipiskandar.com/api/v1/product/search', {
                    params: {
                        page: 1,
                        brand_ids: brandId,
                        attribute_values: '',
                        sort_by: 'popular',
                    },
                });
                commit('SET_BRANDID', response.data.products.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
    },
    mutations: {
        SET_BRAND(state, brand) {
            state.dataBrand = brand;
        },
        SET_BRANDID(state, BrandId) {
            state.brandbyId = BrandId
        }
    }
}

export default brand;