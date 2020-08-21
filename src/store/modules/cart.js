const types = {
  SET_CART: 'SET_CART'
};

const state = () => ({
  carts: [],
});

const mutations = {
  [types.SET_CART](state, carts) {
    state.carts = [...carts];
  }
};

const actions = {
  addToCart({ commit, state }, product) {
    let { carts } = state;

    const isProductExist = carts.find((item) => item.id === product.id);
    if (isProductExist) {
      carts = carts.map((item) => {
        if (item.id === product.id) {
          item.amount += Number(product.amount);
        }

        return item;
      })
    } else {
      carts.push(product);
    }

    commit(types.SET_CART, carts);
  },

  incrementCartItem({ commit, state }, idx) {
    const carts = [...state.carts ];
    carts[idx].amount += 1;

    commit(types.SET_CART, carts);
  },

  decrementCartItem({ commit, state }, idx) {
    const carts = [...state.carts ];
    if (carts[idx].amount > 1) {
      carts[idx].amount -= 1;
    }

    commit(types.SET_CART, carts);
  },

  deleteCartItem({ commit, state }, idx) {
    const carts = [...state.carts];
    carts.splice(idx, 1);

    commit(types.SET_CART, carts);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
