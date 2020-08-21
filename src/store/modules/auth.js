const types = {
  SET_LOGIN: 'SET_LOGIN'
};

const state = () => ({
  isLoggedIn: false,
});

const mutations = {
  [types.SET_LOGIN](state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn;
  }
};

const actions = {
  login({ commit }) {
    commit(types.SET_LOGIN, true);
  },

  logout({ commit }) {
    commit(types.SET_LOGIN, false);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
