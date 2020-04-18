<template>
  <div>
    <v-card class="overflow-hidden" raised tile>
      <v-app-bar
        class="px-md-12"
        color="primary"
        dark
      >
        <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click.stop="drawer = !drawer"/>

        <!--      <v-spacer/>-->
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
          />
        </template>
        <router-link to="/">
          <v-toolbar-title>
            <v-img src="/img/brand/white.png" style="width: 200px">

            </v-img>
          </v-toolbar-title>
        </router-link>
        <v-spacer/>
        <v-btn
          :key="i" :to="link.to" class="ml-0 hidden-sm-and-down"
          flat text v-for="(link, i) in links"
          @click="onClick($event, link)"
        >
          {{ link.text }}
        </v-btn>
        <!--      <v-spacer/>-->
      </v-app-bar>
    </v-card>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.smAndDown"
      v-model="drawer"
      absolute
      temporary
    >
      <v-list dense nav>
        <v-list-item-group
          justify="center"
          active-class="primary--text"
          class="mt-5">

          <template v-for="(item, i) in links">
            <v-list-item :key="item.text" @click="route(item.to)" active
                         :class="currentPage === item.to ? 'primary--text v-list-item--active' : ''">
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>
  </div>
</template>

<script>
  // Utilities
  import {mapMutations} from 'vuex'
  import {router} from "~/routes/router";

  export default {
    data() {
      return {
        drawer: false,
        group: null,
        links: [
          {text: 'HOME', icon: 'mdi-home', to: '/'},
          {text: 'ABOUT US', icon: 'mdi-information', to: '/about'},
          {text: 'NEWS', icon: 'mdi-newspaper', to: '/news'},
          {text: 'PUBLICATIONS', icon: 'mdi-file-document', to: '/publications'},
          {text: 'EVENTS', icon: 'mdi-calendar', to: '/events'},
          {text: 'MEDIA', icon: 'mdi-folder-multiple-image', to: '/media'},
        ]
      }
    },
    computed: {
      currentPage() {
        console.log(this.$route.path);
        return this.$route.path;
      },
    },
    methods: {
      route(link) {
        router.push(link);
        this.drawer = false;
      },
      ...mapMutations(['toggleDrawer']),
      onClick(e, item) {
        e.stopPropagation();

        if (!item.to) return;

        this.$vuetify.goTo(item.to)
      }
    },
    watch: {
      group() {
        this.drawer = false
      },
    },
  }
</script>

<style scoped>
  body::-webkit-scrollbar {
    width: 1px !important;
  }

  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  v-app-bar {
    font-family: 'IBM Plex Serif', serif !important;
  }
</style>
