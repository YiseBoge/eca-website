
<template>
  <v-app id="sandbox">
    <v-container v-if="isLoggedIn">
      <v-navigation-drawer
        v-model="primaryDrawer.model"
        app
        overflow
        class="shadow-lg elevation-3"
      >
        <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
          <v-row align="end" class="lightbox white--text pa-2 fill-height">
            <v-col>
              <div class="subheading"></div>
              <div class="body-1" ></div>
            </v-col>
          </v-row>
        </v-img>

        <v-list nav>
          <v-list-item-group
            justify="center"
            active-class="deep-purple--text text--accent-4"
            class="mt-5">

            <template v-for="(item, i) in urls">
              <v-divider v-if="item.divider" :key="i"></v-divider>
              <v-list-item v-else :key="item.title" @click="route(item.link)">
                <v-list-item-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </template>
          </v-list-item-group>
        </v-list>

        <v-col
          cols="12"
          md="12"
        >
          <v-switch
            v-model="$vuetify.theme.dark"
            primary
            label="Dark Theme"
          ></v-switch>
        </v-col>

      </v-navigation-drawer>

    </v-container>

    <v-app-bar :clipped-left="primaryDrawer.clipped" app>

      <v-app-bar-nav-icon v-show="isLoggedIn"
                          @click.stop="primaryDrawer.model = !primaryDrawer.model"
      ></v-app-bar-nav-icon>

      <v-toolbar-title> Admin Panel</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-form v-model="valid" v-show="isLoggedIn">
        <input type="hidden" name="_token"> <!--:value="csrf" -->
        <v-spacer></v-spacer>
        <v-btn text icon color="indigo" @click="logout">
          <v-icon>mdi-account-lock</v-icon>
        </v-btn>
      </v-form>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="10">

            <router-view></router-view>

          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer :inset="footer.inset" app>
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
    import {router} from "../routes/admin-router";
    import {store} from "../store/store";

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
            // csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        }),
        methods: {
            route(link) {
                router.push(link);
            },
            logout() {
                store.dispatch('resetUser');
                router.push('/login').then();
            }
        },
        computed: {
            isLoggedIn() {
                return true;
            },
            urls() {
                return [
                    {icon: 'mdi-newspaper', title: 'News', link: 'news'},
                    {icon: 'mdi-publish', title: 'Publishes', link: 'publishes'},
                    {icon: 'mdi-calendar', title: 'Events', link: 'events'},
                    {icon: 'mdi-account-tie', title: 'Leadership', link: 'leadership'},
                ];
            }
        }
    }
</script>
<style scoped></style>
