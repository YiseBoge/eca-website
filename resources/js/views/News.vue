<template>
  <v-container>
    <v-row class="mt-6">
      <v-col>
        <h1 class="font-weight-thin">News</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="8">
        <v-tabs
          background-color="primary" class="shadow mb-5 rounded"
          dark
          fixed-tabs
        >
          <v-tab
            :key="i"
            v-for="i in ['All', 2020, 2019, 2018, 2017]"
          >
            {{i}}
          </v-tab>
        </v-tabs>
        <v-list two-line>
          <v-list-item-group
          >
            <template v-for="(item) in headlines">
              <v-row>
                <v-list-item class="py-4">
                  <v-col cols="12" md="10">
                    <v-list-item-content>
                      <v-list-item-title v-text="item.title"/>
                      <v-list-item-subtitle class="text--primary" v-text="item.description"/>
                      <v-list-item-subtitle v-text="item.created_at + ' - ' + item.category"/>
                    </v-list-item-content>
                  </v-col>
                  <v-col :style="'height:75%; background: url(' + item.image_url + ') center; background-size:cover;'"
                         class="d-md-block d-none shadow-sm" cols="2">
                  </v-col>
                </v-list-item>

              </v-row>
              <v-divider class="my-0"/>
            </template>
          </v-list-item-group>
        </v-list>
        <v-row class="py-5">
          <v-pagination :length="len" v-model="page"/>
        </v-row>
      </v-col>
      <v-col class="px-8" md="4">

        <!--        <v-text-field-->
        <!--          label="Search"-->
        <!--          solo clearable dense-->
        <!--          clear-icon="mdi-close-circle-outline"-->
        <!--        />-->
        <v-card
          class="mx-auto shadow-lg"
        >
          <v-list>
            <v-subheader>Top Categories</v-subheader>
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
