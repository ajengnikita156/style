import { createStore } from 'vuex';
import auth from './modules/auth';
import brand from './modules/brand';
import product from './modules/product';
import kategori from './modules/kategori';
import users from './modules/user';
import keranjang from './modules/keranjang';
import order from './modules/order';
import checkout from './modules/checkout';
import wishlist from './modules/wishlist';
import search from './modules/search';
import offers from './modules/offers';

const store = createStore({
  state: {
    isLoading: true,
  },
  modules: {
    auth,
    brand,
    kategori,
    product,
    users,
    keranjang,
    order,
    checkout,
    wishlist,
    search,
    offers
 },
});

export default store;