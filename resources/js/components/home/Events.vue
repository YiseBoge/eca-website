<template>
  <v-container class="container col-md-12 mx-0 px-0">
    <v-container class="col-md-10">

    <h1 class="ml-6 my-3 font-weight-thin">Events</h1>
    <v-row>
      <v-card
        class="mx-auto box col-md-3 shadow-lg"
        max-width="300"
        max-height="250"
      >
        <v-card-title class="date event-date darken-3 my-5 greyish" style="font-size: 1.5em">
          March 17, 2020
        </v-card-title>
        <v-card-text class="my-3 card-body">
          <a href="">
            Communications Security, Reliability, and Interoperability Council VII Meeting
            Online Only
          </a>
          <small class="text-center d-block mx-auto">Online only</small>
        </v-card-text>

      </v-card>
      <div class="col-md-4 row mx-auto h-100">
        <p class="col-md-2 mr-10 date">
          MAR
          <span class="event-date">24</span>
          2020
        </p>
        <div class="vertical-parent col-md-8">
          <a href="">Technological Advisory Council Meeting March 24, 2020</a>
          <br>
          <p class="small">
            Commission Meeting Room, 445 12th Street, S.W., Washington, D.C.
          </p>
        </div>
      </div>
      <div class="col-md-4 row mx-auto h-100">
        <p class="col-md-2 mr-10 date">
          MAR
          <span class="event-date">24</span>
          2020
        </p>
        <div class="vertical-parent col-md-8">
          <a href="">Technological Advisory Council Meeting March 24, 2020</a>
          <br>
          <p class="small">
            Commission Meeting Room, 445 12th Street, S.W., Washington, D.C.
          </p>
        </div>
      </div>
    </v-row>
    <v-container class="float-right">
      <v-btn dark color="blue blue darken-3 float-right mr-12">Commission Meetings</v-btn>
      <v-btn dark color="blue darken-3 float-right mr-2">All Events</v-btn>
    </v-container>
    </v-container>
  </v-container>
</template>

<script>
    export default {
        name: "Events"
    }
</script>

<style scoped>
  html, body {
    height: 100%;
  }

  .container {
    background-color: #f2f2f2;
  }

  body {
    background: #ccc;
  }

  .box {
    text-align: center;
    position: relative;
    line-height: 100px;
    background: #fff;
  }

  .box:after {
    background: linear-gradient(to right, #bcbcbc 25%, #ffcd02 25%, #ffcd02 50%, #e84f47 50%, #e84f47 75%, #65c1ac 75%);
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
  }
  .vertical-parent {
    border-left: thick solid orange;
  }

  .date {
    font-weight: 300;
    font-size: 1.2em;
    font-family: "Roboto", sans-serif;
  }
  .greyish {
    color: #747474!important;
  }
</style>
