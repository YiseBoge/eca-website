<template>
  <base-card dark>
    <v-img
      class="grey lighten-2"
      height="400"
      width="100%"
      :src="'https://images.unsplash.com/photo-1583796948558-918d2978a923?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80'"
    >
      <v-layout
        fill-height
        align-center
        pa-3
      >
        <v-flex
          xs12
          md7
          offset-md5
        >
          <h1 class="display-3 font-weight-light">
            The Art Of Travel
          </h1>
          <div class="subheading text-uppercase pl-2 mb-4">
            Finding Beauty, One flight at a time
          </div>
          <v-btn
            color="primary"
            depressed
            round
          >
            Subscribe
          </v-btn>
        </v-flex>
      </v-layout>
    </v-img>
  </base-card>
</template>
