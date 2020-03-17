import axios from "axios";

const state = {
  media: [],
  pageToken: null,
};

const getters = {
  getMedia: state => {
    return state.media;
  },
  getPageToken: state => {
    return state.pageToken;
  }
};

const mutations = {
  addMedia: (state, payload) => {
    // console.log(payload);
    state.media = state.media.concat(payload);
  },
  setPageToken: (state, payload) => {
    state.pageToken = payload;
  }
};

const actions = {
  setMedia: ({commit}, {pageToken}) => {
    const api_key = "AIzaSyA4KV_OLJdpgW8siGNYRVsTXNcZr4sjSCA";
    const max_results = "12";
    const playlistId = "UUrBY82taQkWw11GjsFgeusg";
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${max_results}&playlistId=${playlistId}&key=${api_key}${pageToken ? '&pageToken=' + pageToken : ''}`;

    commit('setLoading', true);
    axios.get(url).then(
      response => {
        console.log(response);
        let ret = [];
        let res = response.data.items;
        res.forEach((vid) => {
          ret.push(
            {
              title: vid.snippet.title,
              href: `https://www.youtube.com/watch?v=${vid.snippet.resourceId.videoId}`,
              type: 'text/html',
              youtube: vid.snippet.resourceId.videoId,
              poster: vid.snippet.thumbnails.high.url
            }
          )
        });
        commit('addMedia', ret);
        commit('setPageToken', response.data.nextPageToken);
        commit('setLoading', false);
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
