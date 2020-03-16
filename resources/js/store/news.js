import ajax from "../ajax";

const state = {
  news: [],
  selectedNews: null,
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
  getSelectedNews: state => {
    return state.selectedNews;
  },
  getNewsMeta: state => {
    return state.newsMeta;
  }
};

const mutations = {
  setNews: (state, payload) => {
    state.news = payload;
  },
  setSelectedNews: (state, payload) => {
    state.selectedNews = payload;
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
  },
  setSelectedNews: ({commit}, {id}) => {
    ajax.get(`/news/${id}`).then(
      response => {
        commit('setSelectedNews', response.data.data);
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
