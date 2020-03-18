const state = {
  loading: false,
  categoryLoading: false,
};

const getters = {
  getLoading(state) {
    return state.loading
  },
  getCategoryLoading(state) {
    return state.categoryLoading
  },
};

const mutations = {
  setLoading: (state, payload) => {
    state.loading = payload;
  },
  setCategoryLoading: (state, payload) => {
    state.categoryLoading = payload;
  },
};

export default {
  state,
  getters,
  mutations,
}
