import Vue from 'vue'

import Router from 'vue-router'
import NProgress from 'nprogress'

const Media = () => import("~/views/Media");
const Events = () => import("~/views/Events");
const NewsIndex = () => import("~/views/news/Index");
const NewsShow = () => import("~/views/news/Show");
const NotFound = () => import("~/views/errors/NotFound");
const PublicationIndex = () => import("~/views/publication/Index");
const PublicationShow = () => import("~/views/publication/Show");
const About = () => import("../views/About");

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

router.afterEach(() => {
  NProgress.done()
});

