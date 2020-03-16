import ajax from "../ajax";

const state = {
  news: [],
  newsMeta: {
    current_page: 0,
    from: 0,
    to: 0,
    last_page: 0,
    path: "",
    per_page: "0",
    total: 0
  },
};

const getters = {
  getNews: state => {
    return state.news;
  },
  getNewsMeta: state => {
    return state.newsMeta;
  }
};

const mutations = {
  setNews: (state, payload) => {
    state.news = payload;
  },
  setNewsMeta: (state, payload) => {
    state.newsMeta = payload;
  }
};

const actions = {
  setNews: ({commit}, {page, size}) => {
    ajax.get(`/news/?page=${page}&size=${size}`).then(
      response => {
        commit('setNews', response.data.data);
        commit('setNewsMeta', response.data.meta);
      },
      error => {
        console.log(error);
      }
    )
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
