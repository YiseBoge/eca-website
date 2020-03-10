<template>
  <div id="home">
    <articles>
      <banner/>
    </articles>
    <events />
  </div>
</template>

<script>
    export default {
        name: 'Home',

        components: {
            About: () => import('~/components/home/About'),
            Articles: () => import('~/components/home/Articles'),
            Banner: () => import('~/components/home/Banner'),
            Events: () => import('~/components/home/Events')
        }
    }
</script>
