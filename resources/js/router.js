import Vue from 'vue'
import Router from 'vue-router'
import Media from "./views/Media";
import Events from "./views/Events";
import News from "./views/News";
import NotFound from "./views/errors/NotFound";
import Publications from "./views/Publications";
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
    {path: '/news', name: 'news', component: News},
    {path: '/publications', name: 'publications', component: Publications},
    {path: '/about', name: 'about', component: About},

    {path: '*', name: 'NotFound', component: NotFound},

  ]
})