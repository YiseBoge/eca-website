import Vue from 'vue'
import Router from 'vue-router'
import NotFound from "../views/errors/NotFound";

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  base: 'admin/',
  routes: [
    {path: '/', name: 'dashboard', component: () => import('~/admin-dashboard/Dashboard')},
    {path: '*', name: 'NotFound', component: NotFound},
  ]
});
