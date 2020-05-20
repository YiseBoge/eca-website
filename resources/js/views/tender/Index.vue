<template>
  <v-container>
    <v-row class="mt-6">
      <v-col lg="9" cols="6">
        <h1>Tenders</h1>
      </v-col>
      <v-col lg="3" cols="6">
        <v-tabs
          @change="fetchTenders"
          v-model="time"
          fixed-tabs
        >
          <v-tab
            :key="i"
            v-for="i in times"
          >
            {{i}}
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="8" cols="12">
        <v-list two-line>
          <v-skeleton-loader
            class="w-100"
            type="list-item-three-line"
            v-if="loading"
          />
          <p class="text-muted text-muted text-center mt-3"
             v-else-if="!data || data.length === 0"
             v-text="'Found Nothing'"/>
          <v-list-item-group v-else
          >
            <template v-for="(item) in data">
              <v-row>
                <v-list-item :to="`/tenders/${item.id}`" class="w-100">
                  <v-col cols="12" md="11">
                    <v-list-item-content>
                      <div class="overline">{{item.category}}</div>
                      <v-list-item-title v-text="item.title"/>
                      <v-list-item-subtitle class="text--primary" v-text="htmlToText(item.list_description)"/>
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
          <v-col lg="2" cols="3">
            <v-select
              :items="sizes"
              @change="fetchTenders" class="justify-start"
              dense label="Show" outlined
              v-model="size"
            />
          </v-col>
          <v-col lg="10" cols="9">
            <v-pagination :length="meta ? meta.last_page : 0" :total-visible="7" @input="fetchTenders" class="justify-end"
                          v-model="page"/>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="px-8" md="4" cols="12">

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
                @change="fetchTenders"
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
    name: "tender-index",
    data() {
      return {
        server: SERVER_BASE_URL,
        page: 1,
        size: 10,
        time: 0,
        times: ["Upcoming", "Past"],
        selectedCategories: [],
        sizes: [10, 25, 50, 100],
      }
    },
    methods: {
      fetchTenders() {
        let cats = [];
        let c = this.categories;
        this.selectedCategories.forEach(function (category) {
          cats.push(c[category]);
        });
        store.dispatch('setTenders', {
          page: this.page,
          size: this.size,
          category: cats,
          time: this.times[this.time]
        });
      },
      fetchCategories() {
        store.dispatch('setTenderCategories');
      },
    },
    created() {
      this.fetchCategories();
      this.fetchTenders();
    },
    computed: {
      data: () => store.getters.getTenders,
      meta: () => store.getters.getTendersMeta,
      categories: () => store.getters.getTenderCategories,
      loading: () => store.getters.getLoading,
      categoryLoading: () => store.getters.getCategoryLoading,
    },
  }
</script>
