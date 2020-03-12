<template>
  <v-container>
    <gallery
      :images="images"
      :index="index"
      :options="{youTubeVideoIdProperty: 'youtube', youTubePlayerVars: undefined, youTubeClickToPlay: true}"
      @close="index = null"
    />
    <v-row class="mt-2">
      <v-col md="8">
        <h2 class="text-primary font-weight-light">Check out our Youtube Channel</h2>
      </v-col>
      <v-col md="4">
        <v-btn class="ma-2 text-white float-right shadow-lg" color="red" small>
          <v-icon left small>mdi-youtube</v-icon>
          Subscribe
        </v-btn>
      </v-col>
    </v-row>
    <v-divider class="mt-0 shadow-lg"/>
    <v-row dense>
      <v-col :key="image.href" class="p-3" cols="4" v-for="(image, imageIndex) in images">
        <v-card
          @click="index = imageIndex" class="shadow-lg"
          hover
        >
          <v-img
            :src="image.poster"
            height="200px"
          />

          <v-card-title class="lead">
            {{image.title}}
          </v-card-title>

          <v-card-actions>
            <v-btn color="orange" text>Watch</v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
    <v-row class="py-5">
      <v-pagination
        :length="len"
        tile
        v-model="page"
      />
    </v-row>
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

  export default {
    data() {
      return {
        images: [
          {
            title: 'The Mars Homes That NASA Awarded $500k',
            href: 'https://www.youtube.com/watch?v=hNdlUHBJDKs',
            type: 'text/html',
            youtube: 'hNdlUHBJDKs',
            poster: 'https://img.youtube.com/vi/hNdlUHBJDKs/maxresdefault.jpg'
          },
          {
            title: 'STEMpower Ethiopia, Episode 38: STEMpower\'s STEM Center Students Innovations',
            href: 'https://www.youtube.com/watch?v=s5iUsaPPtnk',
            type: 'text/html',
            youtube: 's5iUsaPPtnk',
            poster: 'https://louisem.com/wp-content/uploads/2017/07/youtube-thumbnail-templates.jpg'
          },
          {
            title: 'STEMpower Ethiopia, Episode 35: Problem Solving Students Innovation',
            href: 'https://www.youtube.com/watch?v=s5iUsaPPtnk',
            type: 'text/html',
            youtube: 's5iUsaPPtnk',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtP1IHm_ovH0cDtsBWna_2iKTGQwBtyRxTrbMhogct9UfAn3NL'
          },
          {
            title: 'A YouYube video 2',
            href: 'https://www.youtube.com/watch?v=s5iUsaPPtnk',
            type: 'text/html',
            youtube: 's5iUsaPPtnk',
            poster: 'https://louisem.com/wp-content/uploads/2017/07/youtube-thumbnail-templates.jpg'
          },
          {
            title: 'Top western road trips tahjdfg efger gerhe dghe rfghwer ghweth werwerth wefhy3rt',
            href: 'https://www.youtube.com/watch?v=hNdlUHBJDKs',
            type: 'text/html',
            youtube: 'hNdlUHBJDKs',
            poster: 'https://img.youtube.com/vi/hNdlUHBJDKs/maxresdefault.jpg'
          },
          {
            title: 'Image',
            href: 'https://dummyimage.com/1600/ffffff/000000',
            type: 'image/jpeg',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtP1IHm_ovH0cDtsBWna_2iKTGQwBtyRxTrbMhogct9UfAn3NL'
          }
        ],
        page: 1,
        len: 6,
        index: null
      }
    },
    components: {
      'gallery': VueGallery
    }
  }
</script>
