import ajax from "../ajax";

const state = {
  news: [],
  newsCategories: [],
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
  getNewsCategories: state => {
    return state.newsCategories;
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
  setNewsCategories: (state, payload) => {
    state.newsCategories = payload;
  },
  setSelectedNews: (state, payload) => {
    state.selectedNews = payload;
  },
  setNewsMeta: (state, payload) => {
    state.newsMeta = payload;
  }
};

const actions = {
  setNews: ({commit}, {page, size, year, category}) => {
    commit('setLoading', true);
    ajax.get(`/news/?page=${page}&size=${size}&year=${year}&category=${category}`).then(
      response => {
        commit('setNews', response.data.data);
        commit('setNewsMeta', response.data.meta);
      },
      error => {
        console.log(error);
      }
    ).finally(function () {
      commit('setLoading', false);
    });


  },

  setNewsCategories: ({commit}) => {
    commit('setCategoryLoading', true);
    ajax.get(`/news/categories`).then(
      response => {
        commit('setNewsCategories', response.data);
      },
      error => {
        console.log(error);
      }
    ).finally(function () {
      commit('setCategoryLoading', false);
    });
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
