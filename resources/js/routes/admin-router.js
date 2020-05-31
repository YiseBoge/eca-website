import Vue from 'vue'
import Router from 'vue-router'

import {ifAuthenticated} from "../admin/auth";
import NProgress from "nprogress";

const Login = () => import('~/admin/Login');
const Profile = () => import('~/admin/Profile');
const Welcome = () => import('~/admin/Welcome');
const NotFound = () => import('~/admin/errors/NotFound');

const News = () => import('~/admin/news/News');
const AddNews = () => import('~/admin/news/AddNews');
const EditNews = () => import('~/admin/news/EditNews');

const Events = () => import('~/admin/events/Events');
const AddEvent = () => import('~/admin/events/AddEvent');
const EditEvent = () => import('~/admin/events/EditEvent');

const Publication = () => import('~/admin/publications/Publications');
const AddPublication = () => import('~/admin/publications/AddPublication');
const EditPublication = () => import('~/admin/publications/EditPublication');

const Tender = () => import('~/admin/tenders/Tenders');
const AddTender = () => import('~/admin/tenders/AddTender');
const EditTender = () => import('~/admin/tenders/EditTender');

const Leaders = () => import('~/admin/leadership/Leaders');
const AddLeader = () => import('~/admin/leadership/AddLeader');
const EditLeader = () => import('~/admin/leadership/EditLeader');

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  base: '/admin',
  routes: [
    {path: '/news', name: 'news', component: News, beforeEnter: ifAuthenticated},
    {path: '/news/new', name: 'add news', component: AddNews, beforeEnter: ifAuthenticated},
    {path: '/news/:id/edit', name: 'edit news', component: EditNews, beforeEnter: ifAuthenticated},

    {path: '/events', name: 'events', component: Events, beforeEnter: ifAuthenticated},
    {path: '/events/new', name: 'add events', component: AddEvent, beforeEnter: ifAuthenticated},
    {path: '/events/:id/edit', name: 'edit event', component: EditEvent, beforeEnter: ifAuthenticated},

    {path: '/leadership', name: 'leaders', component: Leaders, beforeEnter: ifAuthenticated},
    {path: '/leadership/new', name: 'add leader', component: AddLeader, beforeEnter: ifAuthenticated},
    {path: '/leadership/:id/edit', name: 'edit leader', component: EditLeader, beforeEnter: ifAuthenticated},

    {path: '/publications', name: 'publication', component: Publication, beforeEnter: ifAuthenticated},
    {path: '/publications/new', name: 'add publication', component: AddPublication, beforeEnter: ifAuthenticated},
    {
      path: '/publications/:id/edit',
      name: 'edit publication',
      component: EditPublication,
      beforeEnter: ifAuthenticated
    },

    {path: '/tenders', name: 'tender', component: Tender, beforeEnter: ifAuthenticated},
    {path: '/tenders/new', name: 'add tender', component: AddTender, beforeEnter: ifAuthenticated},
    {path: '/tenders/:id/edit', name: 'edit tender', component: EditTender, beforeEnter: ifAuthenticated},

    {path: '/profile', name: 'profile', component: Profile},
    {path: '/login', name: 'login', component: Login},
    {path: '/', name: 'welcome', component: Welcome},

    {path: '*', name: 'NotFound', component: NotFound},
  ]
});

router.afterEach(() => {
  NProgress.done()
});
