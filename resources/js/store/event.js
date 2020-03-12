import ajax from "../ajax";

const state = {
  events: [],
  eventsCount: 10,
};

const getters = {
  getEvents: state => {
    return state.events;
  },
  getEventsCount: state => {
    return state.eventsCount;
  }
};

const mutations = {
  setEvents: (state, payload) => {
    state.events = payload;
  },
  setEventsCount: (state, payload) => {
    state.eventsCount = payload;
  }
};

const actions = {
  setEvents: ({commit}, {page, size}) => {
    ajax.get(`/events/?page=${page}&size=${size}`).then(
      response => {
        console.log(response);
        commit('setEvents', response.data.data);
        commit('setEventsCount', response.data.total);
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
