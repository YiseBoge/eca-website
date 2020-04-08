import Vue from 'vue'
import Router from 'vue-router'

import {ifAuthenticated} from "../admin/auth";

const Login = () => import('~/admin/Login');
const Welcome = () => import('~/admin/Welcome');
const NotFound = () => import('~/views/errors/NotFound');

const News = () => import('~/admin/news/News');
const AddNews = () => import('~/admin/news/AddNews');
const EditNews = () => import('~/admin/news/EditNews');

const Events = () => import('~/admin/events/Events');
const AddEvent = () => import('~/admin/events/AddEvent');
const EditEvent = () => import('~/admin/events/EditEvent');

const Publication = () => import('~/admin/publications/Publications');
const AddPublication = () => import('~/admin/publications/AddPublication');
const EditPublication = () => import('~/admin/publications/EditPublication');

const Leaders = () => import('~/admin/leadership/Leaders');
const AddLeader = () => import('~/admin/leadership/AddLeader');
const EditLeader = () => import('~/admin/leadership/EditLeader');

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  base: 'admin/#',
  routes: [
    {path: '/', name: 'welcome', component: Welcome},
    {path: '/login', name: 'login', component: Login},

    {path: '/news', name: 'news', component: News, beforeEnter: ifAuthenticated},
    {path: '/news/add-news', name: 'add news', component: AddNews, beforeEnter: ifAuthenticated},
    {path: '/news/:id/edit', name: 'edit news', component: EditNews, beforeEnter: ifAuthenticated},

    {path: '/events', name: 'events', component: Events, beforeEnter: ifAuthenticated},
    {path: '/events/add-event', name: 'add events', component: AddEvent, beforeEnter: ifAuthenticated},

    {path: '/events/:id/edit', name: 'edit event', component: EditEvent, beforeEnter: ifAuthenticated},
    {path: '/leadership', name: 'leaders', component: Leaders, beforeEnter: ifAuthenticated},

    {path: '/leadership/add-leader', name: 'add leader', component: AddLeader, beforeEnter: ifAuthenticated},
    {path: '/leadership/:id/edit', name: 'edit leader', component: EditLeader, beforeEnter: ifAuthenticated},
    {path: '/publications', name: 'publication', component: Publication, beforeEnter: ifAuthenticated},

    {
      path: '/publications/add-publication',
      name: 'add publication',
      component: AddPublication,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/publications/:id/edit',
      name: 'edit publication',
      component: EditPublication,
      beforeEnter: ifAuthenticated
    },
    {path: '*', name: 'NotFound', component: NotFound},
  ]
});
