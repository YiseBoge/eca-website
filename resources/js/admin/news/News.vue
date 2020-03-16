<template>
  <v-card>
    <v-card-title>
      News
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="calories"
      class=" mx-auto my-auto"
    >
      <template v-slot:top>
        <v-toolbar
          flat
          color="white">
          <v-btn
            color="primary"
            dark
            class="mb-2"
            to="/news/add-news">Add News
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize">Reset
        </v-btn>
      </template>
    </v-data-table>

  </v-card>
</template>

<script>
  export default {
    name: "News",
    data() {
      return {
        headers: [
          {text: 'News id', value: 'news_id'},
          {text: 'Title', value: 'title'},
          {text: 'Description', value: 'desc'},
          {text: 'Category', value: 'cate'},
          {text: 'Is featured', value: 'is_featured'},
        ],
        desserts: [],
      }
    },
    created() {
      this.initialize()
    },
    methods: {
      initialize() {
        this.desserts = [
          {
            news_id: 1,
            title: 'Something is happening in ECA',
            desc: 'some description goes here',
            cate: 'Politics',
            is_featured: 'No',
          },
        ]
      },
    }
  }

</script>

<style scoped>

</style>
