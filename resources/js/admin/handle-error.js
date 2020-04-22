import {logout} from "./auth";
import {store} from "../store/store";

export const errorHandler = function(err) {
  if (err.response.data.message === 'The token has been blacklisted' || err.response.data.status === 401) {
    store.dispatch("setStateMessage", "Sorry, You have to re-login!");
    logout();
  }
};
