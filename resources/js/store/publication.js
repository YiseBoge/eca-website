import ajax from "../ajax";
import NProgress from "nprogress";

const state = {
  publications: [],
  publicationCategories: [],
  selectedPublication: null,
  publicationsMeta: {
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
  getPublications: state => {
    return state.publications;
  },
  getPublicationCategories: state => {
    return state.publicationCategories;
  },
  getSelectedPublication: state => {
    return state.selectedPublication;
  },
  getPublicationsMeta: state => {
    return state.publicationsMeta;
  }
};

const mutations = {
  setPublications: (state, payload) => {
    state.publications = payload;
  },
  setPublicationCategories: (state, payload) => {
    state.publicationCategories = payload;
  },
  setSelectedPublication: (state, payload) => {
    state.selectedPublication = payload;
  },
  setPublicationsMeta: (state, payload) => {
    state.publicationsMeta = payload;
  }
};

const actions = {
  setPublications: ({commit}, {page, size, year, category}) => {
    commit('setLoading', true);
    ajax.get(`/publication/?page=${page}&size=${size}&year=${year}&category=${category}`).then(
      response => {
        commit('setPublications', response.data.data);
        commit('setPublicationsMeta', response.data.meta);
      },
      error => {
        console.log(error);
      }
    ).finally(function () {
      commit('setLoading', false);
    });
  },

  setPublicationCategories: ({commit}) => {
    commit('setCategoryLoading', true);
    ajax.get(`/publication/categories`).then(
      response => {
        if (Array.isArray(response.data)) {
          commit('setPublicationCategories', response.data);
        }
      },
      error => {
        console.log(error);
      }
    ).finally(function () {
      commit('setCategoryLoading', false);
    });
  },

  setSelectedPublication: ({commit}, {id}) => {
    commit('setLoading', true);
    ajax.get(`/publication/${id}`).then(
      response => {
        commit('setSelectedPublication', response.data.data);
      },
      error => {
        console.log(error);
      }
    ).finally(function () {
      commit('setLoading', false);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
