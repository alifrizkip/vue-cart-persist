import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import SecureLS from "secure-ls";

import cart from './modules/cart';

Vue.use(Vuex);

const secureLS = new SecureLS({
  encodingType: 'aes',
  encryptionSecret: 'vue-cart-persist'
});
const cartState = createPersistedState({
  key: 'cart-persist-state',
  paths: ['cart.carts'],
  storage: {
    getItem: (key) => secureLS.get(key),
    setItem: (key, value) => secureLS.set(key, value),
    removeItem: (key) => secureLS.remove(key),
  },
});

const store = new Vuex.Store({
  modules: {
    cart,
  },
  plugins: [cartState],
});

export default store;