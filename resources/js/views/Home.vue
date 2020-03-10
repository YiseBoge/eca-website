<template>
  <div id="home">
    <articles>
      <banner/>
    </articles>
    <events />
    <closing/>
  </div>
</template>

<script>
    export default {
        name: 'Home',

        components: {
          About: () => import('~/components/home/About'),
          Articles: () => import('~/components/home/Articles'),
          Banner: () => import('~/components/home/Banner'),
          Events: () => import('~/components/home/Events'),
          Closing: () => import('~/components/home/Closing')
        }
    }
</script>
