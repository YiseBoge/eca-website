import {store} from "../store/store";
import {router} from "../routes/admin-router";
import ajax from "../ajax";
import {errorHandler} from "./handle-error";

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

export const logout = () => {
  store.dispatch('resetUser').then();
  ajax.post('auth/logout').then(
    res => {
      store.dispatch('resetUser');
      router.push('/').then();
    },
    err => {
      errorHandler(err);
    }
  );
};
