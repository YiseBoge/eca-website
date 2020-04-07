<template>
  <v-container>
    <v-row class="mt-6">
      <v-col>
        <h3 class="font-weight-light">{{data.title}}</h3>
        <span class="font-italic text-muted mr-2" v-text="formatToMinute(data.created_at)"/> |
        <router-link :to="'/publications'" class="ml-2" v-text="data.category"/>
      </v-col>
    </v-row>
    <v-row class="mb-6">
      <v-col>
        <!--        <v-card :style="'background: url(' + data.image_url + ') center no-repeat;'" class="shadow-none"-->
        <!--                style="height: 500px; background-size: cover;"-->
        <!--                v-if="data.image_url"/>-->
        <!--        <img class="rounded shadow-sm" :src="data.image_url"/>-->
        <p class="my-4" v-html="data.description"/>
        <a :href="data.file_url" class="btn btn-primary btn-sm text-white shadow-lg" target="_blank">
          <v-icon color="white" left small>mdi-download</v-icon>
          Download
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<!--<style>-->
<!--  .v-input__slot{-->
<!--    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;-->
<!--  }-->
<!--</style>-->
<script>

  import {store} from "~/store/store";

  export default {
    name: "publication-show",
    data() {
      return {
        page: 1,
        size: 5,
        len: 6,
        categories: ["Real-Time", "Trial Category", "Conversions"],
        category: 0
      }
    },
    methods: {
      selectPublication(id) {
        store.dispatch('setSelectedPublication', {id: id});
      },
    },
    created() {
      let id = this.$route.params.id;
      this.selectPublication(id);
    },
    computed: {
      data: () => store.getters.getSelectedPublication,
    },
  }
</script>
