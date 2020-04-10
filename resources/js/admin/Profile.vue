<template>
  <v-container class="col-md-6">
    <v-alert type="error" v-if="sessionMessage" dismissible>{{ sessionMessage }}</v-alert>

    <v-card class="py-3 px-4">
      <v-form>
        <v-text-field append-icon="mdi-account" label="Name" v-model="user.name"/>
        <v-text-field append-icon="mdi-email" label="Email" v-model="user.email"/>
        <v-text-field append-icon="mdi-lock" label="Password" v-model="user.password"/>
        <v-btn @click="update" class="mx-auto d-block" color="blue" dark>Update</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
  import ajax from "../ajax";

  import {store} from "../store/store";
  import {router} from "../routes/admin-router";
  import {errorHandler} from "./handle-error";

  export default {
    name: "Profile",
    data() {
      return {
        user: store.getters.getUser
      }
    },
    methods: {
      update() {
        ajax.post('user-profile/update', this.user).then(
          response => {
            console.log(response);
            store.dispatch("setStateMessage", "User info has changes successfully");

            if (response.data.token !== store.getters.getApiToken) {
              store.dispatch("setStateMessage", "You have to re-login");

              store.dispatch("setUser", response.data);
              setTimeout(function() {
                store.dispatch('resetUser');
                router.push('/').then();
              }, 2000);

            }
          },
          err => {
            errorHandler(err);
            store.dispatch("setStateMessage", "Something went wrong");
          }
        )
      }
    },
    computed: {
      sessionMessage() {
        return store.getters.getMessage;
      }
    },
    mounted() {
      store.dispatch("resetMessage");
    }

  }
</script>

<style scoped>

</style>
