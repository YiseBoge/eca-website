<template>
  <v-container class="col-md-6">
    <v-card class="px-3 py-6 shadow-lg">
      <v-alert type="error" v-if="sessionMessage" dismissible>{{ sessionMessage }}</v-alert>
      <v-card-title>
        Edit Profile
        <v-spacer />

        <change-password class="d-block mx-auto text-center"/>
      </v-card-title>
      <v-form class="px-5 my-5">
        <v-text-field append-icon="mdi-account" label="Name" v-model="user.name"/>
        <v-text-field append-icon="mdi-email" label="Email" v-model="user.email"/>
        <v-btn @click="update" class="mx-auto d-block" color="blue" dark>Update</v-btn>
        <div class="mx-auto d-block">
        </div>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
  import ajax from "../ajax";

  import {store} from "../store/store";
  import {router} from "../routes/admin-router";
  import {errorHandler} from "./handle-error";

  import {Rules} from "./validation-rules";
  import ChangePassword from "./ChangePassword";

  export default {
    name: "Profile",
    data() {
      return {
        user: store.getters.getUser,
        rules: Rules
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
    },
    components : {
      'change-password': ChangePassword
    }

  }
</script>

<style scoped>

</style>
