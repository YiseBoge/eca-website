import Vue from "vue";
import Router from "vue-router";
const AppHeader = () => import("~/layout/AppHeader");
const AppFooter = () => import("~/layout/AppFooter");
const Landing = () => import("~/views/Landing.vue");
const Login = () => import("~/views/Login.vue");
const Register = () => import("~/views/Register.vue");
const Profile = () => import("~/views/Profile.vue");

const News = () => import("~/views/news/News.vue");

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/news",
      name: "news",
      components: {
        header: AppHeader,
        default: News,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return {selector: to.hash};
    } else {
      return {x: 0, y: 0};
    }
  }
});
