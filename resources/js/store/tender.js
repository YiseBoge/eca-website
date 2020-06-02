import ajax from "../ajax";

const state = {
  tenders: [],
  tenderCategories: [],
  selectedTender: null,
  selectedApplications: [],
  tendersMeta: {
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
  getTenders: state => {
    return state.tenders;
  },
  getSelectedApplications: state => {
    return state.selectedApplications;
  },
  getTenderCategories: state => {
    return state.tenderCategories;
  },
  getSelectedTender: state => {
    return state.selectedTender;
  },
  getTendersMeta: state => {
    return state.tendersMeta;
  }
};

const mutations = {
  setTenders: (state, payload) => {
    state.tenders = payload;
  },
  setSelectedApplications: (state, payload) => {
    state.selectedApplications = payload;
  },
  setTenderCategories: (state, payload) => {
    state.tenderCategories = payload;
  },
  setSelectedTender: (state, payload) => {
    state.selectedTender = payload;
  },
  setTendersMeta: (state, payload) => {
    state.tendersMeta = payload;
  }
};

const actions = {
  setTenders: ({commit}, {page, size, time, category}) => {
    commit('setLoading', true);
    ajax.get(`/tender/?page=${page}&size=${size}&type=${time}&category=${category}`).then(
      response => {
        commit('setTenders', response.data.data);
        commit('setTendersMeta', response.data.meta);
      },
      error => {
        console.log(error);
      }
    ).finally(function () {
      commit('setLoading', false);
    });
  },

  setTenderCategories: ({commit}) => {
    commit('setCategoryLoading', true);
    ajax.get(`/tender/categories`).then(
      response => {
        if (Array.isArray(response.data)) {
          commit('setTenderCategories', response.data);
        }
      },
      error => {
        console.log(error);
      }
    ).finally(function () {
      commit('setCategoryLoading', false);
    });
  },

  setSelectedTender: ({commit}, {id}) => {
    commit('setLoading', true);
    ajax.get(`/tender/${id}`).then(
      response => {
        commit('setSelectedTender', response.data.data);
        ajax.get(`tender-application?tender_id=${response.data.data.id}`).then(
          response => {
            commit('setSelectedApplications', response.data.data);
          },
          error => {
            commit('setSelectedApplications', []);
            console.log(error);
          }
        ).finally(function () {
          commit('setLoading', false);
        });
      },
      error => {
        console.log(error);
      }
    );
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
