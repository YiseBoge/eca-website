<template>
  <v-container>
    <v-row class="mt-6">
      <v-col>
        <h1 class="font-weight-thin">News</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="8">
        <v-tabs
          background-color="primary" class="shadow mb-5 rounded"
          dark fixed-tabs
          @change="fetchNews"
          v-model="year"
        >
          <v-tab
            :key="i"
            v-for="i in years"
          >
            {{i}}
          </v-tab>
        </v-tabs>


        <v-list two-line>
          <p class="text-muted text-muted text-center"
             v-if="data.length === 0"
             v-text="'Found Nothing'"/>
          <v-list-item-group
          >
            <template v-for="(item) in data">
              <v-row>
                <v-list-item :to="'/news/'+item.id" class="w-100">
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
          <v-pagination :length="meta.last_page" @input="fetchNews" v-model="page"/>
        </v-row>
      </v-col>
      <v-col class="px-8" cols="12" md="4">

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
            <v-list-item-group @change="fetchNews"
                               color="primary" multiple
                               v-model="selectedCategories"
            >
              <v-list-item
                :key="i"
                v-for="(cat, i) in categories"
              >
                <template v-slot:default="{ active, toggle }">
                  <v-list-item-content>
                    <v-list-item-title v-text="cat"/>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-checkbox
                      :input-value="active"
                      :true-value="item"
                      @click="toggle"
                    />
                  </v-list-item-action>
                </template>
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

  import {store} from "~/store/store";

  export default {
    name: "news-index",
    data() {
      return {
        page: 1,
        size: 2,
        year: 0,
        years: ['All', 2020, 2019, 2018, 2017],
        selectedCategories: [],
      }
    },
    methods: {
      fetchNews() {
        let cats = [];
        let c = this.categories;
        this.selectedCategories.forEach(function (category) {
          cats.push(c[category]);
        });
        store.dispatch('setNews', {
          page: this.page,
          size: this.size,
          year: this.years[this.year],
          category: cats,
        });
      },
    },
    created() {
      this.fetchNews();
    },
    computed: {
      data: () => store.getters.getNews,
      meta: () => store.getters.getNewsMeta,
      categories: () => store.getters.getNewsCategories,
    },
  }
</script>
