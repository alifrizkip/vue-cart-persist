import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import SecureLS from "secure-ls";
import Cookies from 'js-cookie';

import cart from './modules/cart';
import auth from './modules/auth';

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

const authState = createPersistedState({
  key: 'auth-persist-state',
  paths: ['auth.isLoggedIn'],
  storage: {
    getItem: key => Cookies.get(key),
    setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: false }),
    removeItem: key => Cookies.remove(key)
  }
});

const store = new Vuex.Store({
  modules: {
    cart,
    auth
  },
  plugins: [cartState, authState],
});

export default store;