<template>
  <v-container>
    <v-row class="mt-6">
      <v-col>
        <h1 class="font-weight-thin">News</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="pr-md-12" md="8">
        <v-hover
          :key="i" close-delay="50"
          v-for="(news, i) in headlines"
          v-slot:default="{ hover }"
        >
          <v-card
            :class="hover ? 'shadow' : 'shadow-lg'"
            @click=""
            class="mb-12"
          >
            <v-list-item three-line>
              <v-list-item-content>

                <v-list-item-title class="headline font-weight-light">{{news.title}}</v-list-item-title>
                <v-list-item-subtitle class="font-italic">{{news.created_at}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <div
              :style="'background: url(' + news.image_url + ') center no-repeat; background-size: cover'"
              style="height: 250px;"
            ></div>

            <v-list-item three-line>
              <v-list-item-content style="height: 50px">
                <v-list-item-subtitle>{{news.description}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions class="d-block">
              <v-chip class="ml-3 mb-2 text-uppercase"
                      color="grey"
                      label small text-color="white"
              >
                {{news.category}}
              </v-chip>
              <v-btn
                class="float-right"
                color="primary accent-4" text
              >
                Read More
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-hover>
      </v-col>
      <v-col md="4">

        <!--        <v-text-field-->
        <!--          label="Search"-->
        <!--          solo clearable dense-->
        <!--          clear-icon="mdi-close-circle-outline"-->
        <!--        />-->
        <v-card
          class="mx-auto shadow-lg"
        >
          <v-list>
            <v-subheader>Popular Categories</v-subheader>
            <v-list-item-group color="primary" v-model="item">
              <v-list-item
                :key="i"
                v-for="(cat, i) in categories"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="cat"/>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="py-5">
      <v-pagination :length="len" v-model="page"/>
    </v-row>

  </v-container>
</template>

<!--<style>-->
<!--  .v-input__slot{-->
<!--    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;-->
<!--  }-->
<!--</style>-->
<script>

  export default {
    data() {
      return {
        page: 1,
        itemsPerPage: 5,
        len: 6,
        headlines: [
          {
            title: 'Communications Security, Reliability, and Interoperability Council VII Meeting',
            description: 'Visit ten places on our planet that are undergoing the biggest changes today. this',
            created_at: 'MAR 24 2020',
            image_url: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
            category: 'Trial Category'
          },
          {
            title: 'Technological Advisory Council Meeting March 24, 2020',
            description: 'Visit ten places on our planet that are undergoing the biggest changes today. this',
            created_at: 'JAN 20 2019',
            image_url: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
            category: 'Good News'
          },
          {
            title: 'Broadband Deployment Advisory Committee Meeting - March 2020',
            description: 'Visit ten places on our planet that are undergoing the biggest changes today. this',
            created_at: 'FEB 27 2019',
            image_url: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg',
            category: 'More News'
          },
        ],
        categories: ["Real-Time", "Trial Category", "Conversions"],
        category: 0
      }
    }
  }
</script>
