<template>
  <section class="my-5 py-4 shadow-lg"
           style="background: url('https://www.webdesigndev.com/wp-content/uploads/2013/06/Triangle.jpg') repeat">
    <v-container>
      <h1 class="my-3 display-1 font-weight-thin">Events</h1>
      <v-fade-transition hide-on-leave>
        <v-row v-if="homeLoaders.homeEvents">
          <div class="col-md-4 px-md-12 h-100">
            <v-skeleton-loader
              class="mt-4 shadow-lg"
              type="card-heading,list-item-three-line,list-item-three-line"

            />
          </div>
          <div class="col-md-4 px-md-12 h-100" v-if="true">
            <v-skeleton-loader
              class="mt-4 transparent"
              type="card-heading,list-item-three-line,list-item-three-line"

            />
          </div>
          <div class="col-md-4 px-md-12 h-100" v-if="true">
            <v-skeleton-loader
              class="mt-4 transparent"
              type="card-heading,list-item-three-line,list-item-three-line"

            />
          </div>
        </v-row>
        <v-row v-else>
          <div class="col-md-4 px-md-12 h-100">
            <v-card
              class="box overflow-hidden shadow-sm text-center"
              max-height="250"
            >
              <v-card-title class="date event-date darken-3 text-muted justify-center" style="font-size: 1.5em">
                {{formatToDate(data[0].start_date)}}
              </v-card-title>
              <v-card-text class="my-3 card-body">
                <span> {{data[0].title}} </span>
                <br>
                <p class="small">
                  {{data[0].location}}
                </p>
              </v-card-text>

            </v-card>
          </div>

          <div class="col-md-4 row h-100" v-for="event in [data[1], data[2]]">
            <p class="col-md-4 col-3 date text-center">
              {{months[new Date(event.start_date).getMonth()]}}
              <span class="event-date">{{new Date(event.start_date).getDate()}}</span>
              {{new Date(event.start_date).getFullYear()}}
            </p>
            <div class="vertical-parent col-md-8 col-9">
              <span> {{event.title}} </span>
              <br>
              <p class="small">
                {{event.location}}
              </p>
            </div>
          </div>
        </v-row>
      </v-fade-transition>
      <v-row>
        <v-col>
          <v-btn class="float-right shadow" color="blue darken-2" dark tile to="/events">All Events</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>

  import {store} from "~/store/store";

  export default {
    data: () => ({
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }),
    methods: {
      beautifyDate(date) {
        return date
      },
      fetchHomeEvents() {
        store.dispatch('setHomeEvents', {page: 1, size: 3});
      },
    },
    created() {
      this.fetchHomeEvents();
    },
    computed: {
      data: () => store.getters.getHomeEvents,
      homeLoaders: () => store.getters.getHomeLoaders,
    },
  }
</script>

<style>

  .box:after {
    background: linear-gradient(to right, #00B04F 33%, orange 33%, orange 66%, #00B0EF 66%);
    position: absolute;
    content: '';
    height: 8px;
    right: 0;
    left: 0;
    top: 0;
  }

  .card-body {
    font-size: 1em;
  }
  .event-date {
    font-size: 1.7em;
    font-weight: 400;
  }
  .vertical-parent {
    border-left: thick solid orange;
  }

  .date {
    font-weight: 300;
    font-size: 1.5em;
    font-family: "Roboto", sans-serif;
  }
</style>
