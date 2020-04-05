<template>
  <v-card>
    <delete-dialog :open="deleteDialog" :title="title" @onConfirmation="onDeleteConfirmation"/>
    <v-card-title>
      Leadership
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="leaders"
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
            to="/leadership/add-leader">Add Leader
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
    name: "Leadership",
    data() {
      return {
        deleteDialog: false,
        title: null,
        selectedLeader: null,
        headers: [
          {text: 'Name', value: 'name', width: "15%"},
          {text: 'Position', value: 'position'},
          {text: 'Level', value: 'level'},
          {text: 'Description', value: 'description'},
          {text: 'Actions', value: 'actions', sortable: false},
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
          console.log(this.selectedLeader);
          ajax.delete(`/leadership/${this.selectedLeader.id}`).then(
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
        this.selectedLeader = item;
        this.title = item.name;
        this.deleteDialog = true;
      },
      onEdit(item) {
        console.log(item);
        store.dispatch('setSelectedLeader', {id: item.id});
        router.push(`/leadership/${item.id}/edit`);
      },
      compress(val) {
        return val.length > 30 ? val.substr(0, 30) + '...' : val;
      },
      fetchTableData() {
        store.dispatch('setLeaders', {page: 1, size: 10});
      }
    },
    components: {
      'delete-dialog': DeleteDialog
    },
    computed: {
      leaders() {
        return store.getters.getLeaders;
      }
    }
  }

</script>

<style scoped>

</style>
