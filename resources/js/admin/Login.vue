<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>

          <v-toolbar-title>Login form</v-toolbar-title>
          <v-spacer/>
        </v-toolbar>
        <v-card-text>
          <v-form class="mx-4 my-4" v-model="valid">
            <v-text-field
              :rules="rules.required"
              v-model="user.email"
              label="Email"
              required
            />
            <v-text-field
              :rules="rules.required"
              :append-icon="!show1 ? 'mdi-eye-off' : 'mdi-eye'"
              v-model="user.password"
              label="Password"
              :type="show1 ? 'text' : 'password'"
              required
              @click:append="show1 = !show1"
            />

            <div class="my-2 mx-auto align-center align-content-center">
              <v-btn :disabled="!valid" color="primary" class="d-block mx-auto"
                     @click="submit"> Login
              </v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import ajax from "../ajax";
  import router from "../router";
  import {handleError} from "../auth";
  import {store} from "../store/store"

  export default {
    name: "LoginComponent.vue",
    data() {
      return {
        valid: false,
        show1: false,
        errorMsg: false,
        user: {
          email: "segnih8@gmail.com",
          password: '12345678',
        },
                rules: {
                    required: [val => (val || '').length > 0 || 'This field is required'],
                },
            }
        },
        methods: {
            submit() {
                ajax.post("login", this.user)
                    .then(response => {
                        console.log(response.data.data);
                        store.dispatch("setUser", response.data.data);
                        store.dispatch("resetMessage");
                        router.push("/"); // route to dashboard list if the authentication is successful
                    }, error => {
                        store.dispatch("setStateMessage", "The email and password you entered don't match");
                        handleError(error);
                    });
            },
        }
    }
</script>

<style scoped>
</style>
