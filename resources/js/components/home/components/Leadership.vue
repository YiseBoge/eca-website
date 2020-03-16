<template>
  <v-card
    class="mx-auto shadow-lg"
  >
    <v-toolbar class="shadow-sm" height="45">
      <v-toolbar-title class="font-weight-light">Leadership</v-toolbar-title>

    </v-toolbar>
    <v-list class="overflow-auto" height="450" three-line>
      <template v-for="(item) in data">
        <v-list-item
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.image_url"/>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="text-primary" v-html="item.name"/>
            <v-list-item-subtitle v-text="item.position"/>
            <small class="mt-1" v-if="item.description" v-text="item.description"/>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="my-0"/>
      </template>
    </v-list>
  </v-card>
</template>

<script>
  import {store} from "~/store/store";

  export default {
    methods: {
      fetchLeadership() {
        store.dispatch('setLeadership', {page: 1, size: 10});
      },
    },
    created() {
      this.fetchLeadership();
    },
    computed: {
      data: () => store.getters.getLeadership,
    },
  }
</script>
