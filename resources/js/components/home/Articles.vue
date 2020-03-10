<template>
  <section class="container" id="feed">
    <div class="row">
      <div class="col-md-5">
        <Headlines/>
      </div>

      <div class="col-md-7">
        <feed>
          <slot/>
        </feed>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    components: {
      Feed: () => import('~/components/Feed'),
      Headlines: () => import('~/components/home/components/Headlines')
    }
  }
</script>
