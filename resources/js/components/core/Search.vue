<template>
  <v-row style="width: 300px">
    <v-col cols="12">
      <v-autocomplete
        flat
        light
        dense
        class="mx-5"
        v-model="keyword"
        :items="searchedContents"
        :loading="loading"
        :search-input.sync="search"
        clearable
        hide-details
        hide-selected
        item-text="title"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        solo
      >
        <template v-slot:append>
          <p />
        </template>
        <template v-slot:item="{ item }">
          <v-list-item @click="navigate(item)">
            <v-list-item-avatar
              color="primary"
              class="headline font-weight-light white--text"
            >
              {{ item.title.charAt(0) }}
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
              <v-list-item-subtitle class="text-truncate" v-text="truncate(htmlToText(item.description))" />
            </v-list-item-content>
            <v-list-item-action @click="navigate(item)">
              <v-icon v-text="getIcon(item.type)"> </v-icon>
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-autocomplete>
    </v-col>
  </v-row>
</template>

<script>
  import {store} from "../../store/store";
  import {router} from "../../routes/router";
  export default {
    name: "Search",
    data() {
      return {
        keyword: '',
        isLoading: false,
        search: null,
        resultTypes: ['News', 'Event', 'Publication', 'Media', 'Leaders'],
        resultIcons: ['mdi-newspaper', 'mdi-calendar', 'mdi-file-document', 'mdi-folder-multiple-image', 'mdi-account-search']
      }
    },
    methods:{
      getIcon(type) {
        return this.resultIcons[this.resultTypes.indexOf(type)]
      },
      navigate(item) {
        if (item.type === this.resultTypes[0]) {
          router.push(`/${item.type.toLowerCase()}/${item.item_id}`);
        }
        else if (item.type === this.resultTypes[2]) {
          router.push(`/${item.type.toLowerCase()}s/${item.item_id}`);
        }
        else if (item.type === this.resultTypes[1]) {
          router.push(`/${item.type.toLowerCase()}s/`);
        }
      },
      truncate(text) {
        return text.slice(0, 50);
      }
    },
    computed: {
      searchedContents: () => store.getters.getSearchResponse,
      loading: () => store.getters.getSearchLoading
    },
    watch: {
      search (val) {
        // Items have already been loaded
        if (val.length < 3) return;
        store.dispatch('search', {keyword: val});
      }
    }
  }
</script>
