<template>
  <div
    class="mx-auto mt-4"
    style="overflow: auto"
  >
    <v-fade-transition hide-on-leave>
      <v-skeleton-loader
        class="mt-4"
        type="card-heading,divider,list-item-three-line,divider,list-item-three-line,divider,list-item-three-line,divider,list-item-three-line,divider,actions"
        v-if="homeLoaders.publications"
      />

      <v-list class="transparent" three-line v-else>
        <h2 class="px-3 text-primary display-1">Publications</h2>
        <v-divider
          class="my-0"
        />
        <p class="text-muted text-center mt-3"
           v-if="data.length === 0"
           v-text="'Found Nothing'"/>
        <template v-for="(item) in data">
          <v-list-item
            :key="item.id"
          >

            <v-list-item-content>
              <p class="overline text-muted">{{formatToDate(item.created_at)}}</p>
              <v-list-item-title v-text="item.title"/>
              <v-list-item-subtitle v-text="htmlToText(item.list_description)"/>
              <p class="pt-1">
                <router-link :to="`/publications/${item.id}`" class="small d-inline text-primary">Read More</router-link>
                <a :href="server + item.file_url" class="small d-inline text-primary float-right" target="_blank" v-if="item.file_url">Download</a>
              </p>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-fade-transition>
    <v-flex align-self-end class="float-right" v-if="data.length !== 0">
      <router-link class="btn btn-link nav-link" to="/publications">
        See All
      </router-link>
    </v-flex>
  </div>
</template>

<script>
  import {store} from "~/store/store";
  import {SERVER_BASE_URL} from "~/ajax";

  export default {
    data() {
      return {
        server: SERVER_BASE_URL,
      }
    },
    methods: {
      beautifyDate(date) {
        return date
      },
      fetchPublications() {
        store.dispatch('setHomePublications', {page: 1, size: 4});
      },
    },
    created() {
      this.fetchPublications();
    },
    computed: {
      data: () => store.getters.getHomePublications,
      homeLoaders: () => store.getters.getHomeLoaders,
    },
  }
</script>
