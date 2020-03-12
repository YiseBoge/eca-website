import Vue from 'vue'
import Router from 'vue-router'
import Media from "./components/Media";
import Events from "./components/home/Events";

const Home = () => import('~/views/Home.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/news/events', name: 'events', component: Events},
    {path: '/media', name: 'media', component: Media},
  ]
})
