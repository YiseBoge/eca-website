<template>
  <v-card>
    <delete-dialog :open="deleteDialog" :title="title" @onConfirmation="onDeleteConfirmation"/>
    <v-card-title>
      Events
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
            to="/events/add-event">Add Events
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
    name: "Events",
    data() {
      return {
        deleteDialog: false,
        title: null,
        headers: [
          // {text: 'Events id', value: 'event_id'},
          {text: 'Title', value: 'title'},
          // {text: 'Description', value: 'desc'},
          {text: 'Start Date', value: 'start_date'},
          {text: 'End Date', value: 'end_date'},
          {text: 'Location', value: 'loc'},
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
            event_id: 1,
            title: 'Something is happening in ECA',
            desc: 'some description goes here',
            start_date: 'Mar 12, 2017',
            end_date: 'Mar 25, 2019',
            loc: 'Online only'
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
