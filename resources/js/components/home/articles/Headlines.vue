<template>
  <v-fade-transition hide-on-leave>
    <v-skeleton-loader
      class="mt-4"
      type="card-heading,divider,list-item-three-line,divider,list-item-three-line,divider,list-item-three-line,divider,list-item-three-line,divider,actions"
      v-if="homeLoaders.headlines"
    />
    <div
      v-else
      class="mx-auto mt-4"
      style="overflow: auto"
    >

      <v-list class="transparent" three-line>
        <h2 class="px-3 font-weight-thin text-primary">Headlines</h2>
        <template v-for="(item) in data">
          <v-divider
            class="my-0"
          />

          <v-list-item
            :key="item.id"
            :to="'/news/'+item.id"
            class="pb-2"
          >

            <v-list-item-content>
              <p class="overline text-muted">{{formatToDate(item.created_at)}}</p>
              <v-list-item-title v-html="item.title"/>
              <v-list-item-subtitle v-text="htmlToText(item.description)"/>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <v-flex align-self-end class="float-right">
        <router-link class="btn btn-link nav-link" to="/news">
          More Headlines
        </router-link>
      </v-flex>
    </div>
  </v-fade-transition>
</template>

<script>

  import {store} from "~/store/store";

  export default {
    methods: {
      beautifyDate(date) {
        return date
      },
      fetchHeadlines() {
        store.dispatch('setHeadlines', {page: 1, size: 4});
      },
    },
    created() {
      this.fetchHeadlines();
    },
    computed: {
      data: () => store.getters.getHeadlines,
      homeLoaders: () => store.getters.getHomeLoaders,
    },
  }
</script>
