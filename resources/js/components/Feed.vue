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

  export default {
    name: 'Feed',

    components: {
      FeedCard: () => import('~/components/FeedCard')
    },

    data: () => ({
      paginatedArticles: [
        {
          title: "Moroccan Days",
          author: "It is a long established fact that a reader will be distracted by the readable",
          category: "Travel",
          hero: "moroccandays.jpg"
        },
        {
          title: "Swedish Fishing",
          author: "There are many variations of passages of Lorem Ipsum available",
          category: "Leisure",
          hero: "autumnclouds.jpg"
        }
      ],
      layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
      page: 1
    }),

    computed: {
      pages () {
        return Math.ceil(this.articles.length / 11)
      },
    },

    watch: {
      page () {
        window.scrollTo(0, 0)
      }
    }
  }
</script>
