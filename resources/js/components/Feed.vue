<template>
  <v-container
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex xs12>
        <v-card
          class="mx-auto row shadow-lg overflow-hidden"
          height="200" outlined
        >
          <div class="col-md-7">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Featured</div>
                <v-list-item-title class="headline mb-1">{{data[0].title}}</v-list-item-title>
                <v-list-item-subtitle>
                  {{data[0].description}}
                </v-list-item-subtitle>
              </v-list-item-content>

            </v-list-item>
            <v-card-actions>
              <v-btn
                color="primary accent-4" text
              >
                Read More
              </v-btn>
            </v-card-actions>
          </div>
          <div class="col-md-5"
               style="background: url('https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') center;
         background-size: cover;"
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
      FeedCard: () => import('~/components/FeedCard')
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
