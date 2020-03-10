<template>
  <v-btn
    @click="toTop"
    color="primary"
    fab
    dark
    fixed
    bottom
    right
    v-scroll="onScroll"
    v-show="fab"
  >
    <v-icon>mdi-minus</v-icon>
  </v-btn>
</template>

<script>
  export default {
    data: () => ({
      fab: false
    }),
    methods: {
      onScroll(e) {
        if (typeof window === 'undefined') return;
        const top = window.pageYOffset || e.target.scrollTop || 0;
        this.fab = top > 20
      },
      toTop() {
        this.$vuetify.goTo(0)
      }
    }
  }
</script>
