import ajax from "../ajax";

const state = {
  featured: [],
  headlines: [],
  leadership: [],
  homeEvents: [],
  homeTenders: [],
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
  getHomeTenders: state => {
    return state.homeTenders;
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
  setHomeTenders: (state, payload) => {
    state.homeTenders = payload;
  },
  setHomePublications: (state, payload) => {
    state.homePublications = payload;
  },
};

const actions = {
  setFeatured: ({commit}, {page, size}) => {
    commit('setFeaturedLoading', true);
    ajax.get(`/news/?page=${page}&size=${size}&featured=true`).then(
      response => {
        commit('setFeatured', response.data.data);
      },
      error => {
        console.log(error);
      }
    ).finally(function () {
      commit('setFeaturedLoading', false);
    });
  },
  setHeadlines: ({commit}, {page, size}) => {
    commit('setHeadlinesLoading', true);
    ajax.get(`/news/?page=${page}&size=${size}`).then(
      response => {
        commit('setHeadlines', response.data.data);
      },
      error => {
        console.log(error);
      }
    ).finally(function () {
      commit('setHeadlinesLoading', false);
    });
  },
  setLeadership: ({commit}, {page, size}) => {
    commit('setLeadershipLoading', true);
    ajax.get(`/leadership/?page=${page}&size=${size}`).then(
      response => {
        commit('setLeadership', response.data.data);
      },
      error => {
        console.log(error);
      }
    ).finally(function () {
      commit('setLeadershipLoading', false);
    });
  },
  setHomeEvents: ({commit}, {page, size}) => {
    commit('setHomeEventsLoading', true);
    ajax.get(`/event/?page=${page}&size=${size}&type=Past`).then(
      response => {
        commit('setHomeEvents', response.data.data);
      },
      error => {
        console.log(error);
      }
    ).finally(function () {
      commit('setHomeEventsLoading', false);
    });
  },
  setHomeTenders: ({commit}, {page, size}) => {
    commit('setHomeTendersLoading', true);
    ajax.get(`/tender/?page=${page}&size=${size}&type=Upcoming`).then(
      response => {
        commit('setHomeTenders', response.data.data);
      },
      error => {
        console.log(error);
      }
    ).finally(function () {
      commit('setHomeTendersLoading', false);
    });
  },
  setHomePublications: ({commit}, {page, size}) => {
    commit('setHomePublicationsLoading', true);
    ajax.get(`/publication/?page=${page}&size=${size}`).then(
      response => {
        commit('setHomePublications', response.data.data);
      },
      error => {
        console.log(error);
      }
    ).finally(function () {
      commit('setHomePublicationsLoading', false);
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}
