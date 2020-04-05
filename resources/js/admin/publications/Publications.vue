<template>
  <v-card>
    <delete-dialog :open="deleteDialog" :title="title" @onConfirmation="onDeleteConfirmation" />
    <v-card-title>
      Publications
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="publications"
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
        <p>No data is available</p>
      </template>
       <template v-slot:item.title="{item}">
        {{ compress(item.title) }}
      </template>
      <template v-slot:item.description="{item}">
         <p v-html="item.description"></p>
      </template>
      <template v-slot:item.actions="{ item }">
       <v-icon class="mr-2" @click="onEdit(item)">
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
  import {store} from "../../store/store";
  import {router} from "../../routes/admin-router";
  import ajax from "../../ajax";

  export default {
    name: "News",
    data() {
      return {
        deleteDialog: false,
        title: null,
        selectedPublication: null,
        headers: [
          {text: 'Title', value: 'title', width: "15%"},
          {text: 'Description', value: 'description'},
          {text: 'Category', value: 'category'},
          { text: 'Actions', value: 'actions', sortable: false },
        ],
      }
    },
    created() {
      this.fetchTableData();
    },
    methods: {
      onDeleteConfirmation(result) {
        this.deleteDialog = false;
        if (result) {
          console.log(this.selectedPublication);
          ajax.delete(`/publication/${this.selectedPublication.id}`).then(
            response => {
              this.fetchTableData();
            },
            error => {
              console.log(error);
            }
          )
        }
      },
      onDelete(item) {
        this.selectedPublication = item;
        this.title = item.title;
        this.deleteDialog = true;
      },
      onEdit(item) {
        console.log(item);
        store.dispatch('setSelectedPublication', {id: item.id});
        router.push(`/publication/${item.id}/edit`);
      },
      compress(val) {
        return val.length > 30 ? val.substr(0, 30) + '...' : val;
      },
      fetchTableData() {
        store.dispatch('setPublications', {page: 1, size: 10, year: 'All', category: ''});
      }
    },
    components: {
      'delete-dialog': DeleteDialog
    },
    computed: {
      publications() {
        return store.getters.getPublications;
      }
    }
  }
</script>

<style scoped>

</style>
