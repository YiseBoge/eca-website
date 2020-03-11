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
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        text
        class="ml-0 hidden-sm-and-down"
        flat
        @click="onClick($event, item)"
      >
        {{ link.text }}
      </v-btn>
      <!--      <v-spacer/>-->

      <!--      <v-btn icon>-->
      <!--        <v-icon>mdi-magnify</v-icon>-->
      <!--      </v-btn>-->

      <!--      <v-btn icon>-->
      <!--        <v-icon>mdi-dots-vertical</v-icon>-->
      <!--      </v-btn>-->
    </v-app-bar>
  </v-card>
</template>

<script>
    // Utilities
    import {mapMutations} from 'vuex'

    export default {
        data () {
            return {
                links : [
                    {text: 'HOME', to: '/'},
                    {text: 'NEWS', to: '/news/'},
                    {text: 'EVENTS', to: '/news/events'},
                    {text: 'PUBLICATIONS', to: '/publications'},
                ]
            }
        },
        computed: {
        },

        methods: {
            ...mapMutations(['toggleDrawer']),
            onClick(e, item) {
                e.stopPropagation();

                if (item.to || !item.href) return;

                this.$vuetify.goTo(item.href)
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
