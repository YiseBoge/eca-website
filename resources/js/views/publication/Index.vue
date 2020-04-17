<template>
  <v-container>
    <v-row class="mt-6">
      <v-col>
        <h1 class="font-weight-thin">Publications</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="8">
        <v-tabs
          @change="fetchPublications" background-color="primary"
          class="shadow mb-5 rounded" dark
          fixed-tabs v-model="year"
        >
          <v-tab
            :key="i"
            v-for="i in years"
          >
            {{i}}
          </v-tab>
        </v-tabs>

        <v-list two-line>
          <p class="text-muted text-muted text-center mt-3"
             v-if="data.length === 0 && !loading"
             v-text="'Found Nothing'"/>
          <v-skeleton-loader
            class="w-100"
            type="list-item-three-line"
            v-if="loading"
          />
          <v-list-item-group v-else
          >
            <template v-for="(item) in data">
              <v-row>
                <!-- <v-list-item :to="'/publications/'+item.id" class="w-100"> -->
                <v-list-item @click="show(item.id)" class="w-100"> 
                  <v-col cols="12" md="11">
                    <v-list-item-content>
                      <div class="overline">{{item.category}}</div>
                      <v-list-item-title v-text="item.title"/>
                      <v-list-item-subtitle class="text--primary" v-text="htmlToText(item.description)"/>
                      <v-list-item-subtitle v-text="formatToMinute(item.created_at)"/>
                    </v-list-item-content>
                  </v-col>
                  <v-col :class="item.image_url? 'shadow-sm' : ''"  v-if="item.image_url"
                         :style="'height:50%; background: url(' + server + item.image_url + ') center; background-size:cover;'"
                         class="d-md-block d-none rounded" cols="1">
                  </v-col>
                </v-list-item>

              </v-row>
              <v-divider class="my-0"/>
            </template>
          </v-list-item-group>
        </v-list>
        <v-row class="py-5">
          <v-col cols="2">
            <v-select
              :items="sizes"
              @change="fetchPublications" class="justify-start"
              dense label="Show" outlined
              v-model="size"
            />
          </v-col>
          <v-col cols="10">
            <v-pagination :length="meta.last_page" :total-visible="7" @input="fetchPublications" class="justify-end"
                          v-model="page"/>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="px-8" md="4">

        <!--        <v-text-field-->
        <!--          label="Search"-->
        <!--          solo clearable dense-->
        <!--          clear-icon="mdi-close-circle-outline"-->
        <!--        />-->
        <v-fade-transition hide-on-leave>
          <v-skeleton-loader
            class="shadow-lg"
            type="card-heading, list-item, list-item, list-item"
            v-if="categoryLoading"
          />
          <v-card class="mx-auto shadow-lg"
                  v-else
          >
            <v-list>
              <v-subheader>Categories</v-subheader>
              <p class="text-muted text-center mt-3"
                 v-if="categories.length === 0"
                 v-text="'Found Nothing'"/>
              <v-list-item-group v-else
                @change="fetchPublications"
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
        </v-fade-transition>
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
  import {SERVER_BASE_URL} from "~/ajax";

  export default {
    name: "publication-index",
    data() {
      return {
        server: SERVER_BASE_URL,
        page: 1,
        size: 10,
        year: 0,
        selectedCategories: [],
        sizes: [10, 25, 50, 100],
        years: ['All', 2020, 2019, 2018, 2017],
      }
    },
    methods: {
      fetchPublications() {
        let cats = [];
        let c = this.categories;
        this.selectedCategories.forEach(function (category) {
          cats.push(c[category]);
        });
        store.dispatch('setPublications', {
          page: this.page,
          size: this.size,
          year: this.years[this.year],
          category: cats,
        });
      },
      fetchCategories() {
        store.dispatch('setPublicationCategories');
      },
      show(id){
        store.dispatch('setSelectedPublication', {id: id});
        this.$router.push(`/publications/${id}`);
      }
    },
    created() {
      this.fetchCategories();
      this.fetchPublications();
    },
    computed: {
      data: () => store.getters.getPublications,
      meta: () => store.getters.getPublicationsMeta,
      categories: () => store.getters.getPublicationCategories,
      loading: () => store.getters.getLoading,
      categoryLoading: () => store.getters.getCategoryLoading,
    },
  }
</script>
