import axios from "axios";

const state = {
  media: [],
  mediaMeta: {
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
  getMedia: state => {
    return state.media;
  },
  getMediaMeta: state => {
    return state.mediaMeta;
  }
};

const mutations = {
  setMedia: (state, payload) => {
    state.media = payload;
  },
  setMediaMeta: (state, payload) => {
    state.mediaMeta = payload;
  }
};

const actions = {
  setMedia: ({commit}) => {
    const api_key = "AIzaSyA4KV_OLJdpgW8siGNYRVsTXNcZr4sjSCA";
    const max_results = 100;
    const playlistId = "UUrBY82taQkWw11GjsFgeusg";

    const url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UUrBY82taQkWw11GjsFgeusg&key=AIzaSyA4KV_OLJdpgW8siGNYRVsTXNcZr4sjSCA";
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
        commit('setMedia', ret);
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
