<template>
  <v-card class="px-5 py-3 shadow-lg">
    <delete-dialog :open="deleteDialog" :title="title" @onConfirmation="onDeleteConfirmation"/>
    <v-row>
      <v-col cols="8">
        <v-card-title>
          News
        </v-card-title>
      </v-col>
      <v-col class="py-2" cols="4">
        <v-toolbar
          class="float-right" color="white"
          flat>
          <v-btn @click="$router.push('/news/new')"
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
                    :items="news"
                    class=" mx-auto my-auto"
                    sort-by="calories"
                    v-else
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
        <template v-slot:item.is_featured="{item}">
          <p class="my-2" v-text="item.is_featured ? 'Yes': 'No'"/>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon @click="$router.push(`/news/${item.id}/edit`)" class="mr-2">
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
        selectedNews: null,
        headers: [
          {text: 'Title', value: 'title'},
          {text: 'Description', value: 'description'},
          {text: 'Category', value: 'category'},
          {text: 'Featured', value: 'is_featured'},
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
          console.log(this.selectedNews);
          ajax.delete(`/news/${this.selectedNews.id}`).then(
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
        this.selectedNews = item;
        this.title = item.title;
        this.deleteDialog = true;
      },
      compress(val) {
        return val.length > 30 ? val.substr(0, 30) + '...' : val;
      },
      fetchTableData() {
        store.dispatch('setNews', {page: 1, size: 10, year: 'All', category: ''});
      }
    },
    components: {
      'delete-dialog': DeleteDialog
    },
    computed: {
      news: () => store.getters.getNews,
      loading: () => store.getters.getLoading,
    }
  }

</script>
