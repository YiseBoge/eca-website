import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import loaders from "./loaders"
import home from "./home"
import events from "./event"
import news from "./news"
import publications from "./publication"
import tenders from "./tender"
import leadership from "./leadership"
import media from "./media"
import messages from "./messages";
import search from "./search";

Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [
    createPersistedState({
      paths: ['user', 'token'],
    })
  ],

  state: {
    user: null,
    token: null,
  },
  getters: {
    getApiToken: state => {
      return state.token;
    },
    getUser: state => {
      return state.user;
    }
  },
  mutations: {
    resetUser: (state) => {
      state.user = null;
      state.token = null;
    },
    setUser: (state, payload) => {
      state.user = payload;
    },
    setToken: (state, payload) => {
      state.token = payload;
    }
  },

  actions: {
    setUser: ({commit}, payload) => {
      commit('setUser', payload);
    },
    resetUser: ({commit}) => {
      commit("resetUser");
    },
    setToken: ({commit}, payload) => {
      commit("setToken", payload);
    }
  },
  modules: {
    home,
    news,
    media,
    events,
    loaders,
    search,
    messages,
    leadership,
    publications,
    tenders
  }
});
