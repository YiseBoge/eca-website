<template>
  <v-container
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex xs12>
        <slot />
      </v-flex>

      <feed-card
        v-for="(article, i) in paginatedArticles"
        :key="article.title"
        :size="layout[i]"
        :value="article"
      />
    </v-layout>
  </v-container>
</template>

<script>
  // Utilities
  import {mapState} from 'vuex'

  export default {
    name: 'Feed',

    components: {
      FeedCard: () => import('~/components/FeedCard')
    },

    data: () => ({
      layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
      page: 1
    }),

    computed: {
      ...mapState(['articles']),
      pages () {
        return Math.ceil(this.articles.length / 11)
      },
      paginatedArticles () {
        const start = (this.page - 1) * 11;
        const stop = this.page * 11;

        return this.articles.slice(start, stop)
      }
    },

    watch: {
      page () {
        window.scrollTo(0, 0)
      }
    }
  }
</script>
