import Vue from 'vue'
import Router from 'vue-router'
import NotFound from "../views/errors/NotFound";

const Dashboard = () => import('~/admin/Dashboard');

const News = () => import('~/admin/news/News');
const AddNews = () => import('~/admin/news/AddNews');
const EditNews = () => import('~/admin/news/EditNews');

const Events = () => import('~/admin/events/Events');
const AddEvent = () => import('~/admin/events/AddEvent');
const EditEvent = () => import('~/admin/events/EditEvent');

const Publication = () => import('~/admin/publications/Publications');
const AddPublication = () => import('~/admin/publications/AddPublication');

const Leaders = () => import('~/admin/leadership/Leaders');
const AddLeader = () => import('~/admin/leadership/AddLeader');

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  base: 'admin/#',
  routes: [
    {path: '/', name: 'dashboard', component: Dashboard},
    {path: '/news', name: 'news', component: News},
    {path: '/news/add-news', name: 'add news', component: AddNews},
    {path: '/news/:id/edit', name: 'edit news', component: EditNews},
    {path: '/events', name: 'events', component: Events},
    {path: '/events/add-event', name: 'add events', component: AddEvent},
    {path: '/events/:id/edit', name: 'edit event', component: EditEvent},
    {path: '/leaders', name: 'leaders', component: Leaders},
    {path: '/leaders/add-leader', name: 'add leader', component: AddLeader},
    {path: '/publications', name: 'publication', component: Publication},
    {path: '/publications/add-publication', name: 'add publication', component: AddPublication},
    {path: '*', name: 'NotFound', component: NotFound},
  ]
});
