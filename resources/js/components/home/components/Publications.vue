<template>
  <div
    class="mx-auto mt-4"
    style="overflow: auto"
  >
    <v-list class="transparent" three-line>
      <h2 class="px-3 text-primary font-weight-light display-1">Publications</h2>
      <template v-for="(item) in data">
        <v-divider
          class="my-0"
        />

        <v-list-item
          :key="item.id"
          class="pb-2"
        >

          <v-list-item-content>
            <p class="overline text-muted">{{beautifyDate(item.created_at)}}</p>
            <v-list-item-title v-html="item.title"/>
            <v-list-item-subtitle v-html="item.description"/>
            <a :href="item.file_url" class="small my-1" target="_blank" v-if="item.file_url">Download</a>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <v-flex align-self-end class="float-right">
      <router-link class="btn btn-link nav-link" to="/publications">
        See All
      </router-link>
    </v-flex>
  </div>
</template>

<script>
  import {store} from "~/store/store";

  export default {
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
    },
  }
</script>
