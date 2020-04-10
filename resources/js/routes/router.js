import Vue from 'vue'
import Router from 'vue-router'
import Media from "../views/Media";
import Events from "../views/Events";
import NewsIndex from "../views/news/Index";
import NewsShow from "../views/news/Show";
import NotFound from "../views/errors/NotFound";
import PublicationIndex from "../views/publication/Index";
import PublicationShow from "../views/publication/Show";
import About from "../views/About";

const Home = () => import('~/views/Home.vue');

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/events', name: 'events', component: Events},
    {path: '/media', name: 'media', component: Media},

    {path: '/news/:id', name: 'news-show', component: NewsShow},
    {path: '/news', name: 'news-index', component: NewsIndex},

    {path: '/publications/:id', name: 'publication-show', component: PublicationShow},
    {path: '/publications', name: 'publication-index', component: PublicationIndex},

    {path: '/about', name: 'about', component: About},

    {path: '*', name: 'NotFound', component: NotFound},
  ]
});
