import ajax from "../ajax";

const state = {
  publications: [],
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
  getPublicationsMeta: state => {
    return state.publicationsMeta;
  }
};

const mutations = {
  setPublications: (state, payload) => {
    state.publications = payload;
  },
  setPublicationsMeta: (state, payload) => {
    state.publicationsMeta = payload;
  }
};

const actions = {
  setPublications: ({commit}, {page, size}) => {
    ajax.get(`/publication/?page=${page}&size=${size}`).then(
      response => {
        commit('setPublications', response.data.data);
        commit('setPublicationsMeta', response.data.meta);
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
