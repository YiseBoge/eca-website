<template>
  <div id="home">
    <articles/>
    <events/>
    <tenders/>
    <closing/>
  </div>
</template>

<script>
    export default {
        name: 'Home',

        components: {
          Articles: () => import('~/components/home/articles/Articles'),
          Events: () => import('~/components/home/Events'),
          Tenders: () => import('~/components/home/Tenders'),
          Closing: () => import('~/components/home/closing/Closing'),
        }
    }
</script>
