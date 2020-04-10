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

        <v-list nav>
          <v-list-item-group
            justify="center"
            active-class="primary--text"
            class="mt-5">

            <template v-for="(item, i) in urls">
              <v-divider :key="i" v-if="item.divider"/>
              <v-list-item v-else :key="item.title" @click="route(item.link)">
                <v-list-item-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </template>
          </v-list-item-group>
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
      <login class="mt-12"/>
    </v-container>

    <v-app-bar :clipped-left="primaryDrawer.clipped" app class="shadow-lg">

      <v-app-bar-nav-icon @click.stop="primaryDrawer.model = !primaryDrawer.model" v-show="isLoggedIn"
      />

      <v-toolbar-title>ECA Admin</v-toolbar-title>
      <v-spacer/>

      <v-menu v-if="isLoggedIn" bottom left
              :nudge-width="200"
              offset-x>
        <template v-slot:activator="{ on }">
          <v-btn text icon color="indigo" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item to="/profile">
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-title>Profile</v-list-title>
          </v-list-item>

          <v-list-item @click="clearToken">
            <v-list-item-action>
              <v-icon>mdi-lock</v-icon>
            </v-list-item-action>
            <v-list-title>Logout</v-list-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>

    <v-content v-if="isLoggedIn">
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col class="px-12 py-5">
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer :inset="footer.inset" app class="shadow-lg">
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Login from "./Login";
  import {router} from "../routes/admin-router";
  import {store} from "../store/store";
  import {logout} from "./auth";

  export default {

    data: () => ({
      valid: false,
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
          {icon: 'mdi-publish', title: 'Publications', link: '/publications'},
          {icon: 'mdi-calendar', title: 'Events', link: '/events'},
          {icon: 'mdi-account-tie', title: 'Leadership', link: '/leadership'},
        ];
      }
    },
    components: {
      'login': Login
    },
    created() {
    }
  }
</script>
