<template>
  <v-container class="mx-auto col-md-7">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-thin display-3">Events</h1>
    </v-card-title>

    <v-card
      v-for="(item, i) in items"
      :key="`card${i}`"
      v-if=""
      class="my-md-3"
      :class="i !== 0 ? 'v-card--outlined': 'shadow-lg'"

    >
      <v-row>
        <v-col cols="2">
          <div class="date mx-auto text-center mt-4">
            <p v-html="beautifyDate(item.date)"/>
          </div>
        </v-col>
        <v-col cols="8" class="vertical-parent my-2">
          <v-card-text class="card-text">
            <h4>{{ item.title }}</h4>
            <small class="d-block">{{ item.time }}</small>
            <small class="d-block">{{ item.location }}</small>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <v-col cols="6" class="mt-1 mx-auto">
      <v-pagination :length="pageNumber" @input="fetchEvents" v-model="page"/>
    </v-col>

  </v-container>
</template>

<script>
  import {store} from "../../store/store";

  export default {
        data() {
            return {
                page: 1,
                itemsPerPage: 5,
                items: [
                    {
                        date: 'MAR 24 2020',
                        title: 'Communications Security, Reliability, and Interoperability Council VII Meeting',
                        time: '10:00 am – 3:00 pm EDT',
                        location: 'Only online',
                    },
                    {
                        date: 'MAR 25 2020',
                        title: 'Technological Advisory Council Meeting March 24, 2020',
                        time: '5:00 am – 3:00 pm EDT',
                        location: 'Only online',
                    },
                    {
                        date: 'MAR 27 2020',
                        title: 'Broadband Deployment Advisory Committee Meeting - March 2020',
                        time: '5:00 am – 3:00 pm EDT',
                        location: 'Only online',
                    },
                ]
            }
        },
        methods: {
            beautifyDate(date) {
                return `<span>${date.substr(0, 3)}</span><br/>
                        <span class="event-date">${date.substr(4, 2)}</span> <br>
                        <span>${date.substr(6, 5)}</span>`
            },
            fetchEvents() {
                store.dispatch('setEvents', {page: this.page, size: this.itemsPerPage});
            },
        },
        computed : {
            pageNumber() {
                return Math.ceil(store.getters.getEventsCount / this.itemsPerPage);
            },
        }
    }
</script>
<style>
  /* Helper classes */
  .vertical-parent {
    border-left: thin solid orange;
  }

  .event-date {
    font-size: 2em;
  }

  .date {
    font-weight: 300;
    font-size: 1.2em;
    font-family: "Roboto", sans-serif;
  }

  .card-text h4 {
    font-weight: 300 !important;
  }
</style>
