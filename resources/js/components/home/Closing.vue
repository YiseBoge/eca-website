<template>
  <section class="container py-5 my-5">
    <v-row>
      <v-col md="4">
        <leadership/>
      </v-col>
      <v-col md="4">
        <publications/>
      </v-col>
      <v-col md="4">
        <div class="shadow-lg">
          <a class="twitter-timeline p-3 text-primary" data-height="490" data-theme="light"
             href="https://twitter.com/eca_ethiopia?ref_src=twsrc%5Etfw">Tweets by ECA</a>
        </div>
      </v-col>
    </v-row>
  </section>
</template>
<script>
  import Headlines from "./components/Headlines";
  import Leadership from "./components/Leadership";
  import Publications from "./components/Publications";

  export default {
    components: {Publications, Leadership, Headlines},
    mounted() {
      let recaptchaScript = document.createElement('script');
      recaptchaScript.setAttribute('src', 'https://platform.twitter.com/widgets.js');
      document.head.appendChild(recaptchaScript)
    },
  }
</script>
