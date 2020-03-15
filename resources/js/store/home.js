import ajax from "../ajax";

const state = {
  featured: [],
  headlines: [],
  leadership: [],
  homeEvents: [],
  homePublications: [],
};

const getters = {
  getFeatured: state => {
    return state.featured;
  },
  getHeadlines: state => {
    return state.headlines;
  },
  getLeadership: state => {
    return state.leadership;
  },
  getHomeEvents: state => {
    return state.homeEvents;
  },
  getHomePublications: state => {
    return state.homePublications;
  },
};

const mutations = {
  setFeatured: (state, payload) => {
    state.featured = payload;
  },
  setHeadlines: (state, payload) => {
    state.headlines = payload;
  },
  setLeadership: (state, payload) => {
    state.leadership = payload;
  },
  setHomeEvents: (state, payload) => {
    state.homeEvents = payload;
  },
  setHomePublications: (state, payload) => {
    state.homePublications = payload;
  },
};

const actions = {
  setFeatured: ({commit}, {page, size}) => {
    ajax.get(`/news/?page=${page}&size=${size}&featured`).then(
      response => {
        commit('setFeatured', response.data.data);
      },
      error => {
        console.log(error);
      }
    )
  },
  setHeadlines: ({commit}, {page, size}) => {
    ajax.get(`/news/?page=${page}&size=${size}`).then(
      response => {
        commit('setHeadlines', response.data.data);
      },
      error => {
        console.log(error);
      }
    )
  },
  setLeadership: ({commit}, {page, size}) => {
    ajax.get(`/leadership/?page=${page}&size=${size}`).then(
      response => {
        commit('setLeadership', response.data.data);
      },
      error => {
        console.log(error);
      }
    )
  },
  setHomeEvents: ({commit}, {page, size}) => {
    ajax.get(`/event/?page=${page}&size=${size}`).then(
      response => {
        console.log(response.data.data);
        commit('setHomeEvents', response.data.data);
      },
      error => {
        console.log(error);
      }
    )
  },
  setHomePublications: ({commit}, {page, size}) => {
    ajax.get(`/publication/?page=${page}&size=${size}`).then(
      response => {
        commit('setHomePublications', response.data.data);
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
