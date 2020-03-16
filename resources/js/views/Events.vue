<template>
  <v-container>
    <v-row class="mt-6">
      <v-col lg="9">
        <h1 class="font-weight-thin">Events</h1>
      </v-col>
      <v-col lg="3">
        <v-tabs
          fixed-tabs
        >
          <v-tab
            :key="i"
            v-for="i in ['Upcoming', 'Past']"
          >
            {{i}}
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row class="px-12 mb-10">
      <v-col>
        <v-timeline>
          <v-timeline-item
            :color="colors[i%3]"
            :key="i" small
            v-for="(item, i) in data"
          >
            <template v-slot:opposite>
        <span
          :class="`headline font-weight-light ${colors[i%3]}--text`"
          v-text="beautifyDate(item.start_date)"
        />
            </template>
            <v-card :class="i !== 0 ? 'shadow': 'shadow-lg'"
                    :style="i !== 0 ? '': 'background : url(https://www.webdesigndev.com/wp-content/uploads/2013/06/Triangle.jpg\) repeat'"
                    class="px-5"
            >

              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline"> {{ item.start_date }} - {{ item.end_date }}</div>
                  <p class="lead mt-2"> {{ item.title }} </p>
                  <p class="subtitle-2 font-weight-light mb-2">{{ item.description }}</p>
                  <v-list-item-subtitle class="font-italic"> {{ item.location }}</v-list-item-subtitle>
                </v-list-item-content>

              </v-list-item>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {store} from "../store/store";

  export default {

    data: () => ({
      page: 1,
      size: 5,
      colors: [
        'blue', 'orange', 'green'
      ],
    }),
    methods: {
      beautifyDate(date) {
        return 'Mar 27, 2020'
      },
      fetchEvents() {
        store.dispatch('setEvents', {page: this.page, size: this.size});
      },
    },
    created() {
      this.fetchEvents();
    },
    computed: {
      data: () => store.getters.getEvents,
      meta: () => store.getters.getEventsMeta,
    },
  }
</script>
