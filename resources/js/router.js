import Vue from 'vue'
import Router from 'vue-router'
import {setContent} from "./set-contents";

const Home = () => import('~/views/Home.vue');
const NewsEvents = () => import('~/components/news/Events');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', name: 'home', component: Home, beforeEnter: setContent},
    {path: '/news/events', name: 'events', component: NewsEvents, beforeEnter: setContent},
  ]
})
