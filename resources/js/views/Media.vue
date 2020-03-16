<template>
  <v-container>
    <v-row class="mt-6">
      <v-col md="8">
        <h1 class="font-weight-thin">Media</h1>
      </v-col>
      <v-col md="4">
        <a class="ma-2 text-white float-right shadow-lg btn-danger btn btn-sm" href="https://www.youtube.com"
           target="_blank">
          <v-icon color="white" left small>mdi-youtube</v-icon>
          Subscribe
        </a>
      </v-col>
    </v-row>

    <v-row>
      <v-col :key="image.href" class="p-3" cols="4" v-for="(image, imageIndex) in data">
        <v-hover
          close-delay="50"
          v-slot:default="{ hover }"
        >
          <v-card
            :class="hover ? 'shadow' : 'shadow-lg'" @click="index = imageIndex"
          >
            <v-img
              :src="image.poster"
              height="150px"
            />

            <v-tooltip bottom open-delay="1500">
              <template v-slot:activator="{ on }">
                <v-card-title class="lead text-truncate d-inline-block w-100 pb-0" style="font-size: 1em" v-on="on">
                  {{image.title}}
                </v-card-title>
              </template>
              <span>{{image.title}}</span>
            </v-tooltip>


            <v-card-actions class="pt-0">
              <v-btn color="orange" text>Watch</v-btn>
            </v-card-actions>

          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <v-row class="py-5">
      <v-pagination
        :length="len"
        v-model="page"
      />
    </v-row>
    <gallery
      :images="data"
      :index="index"
      :options="{youTubeVideoIdProperty: 'youtube', youTubePlayerVars: undefined, youTubeClickToPlay: true}"
      @close="index = null"
    />
  </v-container>
</template>

<style>
  a.close, a.prev, a.next {
    color: white !important;
  }
</style>

<script>
  // Utilities
  import VueGallery from 'vue-gallery';
  import {store} from "~/store/store";

  export default {
    data: () => ({
      index: null
    }),
    components: {
      'gallery': VueGallery
    },
    methods: {
      fetchMedia() {
        store.dispatch('setMedia');
      },
    },
    created() {
      this.fetchMedia();
    },
    computed: {
      data: () => store.getters.getMedia,
    },
  }
</script>
