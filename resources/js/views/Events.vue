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
            :key="i"
            small
            v-for="(item, i) in items"
          >
            <template v-slot:opposite>
        <span
          :class="`headline font-weight-light ${colors[i%3]}--text`"
          v-text="beautifyDate(item.start_time)"
        />
            </template>
            <v-card :class="i !== 0 ? 'shadow': 'shadow-lg'"
                    :style="i !== 0 ? '': 'background : url(https://www.webdesigndev.com/wp-content/uploads/2013/06/Triangle.jpg\) repeat'"
                    class="px-5"
            >

              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline"> {{ item.start_time }} - {{ item.end_time }}</div>
                  <p class="my-3 lead"> {{ item.title }} </p>
                  <v-list-item-subtitle> {{ item.location }}</v-list-item-subtitle>
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
      colors: [
        'blue', 'orange', 'green'
      ],
      items: [
        {
          title: 'Communications Security, Reliability, and Interoperability Council VII Meeting',
          start_time: '10:00 am',
          end_time: '3:00 pm',
          location: 'Addis Ababa, Ethiopia',
        },
        {
          title: 'Broadband Deployment - March 2020',
          start_time: '10:00 am',
          end_time: '3:00 pm',
          location: 'Only online',
        },
        {
          title: 'Broadband Deployment Advisory Committee Meeting - March 2020',
          start_time: '10:00 am',
          end_time: '3:00 pm',
          location: 'ECA Office',
        },
        {
          title: 'Broadband Deployment Advisory Committee Meeting - March 2020',
          start_time: '10:00 am',
          end_time: '10:00 am',
          location: 'Addis Ababa University',
        },
        {
          title: 'Broadband Deployment Advisory Committee Meeting - March 2020',
          start_time: '10:00 am',
          end_time: '10:00 am',
          location: 'Adama, Ethiopia',
        },
      ]
    }),
    methods: {
      beautifyDate(date) {
        return 'Mar 27, 2020'
      },
      fetchEvents() {
        store.dispatch('setEvents', {page: this.page, size: this.itemsPerPage});
      },
    },
  }
</script>
