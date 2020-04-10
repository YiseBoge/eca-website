import {logout} from "./auth";

export const errorHandler = function(err) {
  if (err.response.data.message === 'The token has been blacklisted' || err.response.data.status === 401) {
    logout();
  }
};
