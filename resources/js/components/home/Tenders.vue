<template>
  <v-container class="py-12">
    <v-row class="my-5">
      <h2 class="px-3 text-primary">Tenders</h2>
    </v-row>
    <v-row>
      <v-col class="my-auto d-md-block d-none" cols="12" md="7">
        <v-fade-transition hide-on-leave>
          <v-skeleton-loader
            class="mx-mb-12"
            id="action-img-loader"
            ref="skeleton"
            type="image,image"
            v-if="loaders.tenders"
          />
          <v-card
            class="shadow overflow-hidden"
            v-if="tenders[selectedTender]"
          >
            <v-row>
              <v-col
                :style="'background: url(' + server + tenders[selectedTender].image_url +') center; background-size: cover;'"
                cols="5" v-if="tenders[selectedTender].image_url"/>
              <v-col :cols="tenders[selectedTender].image_url ? 7 : 12" class="pl-8">
                <h3 class="ma-4 mb-0" v-text="tenders[selectedTender].title"/>
                <small class="mx-4 grey--text darken-2" v-text="tenders[selectedTender].category"/>
                <v-card-text v-text="compress(tenders[selectedTender].list_description, 120)"/>
                <p class="mx-4 mt-0">
                  Deadline:
                  <span class="grey--text darken-3" v-text="formatToDate(tenders[selectedTender].deadline)"/>
                </p>
                <v-card-actions class="align-end d-flex">
                  <v-btn @click="$router.push(`/tenders/${tenders[selectedTender].id}`)"
                         class="mx-2" color="primary" outlined small v-text="'Read More'"/>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-fade-transition>
      </v-col>
      <v-col class="pl-md-12" cols="12" md="5">
        <v-fade-transition hide-on-leave>
          <v-skeleton-loader
            class="mx-auto mb-2"
            ref="skeleton"
            type="list-item-two-line,divider,list-item-two-line,divider,list-item-two-line,divider,list-item-two-line,divider,list-item-two-line,divider"
            v-if="loaders.tenders"
          />
          <p
            class="text-center grey--text text--darken-1"
            v-else-if="tenders && tenders.length === 0"
            v-text="'Found Nothing'"
          />
          <v-expansion-panels
            accordion
            mandatory
            v-else
            v-model="selectedTender"
          >
            <v-expansion-panel
              :key="i"
              @change="value = 0"
              v-for="(tender, i) in tenders"
            >
              <v-expansion-panel-header
                @mouseenter="auto = false"
                @mouseleave="auto = true"
                class="font-weight-bold"
                hide-actions
              >
                <div class="text--primary">
                  <v-progress-circular
                    :size="20"
                    :value="selectedTender === i ? value : 100"
                    :width="7"
                    color="primary"
                    rotate="270"
                  />
                  <h5
                    class="text--primary d-inline-block mx-3"
                    v-text="compress(tender.title)"
                  />
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <small class="grey--text darken-2 d-md-none" v-text="'Greyhound divisely'"/>
                <div
                  @mouseenter="auto = false"
                  @mouseleave="auto = true"
                  v-html="compress('lorem ipsum dolor amet set lorem ipsum dolor amet set lorem ipsum dolor amet set lorem ipsum dolor amet set lorem ipsum dolor amet set lorem ipsum dolor amet set ', 80)"
                />
                <small class="d-md-none d-block mt-2">
                  Deadline:
                  <span class="grey--text darken-3" v-text="formatToDate(tender.deadline)"/>
                  <v-btn @click="$router.push(`/tenders/${tender.id}`)" class="float-right"
                         color="primary" outlined v-text="'Read More'" x-small/>
                </small>
                <v-img
                  :lazy-src="tender.image_url"
                  :src="server + tender.image_url"
                  class="my-5 mx-auto d-md-none"
                />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-fade-transition>
      </v-col>
    </v-row>
    <v-row class="my-5">
      <v-col>
        <v-btn class="float-right shadow" color="blue darken-2" dark tile to="/tenders">All Tenders</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

  import {store} from "~/store/store";
  import {SERVER_BASE_URL} from "~/ajax";

  export default {
    data: () => {
      return {
        server: SERVER_BASE_URL,
        auto: true,
        interval: 0,
        value: 0,
        selectedTender: 0
      };
    },
    beforeDestroy() {
      clearInterval(this.interval);
    },
    mounted() {
      this.interval = setInterval(() => {
        if (this.value >= 100) {
          this.selectedTender = (this.selectedTender + 1) % this.tenders.length;
          return (this.value = 0);
        }
        if (this.auto) {
          this.value += 15;
        }
      }, 1000);
    },
    created() {
      store.dispatch('setHomeTenders', {page: 1, size: 4});
    },
    methods: {
      compress(val, length = 30) {
        return val.length > length ? val.substr(0, length) + '...' : val;
      },
    },
    computed: {
      tenders: () => store.getters.getHomeTenders,
      loaders: () => store.getters.getHomeLoaders
    }
  };
</script>

<style>
  #action-img-loader .v-skeleton-loader__bone {
    border-radius: 0 0 0 0 !important;
  }

  .v-expansion-panel {
    border-radius: 0 0 0 0 !important;
    border-bottom: rgba(0, 0, 0, 0.15) 1px solid;
    /*box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;*/
    overflow: hidden;
  }
</style>
