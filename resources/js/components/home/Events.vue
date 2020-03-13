<template>
  <section class="my-5 py-4 shadow-lg"
           style="background: url('https://www.webdesigndev.com/wp-content/uploads/2013/06/Triangle.jpg') repeat">
    <v-container>
      <h1 class="my-3 display-1 font-weight-thin">Events</h1>
      <v-row>
        <div class="col-md-4 px-md-12 h-100">
          <v-card
            class="box overflow-hidden shadow-sm"
            max-height="250"
          >
            <v-card-title class="date event-date darken-3 text-muted" style="font-size: 1.5em">
              March 17, 2020
            </v-card-title>
            <v-card-text class="my-3 card-body">
              <span> Technological Advisory Council Meeting</span>
              <br>
              <p class="small">
                Commission Meeting Room, 445 12th Street, S.W., Washington, D.C.
              </p>
            </v-card-text>

          </v-card>
        </div>
        <div class="col-md-4 row h-100">
          <p class="col-md-4 col-3 date">
            MAR
            <span class="event-date">24</span>
            2020
          </p>
          <div class="vertical-parent col-md-8 col-9">
            <span> Technological Advisory Council Meeting March 24, 2020</span>
            <br>
            <p class="small">
              Commission Meeting Room, 445 12th Street, S.W., Washington, D.C.
            </p>
          </div>
        </div>
        <div class="col-md-4 row h-100">
          <p class="col-md-4 col-3 date">
            MAR
            <span class="event-date">24</span>
            2020
          </p>
          <div class="vertical-parent col-md-8 col-9">
            <span>Technological Advisory Council Meeting March 24, 2020</span>
            <br>
            <p class="small">
              Commission Meeting Room, 445 12th Street, S.W., Washington, D.C.
            </p>
          </div>
        </div>
      </v-row>
      <v-row>
        <v-col>
          <v-btn class="float-right shadow" color="blue darken-2" dark tile to="/events">All Events</v-btn>
        </v-col>
      </v-row>

    </v-container>
  </section>
</template>

<script>
    export default {
        name: "Events"
    }
</script>

<style>
  .box {
    text-align: center;
    position: relative;
    line-height: 100px;
    background: #fff;
  }

  .box:after {
    background: linear-gradient(to right, #00B04F 33%, #FE6601 33%, #FE6601 66%, #00B0EF 66%);
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
    border-left: thick solid #FE6601;
  }

  .date {
    font-weight: 300;
    font-size: 1.2em;
    font-family: "Roboto", sans-serif;
  }
</style>
