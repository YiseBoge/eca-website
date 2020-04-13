import axios from 'axios';
import {store} from "./store/store"
export const SERVER_BASE_URL = "localhost";

const ajax = axios.create({
  baseURL: (process.env.VUE_APP_BASE_URL !== undefined) ? process.env.VUE_APP_BASE_URL : SERVER_BASE_URL + '/api/'
});

ajax.CancelToken = axios.CancelToken;
ajax.isCancel = axios.isCancel;
/*
 * The interceptor here ensures that we check for the token in local storage every time an ajax request is made
 */
ajax.interceptors.request.use(
  (config) => {
    let token = store.getters.getApiToken;

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
      config.headers.post['Content-Type'] = 'multipart/form-data';
    }

    return config
  },

  (error) => {
    return Promise.reject(error)
  }
);

export default ajax
