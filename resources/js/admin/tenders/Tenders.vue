<template>
  <v-card class="px-5 py-3 shadow-lg">
    <delete-dialog :open="deleteDialog" :title="title" @onConfirmation="onDeleteConfirmation"/>

    <v-row>
      <v-col cols="8">
        <v-card-title>
          Tenders
        </v-card-title>
      </v-col>
      <v-col class="py-2" cols="4">
        <v-toolbar
          class="float-right" color="white"
          flat>
          <v-btn @click="$router.push('/tenders/new')"
                 color="primary" dark
          >Add New
          </v-btn>
        </v-toolbar>
      </v-col>
    </v-row>

    <v-fade-transition hide-on-leave>
      <v-skeleton-loader
        type="table"
        v-if="loading"
      />
      <v-data-table :headers="headers"
                    :items="tenders"
                    class=" mx-auto my-auto"
                    v-else
      >
        <template v-slot:no-data>
          <p class="my-2">No Data Available</p>
        </template>
        <template v-slot:item.title="{item}">
          {{ compress(item.title) }}
        </template>
        <template v-slot:item.list_description="{item}">
          <p class="text-truncate my-2" style="max-width: 400px" v-text="htmlToText(item.list_description)"/>
        </template>
        <template v-slot:item.deadline="{item}">
          <p class="text-truncate my-2" style="max-width: 400px" v-text="formatToDate(item.deadline)"/>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon @click="$router.push(`/tenders/${item.id}/edit`)" class="mr-2">
            mdi-pencil
          </v-icon>
          <v-icon @click="onDelete(item)" color="red">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-fade-transition>
  </v-card>
</template>

<script>
  import DeleteDialog from "../../components/core/DeleteDialog";
  import {store} from "../../store/store";
  import ajax from "../../ajax";
  import {errorHandler} from "../handle-error";

  export default {
    name: "News",
    data() {
      return {
        deleteDialog: false,
        title: null,
        selectedTender: null,
        headers: [
          {text: 'Title', value: 'title', width: "15%"},
          {text: 'Description', value: 'list_description'},
          {text: 'Deadline', value: 'deadline'},
          {text: 'Category', value: 'category'},
          {text: 'Actions', value: 'actions', sortable: false, width: "100px"},
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
          console.log(this.selectedTender);
          ajax.delete(`/tenders/${this.selectedTender.id}`).then(
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
        this.selectedTender = item;
        this.title = item.title;
        this.deleteDialog = true;
      },
      compress(val) {
        return val.length > 30 ? val.substr(0, 30) + '...' : val;
      },
      fetchTableData() {
        store.dispatch('setTenders', {page: 1, size: 10, category: ''});
      }
    },
    components: {
      'delete-dialog': DeleteDialog
    },
    computed: {
      tenders: () => store.getters.getTenders,
      loading: () => store.getters.getLoading,
    }
  }
</script>
