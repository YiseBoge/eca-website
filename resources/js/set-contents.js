import {store} from "./store/store";

export const setContent = (from, to, next) => {
  fetchContent(to);
};

function fetchContent(to) {

  switch (to.path) {
    case "/events":
      store.dispatch("setEvents", {page: 1, size: 5});
      break;

    case "/news":
      store.dispatch("setNews", {page: 1, size: 5});
      break;
  }

}
