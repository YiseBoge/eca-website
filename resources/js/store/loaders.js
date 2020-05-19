const state = {
  loading: false,
  searchLoading: false,
  categoryLoading: false,
  homeLoaders: {
    headlines: false,
    featured: false,
    events: false,
    leadership: false,
    publications: false,
  }
};

const getters = {
  getLoading(state) {
    return state.loading
  },
  getSearchLoading(state) {
    return state.searchLoading
  },
  getCategoryLoading(state) {
    return state.categoryLoading
  },
  getHomeLoaders(state) {
    return state.homeLoaders
  },
};

const mutations = {
  setLoading: (state, payload) => {
    state.loading = payload;
  },
  setSearchLoading: (state, payload) => {
    state.searchLoading = payload;
  },
  setCategoryLoading: (state, payload) => {
    state.categoryLoading = payload;
  },
  setHeadlinesLoading: (state, payload) => {
    state.homeLoaders.headlines = payload;
  },
  setFeaturedLoading: (state, payload) => {
    state.homeLoaders.featured = payload;
  },
  setHomeEventsLoading: (state, payload) => {
    state.homeLoaders.events = payload;
  },
  setLeadershipLoading: (state, payload) => {
    state.homeLoaders.leadership = payload;
  },
  setHomePublicationsLoading: (state, payload) => {
    state.homeLoaders.publications = payload;
  },
};

export default {
  state,
  getters,
  mutations,
}
