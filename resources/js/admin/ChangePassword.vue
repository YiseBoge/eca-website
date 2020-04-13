<template>
  <v-dialog v-model="dialog" persistent max-width="400px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on" text>change password</v-btn>
    </template>
    <v-card>
      <v-alert :type="type" v-if="showAlert" dismissible> {{ msg }}</v-alert>
      <v-card-title>
        <span class="headline">Change Password</span>
      </v-card-title>
      <v-card-text>
        <small>*indicates required field</small>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-text-field label="Old password*" required v-model="password.old_password"
                            :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1"
                            :append-icon="!show1 ? 'mdi-eye-off' : 'mdi-eye'" counter></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field label="New password" hint="must be longer than 3 characters" v-model="password.new_password"
                            :rules="rules.v.required" :type="show2 ? 'text' : 'password'" @click:append="show2 = !show2"
                            :append-icon="!show2 ? 'mdi-eye-off' : 'mdi-eye'" counter>
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field label="Confirm password" hint="must be longer than 3 characters"
                            v-model="password.confirm_pass"
                            :rules="rules.match" :type="show3 ? 'text' : 'password'" @click:append="show3 = !show3"
                            :append-icon="!show3 ? 'mdi-eye-off' : 'mdi-eye'" counter>
              </v-text-field>
            </v-col>
          </v-row>
          <v-container class="text-center">
            <v-btn color="blue text-center darken-1 mx-auto" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue text-center darken-1 mx-auto" dark @click="changePass">Save</v-btn>
          </v-container>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  import {Rules} from "./validation-rules";
  import ajax from "../ajax";
  import {store} from "../store/store";
  import {router} from "../routes/admin-router";
  import {logout} from "./auth";

  export default {
    name: "ChangePassword",
    data() {
      return {
        msg: '',
        type: '',
        show1: false,
        show2: false,
        show3: false,
        dialog: false,
        showAlert: false,
        password: {
          old_password: '',
          new_password: '',
          confirm_pass: '',
        },
        rules: {
          v: Rules,
          match: [v => (v === this.password.new_password && v.length > 0) || "Password doesn't match"]
        }
      }
    },
    methods: {
      changePass() {
        ajax.post('auth/change-password', this.password).then(
          res => {
            this.type = 'success';
            this.msg = 'Changed successfully, You have to login again';
            setTimeout(function () {
              logout();
            }, 2000);
          },
          err => {
            this.type = 'error';
            this.msg = 'Unauthorized!!'
          }
        );
        this.showAlert = true;
      }
    }
  }
</script>

<style scoped>

</style>
