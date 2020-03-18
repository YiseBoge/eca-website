<template>
  <v-card>
    <delete-dialog :open="deleteDialog" :title="title" @onConfirmation="onDeleteConfirmation" />
    <v-card-title>
      Publications
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
            to="/publications/add-publication">Add Publication
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize">Reset
        </v-btn>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          class="mr-2"
        >
          mdi-pencil
        </v-icon>
        <v-icon color="red" @click="onDelete(item)">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>

  </v-card>
</template>

<script>
  import DeleteDialog from "../../components/core/DeleteDialog";

  export default {
    name: "Publications",
    data() {
      return {
        deleteDialog: false,
        title: null,
        headers: [
          // {text: 'Publication id', value: 'news_id'},
          {text: 'Title', value: 'title'},
          {text: 'Description', value: 'desc'},
          {text: 'Category', value: 'cate'},
          {text: 'Is featured', value: 'is_featured'},
          { text: 'Actions', value: 'actions', sortable: false },
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
      onDeleteConfirmation(result) {
        console.log(result);
        this.deleteDialog = false;
      },
      onDelete(item) {
        this.title = item.title;
        this.deleteDialog = true;
      }
    },
    components: {
      'delete-dialog': DeleteDialog
    }
  }

</script>

<style scoped>

</style>
