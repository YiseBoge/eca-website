import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import events from "./event"
import news from "./news"
import publications from "./publication"

Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ['user'],
    })
  ],

  state: {
    user: null
  },
  getters: {
    getApiToken: state => {
      if (state.user === null)
        return null;
      return state.user.token;
    },
  },
  mutations: {
    resetUser: (state) => {
      state.user = null;
    },
    setUser: (state, payload) => {
      state.user = payload;
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
    events,
    news,
    publications,
  }
});
