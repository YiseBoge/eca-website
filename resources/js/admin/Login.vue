<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          md="4"
          sm="8"
        >
          <v-alert dismissible type="error" v-if="sessionMessage">{{ sessionMessage }}</v-alert>
          <v-card class="shadow-lg">
            <v-toolbar
              color="primary"
              dark flat
            >
              <v-toolbar-title>Login</v-toolbar-title>
              <v-spacer/>
              <v-progress-circular
                v-if="loading"
                class="mx-auto"
                :size="50"
                :width="7"
                color="white"
                indeterminate
              />
            </v-toolbar>
            <v-card-text>
              <v-form class="mx-4 my-4" v-model="valid">
                <v-text-field
                  :rules="rules.required"
                  label="Email"
                  required
                  v-model="user.email"
                />
                <v-text-field
                  :append-icon="!show1 ? 'mdi-eye-off' : 'mdi-eye'"
                  :rules="rules.required"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
                  label="Password"
                  required
                  v-model="user.password"
                />

                <div class="my-2 mx-auto align-center align-content-center">
                  <v-btn :disabled="!valid" @click="submit" class="d-block mx-auto"
                         color="primary"> Login
                  </v-btn>
                </div>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
  import ajax from "../ajax";
  import {router} from "../routes/router";
  import {store} from "../store/store"

  export default {
    name: "LoginComponent.vue",
    data() {
      return {
        valid: false,
        show1: false,
        errorMsg: false,
        loading: false,
        user: {
          email: null,
          password: null,
        },
        rules: {
          required: [val => (val || '').length > 0 || 'This field is required'],
        },
      }
    },
    methods: {
      submit() {
        this.loading = true;
        ajax.post("auth/login", this.user)
          .then(response => {
            console.log(response);
            store.dispatch("setToken", response.data.token);
            store.dispatch("resetMessage");
            router.push("/"); // route to dashboard list if the authentication is successful
            ajax.get("auth/user").then(
              resp => {
                console.log("user", resp.data.data);
                store.dispatch('setUser', resp.data.data);
                this.loading = false;
              }
            )
          }, error => {
            console.log(error);
            store.dispatch("setStateMessage", "The email and password you entered don't match");
            this.loading = false;
          });
      },
    },
    computed: {
      sessionMessage() {
        return store.getters.getMessage;
      }
    }
  }
</script>
