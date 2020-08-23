import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import cart from './modules/cart';

Vue.use(Vuex);

const cartState = createPersistedState({
  key: 'cart-persist-state',
  paths: ['cart.carts'],
});

const store = new Vuex.Store({
  modules: {
    cart,
  },
  plugins: [cartState],
});

export default store;