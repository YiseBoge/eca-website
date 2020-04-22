<template>
  <v-container
    grid-list-xl
  >
    <v-container v-if="!homeLoaders.featured && data.length === 0">
      <v-row>
        <v-col>
          <p class="text-muted text-center mt-3"
             v-text="'No Featured News'"/>
        </v-col>
      </v-row>
    </v-container>

    <v-fade-transition hide-on-leave>
      <v-container v-if="homeLoaders.featured">
        <v-row>
          <v-col cols="12">
            <v-skeleton-loader class="shadow-lg w-100"
                               max-height="200px"
                               type="image"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-skeleton-loader
              class="shadow-lg w-100"
              type="card"
            />
          </v-col>
          <v-col cols="6">
            <v-skeleton-loader
              class="shadow-lg w-100"
              type="card"
            />
          </v-col>
        </v-row>
      </v-container>

      <v-layout v-else wrap>
        <v-flex xs12>
          <v-card v-if="data.length >= 1"
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
                <v-btn color="primary accent-4"
                  @click="$router.push(`/news/${data[0].id}`)"
                  text
                >
                  Read More
                </v-btn>
              </v-card-actions>
            </div>
            <div :style="'background: url(' + data[0].image_url +') center; background-size: cover;'"
                 class="col-md-4"
            >
            </div>
          </v-card>
        </v-flex>

        <feed-card
          :key="data[1].id" :size="2"
          :value="data[1]" v-if="data.length >= 2"
        />
        <feed-card
          :key="data[2].id" :size="2"
          :value="data[2]" v-if="data.length >= 3"
        />
      </v-layout>
    </v-fade-transition>
  </v-container>
</template>

<script>

  import {store} from "~/store/store";
  import {SERVER_BASE_URL} from "~/ajax";

  export default {
    name: 'Feed',
    data() {
      return {
        server: SERVER_BASE_URL,
      }
    },
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
      homeLoaders: () => store.getters.getHomeLoaders,
    },
  }
</script>
