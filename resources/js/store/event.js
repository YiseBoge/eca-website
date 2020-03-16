import ajax from "../ajax";

const state = {
  events: [],
  eventsMeta: {
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
  getEventsMeta: state => {
    return state.eventsMeta;
  }
};

const mutations = {
  setEvents: (state, payload) => {
    state.events = payload;
  },
  setEventsMeta: (state, payload) => {
    state.meta = payload;
  }
};

const actions = {
  setEvents: ({commit}, {page, size}) => {
    ajax.get(`/event/?page=${page}&size=${size}`).then(
      response => {
        commit('setEvents', response.data.data);
        commit('setEventsMeta', response.data.meta);
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
