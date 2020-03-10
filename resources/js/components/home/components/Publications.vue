<template>
  <div
    class="mx-auto mt-4"
    style="overflow: auto"
  >
    <v-list class="transparent" three-line>
      <h2 class="px-3 text-primary font-weight-light display-1">Publications</h2>
      <template v-for="(item, index) in items">
        <v-divider
          :inset="item.inset"
          :key="index"
          class="my-0"
        />

        <v-list-item
          :key="item.title"
          @click=""
          class="pb-5"
        >

          <v-list-item-content>
            <v-list-item-title v-html="item.title"/>
            <v-list-item-subtitle v-html="item.subtitle"/>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <v-flex align-self-end class="float-right">
      <router-link class="btn btn-link nav-link" to="#">
        See All
      </router-link>
    </v-flex>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you  recommendations? Have you  recommendations? Have you  recommendations? Have you  recommendations? Have you ever been?",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        }
      ],
    }),
  }
</script>
