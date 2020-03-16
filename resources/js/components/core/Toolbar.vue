<template>
  <v-card class="overflow-hidden" raised tile>
    <v-app-bar
      color="blue accent-2"
      dark
    >
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
    </v-app-bar>
  </v-card>
</template>

<script>
  // Utilities
  import {mapMutations} from 'vuex'

  export default {
    data() {
      return {
        links: [
          {text: 'HOME', to: '/'},
          {text: 'ABOUT US', to: '/about'},
          {text: 'NEWS', to: '/news'},
          {text: 'PUBLICATIONS', to: '/publications'},
          {text: 'EVENTS', to: '/events'},
          {text: 'MEDIA', to: '/media'},
        ]
      }
        },
        computed: {
        },

        methods: {
            ...mapMutations(['toggleDrawer']),
            onClick(e, item) {
                e.stopPropagation();

              if (!item.to) return;

              this.$vuetify.goTo(item.to)
            }
        }
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
