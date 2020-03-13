import Vue from 'vue'
import Router from 'vue-router'
import Media from "./components/Media";
import Events from "./components/events/Events";

import {setContent} from "./set-contents";

const Home = () => import('~/views/Home.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', name: 'home', component: Home, afterEnter: setContent},
    {path: '/news/events', name: 'events', component: Events, afterEnter: setContent},
    {path: '/media', name: 'media', component: Media, afterEnter: setContent},
  ]
});

export const adminRoute = new Router({
  mode: 'history',
  base: 'dashboard/',
  routes: [
    {path: '/', name: 'dashboard', component: () => import('~/admin-dashboard/Dashboard')}
  ]
});
