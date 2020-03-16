<template>
  <v-container>
    <v-row class="mt-6">
      <v-col>
        <h3 class="font-weight-light">{{data.title}}</h3>
        <span class="font-italic text-muted mr-2" v-text="formatToMinute(data.created_at)"/> |
        <a class="ml-2" href="#" v-text="data.category"/>
      </v-col>
    </v-row>
    <v-row class="mb-6">
      <v-col>
        <v-card :style="'background: url(' + data.image_url + ') center no-repeat;'" class="shadow-none"
                style="height: 500px; background-size: cover;"
                v-if="data.image_url"/>
        <!--        <img class="rounded shadow-sm" :src="data.image_url"/>-->
        <p class="my-4" v-html="data.description"/>
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
    name: "news-show",

    methods: {
      selectNews(id) {
        store.dispatch('setSelectedNews', {id: id});
      },
    },
    created() {
      let id = this.$route.params.id;
      this.selectNews(id);
    },
    computed: {
      data: () => store.getters.getSelectedNews,
    },
  }
</script>
