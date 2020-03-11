<template>
  <v-container pa-0>
    <gallery
      :images="images"
      :index="index"
      :options="{youTubeVideoIdProperty: 'youtube', youTubePlayerVars: undefined, youTubeClickToPlay: true}"
      @close="index = null"
    />
    <div
      :style="{ backgroundImage: 'url(' + image.poster + ')', width: '300px', height: '200px' }"
      @click="index = imageIndex"
      class="image"
      v-for="image, imageIndex in images"
    ></div>
  </v-container>
</template>

<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
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
            title: 'A YouYube video',
            href: 'https://www.youtube.com/watch?v=hNdlUHBJDKs',
            type: 'text/html',
            youtube: 'hNdlUHBJDKs',
            poster: 'https://img.youtube.com/vi/hNdlUHBJDKs/maxresdefault.jpg'
          },
          {
            title: 'A YouYube video 2',
            href: 'https://www.youtube.com/watch?v=s5iUsaPPtnk',
            type: 'text/html',
            youtube: 's5iUsaPPtnk',
            poster: 'https://img.youtube.com/vi/s5iUsaPPtnk/maxresdefault.jpg'
          },
          {
            title: 'Image',
            href: 'https://dummyimage.com/1600/ffffff/000000',
            type: 'image/jpeg',
            poster: 'https://dummyimage.com/350/ffffff/000000'
          }
        ],
        index: null
      }
    },
    components: {
      'gallery': VueGallery
    }
  }
</script>
