import axios from "axios";

const product = {
  namespaced: true,
  state: {
    products: [],
    keranjang: [],
    wishlist: [],
    flashProduct: [],


  },
  getters: {
    getProduct: (state) => state.products,
    getProductById: (state) => (productId) => {
      console.log("Fetching single product by ID:", productId);
      console.log("products:", state.products);
      const product = state.products.find((p) => p.id == productId);
      console.log("Product:", product);
      return product;
    },
    getFlashProduct: (state) => state.flashProduct,

  },
  actions: {
    async fetchProduct({ commit }) {
      try {
        const dataProduct = await axios.get(
          "https://ecommerce.olipiskandar.com/api/v1/product/latest/20"
        );
        commit("SET_PRODUCTS", dataProduct.data["data"]);
      } catch (error) {
        alert("Ada Error");
        console.log(error);
      }
    },
    async fetchSingleProduct({ commit }, productId) {
      try {
        const response = await axios.get(
          `https://ecommerce.olipiskandar.com/api/v1/product/details/{product_slug}`
        );
        commit("SET_SINGLE_PRODUCT", response.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async addKeranjang({ commit, dispatch }, productId) {
      try {
        const response = await axios.post(
          "https://ecommerce.olipiskandar.com/api/v1/carts/add",
          {
            variation_id: productId,
            qty: 1,
            temp_user_id: null,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        commit("ADD_KERANJANG", response.data);
        console.log(response.data);
        alert("Successfully added to cart");
      } catch (error) {
        console.log(error);
      } finally {
        dispatch("keranjang/fetchKeranjang", null, { root: true });
      }
    },
    async addWishlist({ commit, dispatch }, productId) {
        try {
          const response = await axios.post(
            "https://ecommerce.olipiskandar.com/api/v1/user/wishlists",
            {
              variation_id: productId,
              qty: 1,
              temp_user_id: null,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          commit("ADD_WISHLIST", response.data);
          console.log(response.data);
          alert("Successfully added to WISHLIST");
        } catch (error) {
          console.log(error);
        } finally {
          dispatch("keranjang/fetchKeranjang", null, { root: true });
        }
      },
      async fetchFlashProduct({ commit }) {
        try {
          const flashData = await axios.get("https://ecommerce.olipiskandar.com/api/v1/product/latest/6")
          commit('ADD_FLASH_PRODUCT', flashData.data['data'])
        } catch (error) {
          alert('Ada Error')
          console.log(error)
        }
      },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_SINGLE_PRODUCT(state, product) {
      state.singleProduct = product;
    },
    ADD_KERANJANG(state, keranjang) {
      state.keranjang = keranjang;
    },
    ADD_WISHLIST(state, wishlist) {
        state.wishlist = wishlist;
      },
      ADD_FLASH_PRODUCT(state, flashProduct) {
        state.flashProduct = flashProduct
      },
  },
};

export default product;
