import {store} from "../store/store";
import {router} from "../routes/admin-router";

export const ifNotAuthenticated = (to, from, next) => {
  store.dispatch("resetMessage").then();
  if (store.getters.getApiToken !== null) {
    next();
    return // return if not authenticated
  }
  next('/')
};

export const ifAuthenticated = (to, from, next) => {
  store.dispatch("resetMessage").then();
  if (store.getters.getApiToken !== null) {
    next();
    return
  }
  router.push("/login").then();
};
