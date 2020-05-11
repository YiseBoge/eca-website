<template>
  <v-app class="bg-white">
    <core-toolbar/>

    <v-content id="home"  style="font-family: 'Nunito', sans-serif">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </v-content>

    <core-footer/>

    <core-cta/>
  </v-app>
</template>

<script>

  import NProgress from "nprogress";

  export default {
    name: 'App',
    components: {
      CoreCta: () => import('~/components/core/Cta'),
      CoreDrawer: () => import('~/components/core/Drawer'),
      CoreFooter: () => import('~/components/core/Footer'),
      CoreToolbar: () => import('~/components/core/Toolbar'),
    },
    created() {
      NProgress.configure({
        parent: '#home',
      });
    },
  }
</script>

<style>
  @import "https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css";
</style>

<style>
  #home{
    min-height: 70vh;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0
  }

  .v-pagination__item, .v-pagination__navigation {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }

  .v-content__wrap {
    background: white;
  }
</style>
