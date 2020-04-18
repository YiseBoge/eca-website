<template>
  <v-app id="sandbox">
    <v-container v-if="isLoggedIn">
      <v-navigation-drawer
        v-model="primaryDrawer.model"
        app class="shadow-lg" overflow
      >
        <v-img :aspect-ratio="16/9"
               src="/img/admin-head.jpg">
          <v-row align="end" class="lightbox white--text pa-2 fill-height">
            <v-col>
              <div class="subheading"></div>
              <div class="body-1"></div>
            </v-col>
          </v-row>
        </v-img>

        <v-list dense nav>
          <v-list
            justify="center"
            class="mt-5">

            <template v-for="(item, i) in urls">
              <v-divider :key="i" v-if="item.divider"/>
              <v-list-item :class="currentPage.includes(item.title.toLowerCase()) || (currentPage === '/' && item.link === '/') ? 'active-list' : ''" v-else :key="item.title" @click="route(item.link)">
                <v-list-item-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </template>
          </v-list>
        </v-list>

        <!--        <v-col-->
        <!--          cols="12"-->
        <!--          md="12"-->
        <!--        >-->
        <!--          <v-switch-->
        <!--            v-model="$vuetify.theme.dark"-->
        <!--            primary-->
        <!--            label="Dark Theme"-->
        <!--          />-->
        <!--        </v-col>-->

      </v-navigation-drawer>

    </v-container>

    <v-container v-else>
      <login v-if="!isLoggedIn" class="mt-12"/>
    </v-container>

    <v-app-bar :clipped-left="primaryDrawer.clipped" app class="shadow-lg" color="primary" dark>

      <v-app-bar-nav-icon @click.stop="primaryDrawer.model = !primaryDrawer.model" v-show="isLoggedIn"
      />


      <v-toolbar-title v-if="isLoggedIn">ECA Admin</v-toolbar-title>
      <a href="/" v-else>
        <v-toolbar-title>
          <v-img src="/img/brand/white.png" style="width: 200px">

          </v-img>
        </v-toolbar-title>
      </a>

      <v-spacer/>
      <v-menu v-if="isLoggedIn" bottom left
              :nudge-width="150">
        <template v-slot:activator="{ on }">
          <v-btn icon text v-on="on">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="route('/profile')">
            <v-list-title>Profile</v-list-title>
          </v-list-item>
          <v-list-item @click="logout_modal = true">
            <v-list-title>Logout</v-list-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>

    <v-content v-if="isLoggedIn">
      <v-container fluid id="home" style="margin-top: -24px">
        <v-row align="center" justify="center">
          <v-col class="px-12 pt-10">
            <transition name="fade" mode="out-in">
              <keep-alive>
                <router-view />
              </keep-alive>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer :inset="footer.inset" app class="shadow-lg">
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

    <v-dialog max-width="300" persistent v-model="logout_modal">
      <v-card>
        <v-card-title class="headline">Logout</v-card-title>
        <v-card-text>Are you sure you wish to logout?</v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn @click="logout_modal = false" color="secondary" text>cancel</v-btn>
          <v-btn @click="clearToken" color="primary" text top>Logout</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  import Login from "./admin/Login";
  import CoreView from "./components/core/View";
  import {router} from "./routes/admin-router";
  import {store} from "./store/store";
  import {logout} from "./admin/auth";
  import NProgress from "nprogress";

  export default {

    data: () => ({
      valid: false,
      logout_modal: false,
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      primaryDrawer: {
        model: null,
        mini: false,
      },
      footer: {
        inset: false,
      },
      profile: [
        {title: 'Profile ', to: '/profile', icon: 'mdi-account'},
        {title: 'Logout', to: '/logout', icon: 'mdi-lock'}
      ]
    }),
    methods: {
      route(link) {
        router.push(link);
      },
      clearToken() {
        this.logout_modal = false;
        logout();
      }
    },
    computed: {
      isLoggedIn() {
        return store.getters.getApiToken !== null;
      },
      urls() {
        return [
          {icon: 'mdi-home', title: 'Home', link: '/'},
          {icon: 'mdi-newspaper', title: 'News', link: '/news'},
          {icon: 'mdi-file-document', title: 'Publications', link: '/publications'},
          {icon: 'mdi-calendar', title: 'Events', link: '/events'},
          {icon: 'mdi-account-tie', title: 'Leadership', link: '/leadership'},
        ];
      },
      currentPage() {
        console.log(this.$route.path);
        return this.$route.path;
      }
    },
    components: {
      'login': Login,
      'core-view': CoreView,
    },
    created() {
      NProgress.configure({
        parent: '#home',
      });
    },
  }
</script>

<style scoped>
  .active-list{
    background-color: rgb(25,118,210, 0.1);
    color: rgb(25,118,210);
  }

  .active-list .v-icon {
    color: rgb(25,118,210);
  }

  .active-list .v-list-item__title{
    color: rgb(25,118,210);
  }
</style>

