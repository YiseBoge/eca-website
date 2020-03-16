<template>
  <v-container>
    <v-row class="mt-6">
      <v-col>
        <h1 class="font-weight-thin">Publications</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="8">
        <v-list two-line>
          <v-list-item-group
          >
            <template v-for="(item) in data">
              <v-row>
                <v-list-item class="w-100">
                  <v-col cols="12" md="11">
                    <v-list-item-content>
                      <div class="overline">{{item.category}}</div>
                      <v-list-item-title v-text="item.title"/>
                      <v-list-item-subtitle class="text--primary" v-text="htmlToText(item.description)"/>
                      <v-list-item-subtitle v-text="formatToMinute(item.created_at)"/>
                    </v-list-item-content>
                  </v-col>
                  <v-col :style="'height:50%; background: url(' + item.image_url + ') center; background-size:cover;'"
                         :class="item.image_url? 'shadow-sm' : ''" class="d-md-block d-none rounded" cols="1">
                  </v-col>
                </v-list-item>

              </v-row>
              <v-divider class="my-0"/>
            </template>
          </v-list-item-group>
        </v-list>
        <v-row class="py-5">
          <v-pagination :length="meta.to" v-model="page"/>
        </v-row>
      </v-col>
      <v-col class="px-8" md="4">

        <!--        <v-text-field-->
        <!--          label="Search"-->
        <!--          solo clearable dense-->
        <!--          clear-icon="mdi-close-circle-outline"-->
        <!--        />-->
        <v-card
          class="mx-auto shadow-lg"
        >
          <v-list>
            <v-subheader>Categories</v-subheader>
            <v-list-item-group color="primary" v-model="item">
              <v-list-item
                :key="i"
                v-for="(cat, i) in categories"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="cat"/>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<!--<style>-->
<!--  .v-input__slot{-->
<!--    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;-->
<!--  }-->
<!--</style>-->
<script>

  import {store} from "../../store/store";

  export default {
    data() {
      return {
        page: 1,
        size: 5,
        len: 6,
        categories: ["Press Release", "Proclamations", "Directives and Regulations", "Procedures"],
        category: 0
      }
    },
    methods: {
      beautifyDate(date) {
        return date
      },
      fetchPublications() {
        store.dispatch('setPublications', {page: this.page, size: this.size});
      },
    },
    created() {
      this.fetchPublications();
    },
    computed: {
      data: () => store.getters.getPublications,
      meta: () => store.getters.getPublicationsMeta,
    },
  }
</script>
