<template>
  <v-card>
    <v-card-title>
      News
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="calories"
      class=" mx-auto px-3 my-auto col-md-11"
    >
      <template v-slot:top>
        <v-toolbar
          flat
          color="white">

        </v-toolbar>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize">Reset
        </v-btn>
      </template>
    </v-data-table>

  </v-card>
</template>

<script>
  export default {
    name: "News",
    data() {
      return {
        headers: [
          {text: 'Ride id', value: 'calories'},
          {text: 'Rider Name', value: 'fat'},
          {text: 'Driver Name', value: 'carbs'},
          {text: 'pick/Drop Address', value: 'protein'},
          {text: 'Date', value: 'protein'},
          {text: 'Ride Fare', value: 'protein'},
          {text: 'Status', value: 'protein'},

        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
          name: '',
          calories: 0,
          fat: 0,
          carbs: 0,
          protein: 0,
        },
        defaultItem: {
          name: '',
          calories: 0,
          fat: 0,
          carbs: 0,
          protein: 0,
        },
      }
    },
    created() {
      this.initialize()
    },
    methods: {
      initialize() {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
          },
        ]
      },
    }
  }

</script>

<style scoped>

</style>
