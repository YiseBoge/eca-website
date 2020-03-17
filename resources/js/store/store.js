import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import home from "./home"
import events from "./event"
import news from "./news"
import publications from "./publication"
import media from "./media"

Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ['user'],
    })
  ],

  state: {
    user: null,
    loading: false
  },
  getters: {
    getApiToken: state => {
      if (state.user === null)
        return null;
      return state.user.token;
    },
    getLoading(state) {
      return state.loading
    }
  },
  mutations: {
    resetUser: (state) => {
      state.user = null;
    },
    setUser: (state, payload) => {
      state.user = payload;
    },
    setLoading: (state, payload) => {
      state.loading = payload;
    }
  },

  actions: {
    setUser: ({commit}, payload) => {
      commit('setUser', payload);
    },
    resetUser: ({commit}) => {
      commit("resetUser");
    }
  },
  modules: {
    home,
    events,
    news,
    publications,
    media,
  }
});
