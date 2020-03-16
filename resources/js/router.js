import Vue from 'vue'
import Router from 'vue-router'
import Media from "./views/Media";
import Events from "./views/Events";
import NewsIndex from "./views/news/Index";
import NotFound from "./views/errors/NotFound";
import PublicationIndex from "./views/publication/Index";
import About from "./views/About";

const Home = () => import('~/views/Home.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/#',
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/events', name: 'events', component: Events},
    {path: '/media', name: 'media', component: Media},
    {path: '/news', name: 'news', component: NewsIndex},
    {path: '/news/:id', name: 'news-show', component: NewsIndex},
    {path: '/publications', name: 'publications', component: PublicationIndex},
    {path: '/about', name: 'about', component: About},

    {path: '*', name: 'NotFound', component: NotFound},

  ]
})
