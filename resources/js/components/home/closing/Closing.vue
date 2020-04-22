<template>
  <section class="container py-12 my-12">
    <v-row>
      <v-col cols="12" md="4">
        <leadership/>
      </v-col>
      <v-col cols="12" md="4">
        <publications/>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="shadow-lg">
          <a class="twitter-timeline p-3 text-primary" data-height="490" data-theme="light"
             href="https://twitter.com/eca_ethiopia?ref_src=twsrc%5Etfw">Tweets by ECA</a>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>
<script>
  import Leadership from "./Leadership";
  import Publications from "./Publications";

  export default {
    components: {Publications, Leadership},
    watch: {
      '$route': 'selectPublication'
    },
    mounted() {
      let recaptchaScript = document.createElement('script');
      recaptchaScript.setAttribute('src', 'https://platform.twitter.com/widgets.js');
      document.head.appendChild(recaptchaScript)
    },
  }
</script>
