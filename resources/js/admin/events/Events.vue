<template>
  <v-card class="px-5 py-3 shadow-lg">
    <delete-dialog :open="deleteDialog" :title="title" @onConfirmation="onDeleteConfirmation"/>

    <v-row>
      <v-col cols="8">
        <v-card-title>
          Events
        </v-card-title>
      </v-col>
      <v-col class="py-2" cols="4">
        <v-toolbar
          class="float-right" flat
          color="white">
          <v-btn @click="$router.push('/events/new')"
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
    <v-data-table v-else
      :headers="headers"
      :items="events"
      class=" mx-auto my-auto"
    >
      <template v-slot:no-data>
        <p class="my-2">No Data Available</p>
      </template>
      <template v-slot:item.title="{item}">
        {{ compress(item.title) }}
      </template>
      <template v-slot:item.description="{item}">
        <p class="text-truncate my-2" style="max-width: 400px" v-text="htmlToText(item.description)"/>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          class="mr-2" @click="$router.push(`/events/${item.id}/edit`)"
        >
          mdi-pencil
        </v-icon>
        <v-icon color="red" @click="onDelete(item)">
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
  import {router} from "../../routes/admin-router";
  import ajax from "../../ajax";
  import {errorHandler} from "../handle-error";

  export default {
    name: "Events",
    data() {
      return {
        deleteDialog: false,
        title: null,
        selectedEvent: null,
        headers: [
          {text: 'Title', value: 'title', width: "15%"},
          {text: 'Description', value: 'description'},
          {text: 'Start Date', value: 'start_date'},
          {text: 'End Date', value: 'end_date'},
          {text: 'Location', value: 'location'},
          {text: 'Actions', value: 'actions', sortable: false, width: "100px"},
        ]
      }
    },
    created() {
      this.fetchTableData();
    },
    methods: {
      onDeleteConfirmation(result) {
        this.deleteDialog = false;
        if (result) {
          console.log(this.selectedEvent);
          ajax.delete(`/event/${this.selectedEvent.id}`).then(
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
        this.selectedEvent = item;
        this.title = item.title;
        this.deleteDialog = true;
      },
      compress(val) {
        return val.length > 30 ? val.substr(0, 30) + '...' : val;
      },
      fetchTableData() {
        store.dispatch('setEvents', {page: 1, size: 10});
      }
    },
    components: {
      'delete-dialog': DeleteDialog
    },
    computed: {
      events: () => store.getters.getEvents,
      loading: () => store.getters.getLoading,
    }
  }
</script>
