import ajax from "../ajax";

const state = {
  leaders: [],
  selectedLeader: null,
  leadershipMeta: {
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
  getLeaders: state => {
    return state.leaders;
  },
  getLeadershipMeta: state => {
    return state.leadershipMeta;
  },
  getSelectedLeader: state => {
    return state.selectedLeader;
  },
};

const mutations = {
  setLeaders: (state, payload) => {
    state.leaders = payload;
  },
  setLeadershipMeta: (state, payload) => {
    state.leadershipMeta = payload;
  },
  setSelectedLeader: (state, payload) => {
    state.selectedLeader = payload;
  },
};

const actions = {
  setLeaders: ({commit}, {page, size, past}) => {
    commit('setLoading', true);
    ajax.get(`/leadership/?page=${page}&size=${size}`).then(
      response => {
        commit('setLeaders', response.data.data);
        commit('setLeadershipMeta', response.data.meta);
      },
      error => {
        console.log(error);
      }
    ).finally(function () {
      commit('setLoading', false);
    });
  },

  setSelectedLeader: ({commit}, {id}) => {
    commit('setLoading', true);
    ajax.get(`/leadership/${id}`).then(
      response => {
        commit('setSelectedLeader', response.data.data);
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
