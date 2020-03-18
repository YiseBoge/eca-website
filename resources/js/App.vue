<template>
  <v-app class="bg-white">
    <core-toolbar/>

    <core-view/>

    <core-footer/>

    <core-cta/>
  </v-app>
</template>

<script>

  export default {
    name: 'App',
    components: {
      CoreCta: () => import('~/components/core/Cta'),
      CoreDrawer: () => import('~/components/core/Drawer'),
      CoreFooter: () => import('~/components/core/Footer'),
      CoreToolbar: () => import('~/components/core/Toolbar'),
      CoreView: () => import('~/components/core/View')
    },
    data() {
      return {
        //
      }
    }
  }
</script>
<style>
  .v-pagination__item, .v-pagination__navigation {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }

  .v-content__wrap {
    background: white;
  }

  /*h1, h2, h3, h4, div{*/
  /*  font-family: "IBM Plex Serif",serif !important;*/
  /*}*/
</style>
