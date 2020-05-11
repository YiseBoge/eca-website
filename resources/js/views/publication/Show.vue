<template>
  <v-container>
    <v-row class="pt-10" v-if="loading">
      <v-col>
        <v-skeleton-loader
          class="w-100"
          type="article"
        />
      </v-col>
    </v-row>

    <div v-else>
      <v-row class="mt-6">
        <v-col>
          <h3>{{data.title}}</h3>
          <span class="font-italic text-muted mr-2" v-text="formatToMinute(data.created_at)"/> |
          <router-link :to="'/publications'" class="ml-2" v-text="data.category"/>
        </v-col>
      </v-row>
      <v-row class="mb-6">
        <v-col>
          <div class="my-4" v-html="data.description"/>
          <a :href="server + data.file_url" class="btn btn-primary btn-sm text-white shadow-lg" target="_blank">
            <v-icon color="white" left small>mdi-download</v-icon>
            Download
          </a>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<!--<style>-->
<!--  .v-input__slot{-->
<!--    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;-->
<!--  }-->
<!--</style>-->
<script>

  import {store} from "~/store/store";
  import {SERVER_BASE_URL} from "~/ajax";

  export default {
    name: "publication-show",
    data() {
      return {
        server: SERVER_BASE_URL,
        page: 1,
        size: 5,
        len: 6,
        categories: ["Real-Time", "Trial Category", "Conversions"],
        category: 0
      }
    },
    watch: {
      '$route': 'selectPublication'
    },
    methods: {
      selectPublication() {
        store.dispatch('setSelectedPublication', {id: this.$route.params.id});
      },
    },
    created() {
      let id = this.$route.params.id;
      this.selectPublication(id);
    },
    computed: {
      data: () => store.getters.getSelectedPublication,
      loading: () => store.getters.getLoading,
    },
  }
</script>
