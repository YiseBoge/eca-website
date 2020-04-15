<template>
  <v-content id="home">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </v-content>
</template>

<script>
  import NProgress from "nprogress";

  export default {
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
</style>

