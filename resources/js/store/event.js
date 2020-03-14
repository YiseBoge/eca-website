import ajax from "../ajax";

const state = {
  events: [],
  meta: {
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
  getEvents: state => {
    return state.events;
  },
  getMeta: state => {
    return state.meta;
  }
};

const mutations = {
  setEvents: (state, payload) => {
    state.events = payload;
  },
  setMeta: (state, payload) => {
    state.meta = payload;
  }
};

const actions = {
  setEvents: ({commit}, {page, size}) => {
    ajax.get(`/event/?page=${page}&size=${size}`).then(
      response => {
        console.log(response.data.meta);
        commit('setEvents', response.data.data);
        commit('setMeta', response.data.meta);
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
