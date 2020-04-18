<template>
  <v-card class="px-5 py-3 shadow-lg">
    <delete-dialog :open="deleteDialog" :title="title" @onConfirmation="onDeleteConfirmation"/>

    <v-row>
      <v-col cols="8">
        <v-card-title>
          Leadership
        </v-card-title>
      </v-col>
      <v-col class="py-2" cols="4">
        <v-toolbar
          class="float-right" color="white"
          flat>
          <v-btn
            color="primary" dark
            to="/leadership/new">Add New
          </v-btn>
        </v-toolbar>
      </v-col>
    </v-row>

    <v-data-table
      :headers="headers"
      :items="leaders"
      class=" mx-auto my-auto"
    >

      <template v-slot:no-data>
        <p class="my-2">No Data Available</p>
      </template>
      <template v-slot:item.title="{item}">
        {{ compress(item.title) }}
      </template>
      <template v-slot:item.description="{item}">
        <p v-text="htmlToText(item.description)"/>
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
  import {errorHandler} from "../handle-error";

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
              errorHandler(error);
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
