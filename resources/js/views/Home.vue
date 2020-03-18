<template>
  <div id="home">
    <articles/>
    <events />
    <closing/>
  </div>
</template>

<script>
    export default {
        name: 'Home',

        components: {
          Articles: () => import('~/components/home/articles/Articles'),
          Events: () => import('~/components/home/Events'),
          Closing: () => import('~/components/home/closing/Closing'),
        }
    }
</script>
