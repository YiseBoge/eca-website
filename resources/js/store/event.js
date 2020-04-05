import ajax from "../ajax";

const state = {
  events: [],
  selectedEvent: null,
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
  },
  getSelectedEvent: state => {
    return state.selectedEvent;
  },
};

const mutations = {
  setEvents: (state, payload) => {
    state.events = payload;
  },
  setEventsMeta: (state, payload) => {
    state.eventsMeta = payload;
  },
  setSelectedEvent: (state, payload) => {
    state.selectedEvent = payload;
  },
};

const actions = {
  setEvents: ({commit}, {page, size, past}) => {
    commit('setLoading', true);
    ajax.get(`/event/?page=${page}&size=${size}${past ? '&past' : ''}`).then(
      response => {
        commit('setEvents', response.data.data);
        commit('setEventsMeta', response.data.meta);
      },
      error => {
        console.log(error);
      }
    ).finally(function () {
      commit('setLoading', false);
    });
  }, 

  setSelectedEvent: ({commit}, {id}) => {
    ajax.get(`/event/${id}`).then(
      response => {
        commit('setSelectedEvent', response.data.data);
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
