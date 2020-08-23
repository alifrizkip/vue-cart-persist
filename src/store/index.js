import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';

import cart from './modules/cart';

Vue.use(Vuex);

const cartState = createPersistedState({
  key: 'cart-persist-state',
  paths: ['cart.carts'],
  storage: {
    getItem: key => Cookies.get(key),
    setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: false }),
    removeItem: key => Cookies.remove(key),
  },
});

const store = new Vuex.Store({
  modules: {
    cart,
  },
  plugins: [cartState],
});

export default store;