import ajax from "../ajax";

const state = {
  searchResponse: [],
};

const getters = {
  getSearchResponse: state => {
    return state.searchResponse;
  },
};

const mutations = {
  setSearchResponse: (state, payload) => {
    state.searchResponse = payload;
  },
};

const actions = {
  search: ({commit}, {keyword}) => {
    ajax.get(`/search/${keyword}`).then(
      response => {
        commit('setSearchResponse', response.data.data);
      },
      error => {
        console.log(error);
      }
    )
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}
