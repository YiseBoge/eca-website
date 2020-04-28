<template>
  <v-container>
    <v-row class="mt-6">
      <v-col lg="9">
        <h1>Events</h1>
      </v-col>
      <v-col lg="3">
        <v-tabs
          @change="fetchEvents"
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
    <v-row class="px-12 mb-10">
      <v-col>
        <p class="text-muted text-muted text-center mt-3"
           v-if="data.length === 0"
           v-text="'Found Nothing'"/>
        <v-timeline v-else>
          <v-timeline-item
            :color="time===0?colors[i%3]:colors[3]"
            :key="i" small
            v-for="(item, i) in data"
          >
            <template v-slot:opposite>
        <span
          :class="`headline font-weight-light ${time===0?colors[i%3]:colors[3]}--text`"
          v-text="formatToDate(item.start_date)"
        />
            </template>
            <v-fade-transition hide-on-leave>
              <v-skeleton-loader
                class="shadow-lg"
                type="card-heading, list-item-three-line"
                v-if="loading"
              />
              <v-card :class="i === 0 && time === 0 && page === 1 ? 'shadow-lg': 'shadow'"
                      :style="i === 0 && time === 0 && page === 1 ? 'background : url(https://www.webdesigndev.com/wp-content/uploads/2013/06/Triangle.jpg\) repeat': ''"
                      class="px-5"
                      v-else
              >
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline"> {{ formatToMinute(item.start_date) }} -- {{ formatToMinute(item.end_date) }}
                    </div>
                    <p class="lead mt-2"> {{ item.title }} </p>
                    <p class="subtitle-2 font-weight-light mb-2">{{ htmlToText(item.description) }}</p>
                    <v-list-item-subtitle class="font-italic">{{ item.location }}</v-list-item-subtitle>
                  </v-list-item-content>

                </v-list-item>
              </v-card>
            </v-fade-transition>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
    <v-row class="py-5">
      <v-col lg="2" cols="3">
        <v-select
          :items="sizes"
          @change="fetchEvents" class="justify-start w-75"
          dense label="Show" outlined
          v-model="size"
        />
      </v-col>
      <v-col lg="10" cols="9">
        <v-pagination :length="meta.last_page" :total-visible="7" @input="fetchEvents" class="justify-end"
                      v-model="page"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {store} from "../store/store";

  export default {

    data: () => ({
      page: 1,
      size: 10,
      time: 0,
      times: ['Upcoming', 'Past'],
      sizes: [10, 25, 50, 100],
      colors: ['blue', 'orange', 'green', 'grey'],
    }),
    methods: {
      fetchEvents() {
        store.dispatch('setEvents', {
          page: this.page,
          size: this.size,
          type: this.times[this.time],
        });
      },
    },
    created() {
      this.fetchEvents();
    },
    computed: {
      data: () => store.getters.getEvents,
      meta: () => store.getters.getEventsMeta,
      loading: () => store.getters.getLoading,
    },
  }
</script>
