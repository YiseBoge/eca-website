<template>
  <v-container
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex xs12>
        <v-card
          class="mx-auto row shadow-lg overflow-hidden"
          height="210" outlined
        >
          <div class="col-md-8">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Featured</div>
                <v-list-item-title class="headline mb-1">{{data[0].title}}</v-list-item-title>
                <v-list-item-subtitle v-text="htmlToText(data[0].description)"/>
                <small class="overline text-muted mt-1" v-text="formatToDate(data[0].created_at)"/>
              </v-list-item-content>

            </v-list-item>
            <v-card-actions class="pt-0">
              <v-btn
                color="primary accent-4" text
                :to="'/news/'+data[0].id"
              >
                Read More
              </v-btn>
            </v-card-actions>
          </div>
          <div class="col-md-4"
               :style="'background: url(' + data[0].image_url +') center;'"
               style="background-size: cover;"
          >
          </div>
        </v-card>
      </v-flex>

      <feed-card
        :key="article.id"
        :size="2" :value="article" v-for="(article) in [data[1], data[2]]"
      />
    </v-layout>
  </v-container>
</template>

<script>

  import {store} from "~/store/store";

  export default {
    name: 'Feed',

    components: {
      FeedCard: () => import('~/components/home/articles/FeedCard')
    },

    methods: {
      fetchFeatured() {
        store.dispatch('setFeatured', {page: 1, size: 3});
      },
    },
    created() {
      this.fetchFeatured();
    },
    computed: {
      data: () => store.getters.getFeatured,
    },
  }
</script>
