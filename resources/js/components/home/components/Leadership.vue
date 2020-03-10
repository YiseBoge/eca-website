<template>
  <v-card
    class="mx-auto shadow-lg"
  >
    <v-toolbar class="shadow-sm" height="45">
      <v-toolbar-title class="font-weight-light">Leadership</v-toolbar-title>

    </v-toolbar>
    <v-list class="overflow-auto" height="450" three-line>
      <template v-for="(item, index) in items">
        <v-list-item
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"/>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="text-primary" v-html="item.title"/>
            <v-list-item-subtitle v-html="item.subtitle"/>
          </v-list-item-content>
        </v-list-item>
        <v-divider/>
      </template>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'James Cannon',
          subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'More Mr Jessica',
          subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
      ],
    }),
  }
</script>
