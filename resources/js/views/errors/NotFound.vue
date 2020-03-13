<template>
  <v-container
    class="text-center"
    fill-height
    style="height: calc(100vh - 300px);"
  >
    <v-row align="center">
      <v-col>
        <h1 class="display-2 primary--text">Oops, 404</h1>

        <p>The page you were looking for does not exist</p>

        <v-btn @click="backToHome" color="primary" outlined small>
          Get me back home!
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import {router} from "../../routes/admin-router";

  export default {
    name: 'NotFound',
    props: {
      lang: {
        type: String,
        default: 'en',
      },
    },
    created() {
      this.$ssrContext && this.$ssrContext.res.status(404)
    },
    methods: {
      backToHome() {
        router.push('/');
      }
    }
  }
</script>
