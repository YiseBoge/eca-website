<template>
  <v-container>
    <v-row class="pt-10" v-if="loading">
      <v-col>
        <v-skeleton-loader
          class="w-100"
          type="article"
        />
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col cols="12" md="8">
        <v-row class="mt-6">
          <v-col>
            <h3>{{data.title}}</h3>
            <span class="d-inline-block">
              Posted: <span class="font-italic text-muted" v-text="formatToDate(data.created_at)"/>
            </span>
            <span class="d-inline-block float-right">
              Deadline: <span class="font-italic text-muted" v-text="formatToDate(data.deadline)"/>
            </span>
          </v-col>
        </v-row>
        <v-row class="mb-6">
          <v-col>
            <div class="my-4" v-html="data.description"/>
            <a v-if="data.file_url" :href="server + data.file_url" class="btn btn-primary btn-sm text-white shadow-lg"
               target="_blank">
              <v-icon color="white" left small>mdi-download</v-icon>
              Download File
            </a>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4">
        <v-row class="mt-6">
          <v-col>
            <h2 class="text-muted text-center" v-text="tenderDate"/>
          </v-col>
        </v-row>
        <v-row class="my-6">
          <v-col v-if="daysLeft <= 0">
            <p class="text-muted text-muted text-center mt-3"
               v-text="'Application is closed'"/>
          </v-col>
          <v-col v-else>
            <v-alert :type="alert.type" dismissible v-show="alert.visible || false" v-html="alert.message"/>
            <v-form
              ref="form"
              v-model="valid"
            >
              <h3 class="primary--text">Apply</h3>
              <v-text-field
                v-model="application.name"
                counter
                ref="name"
                :rules="rules.required||rules.min_20"
                label="Name / Company"
                required
              />

              <v-text-field
                counter
                ref="email"
                v-model="application.email"
                :rules="rules.required||rules.min_20"
                label="E-mail"
                required
              />

              <div class="my-3">
                <input type="file" v-show="false" ref="file" @change="handleFileUpload" :rules="rules.required"/>
                <v-btn class="d-inline-block" color="info" @click="$refs.file.click()">
                  <v-icon small left>mdi-camera</v-icon>
                  {{ button_text }}
                </v-btn>
                <v-btn :disabled="!valid" color="success" class="float-right" :loading="submitting" @click="submit">
                  Apply
                </v-btn>
              </div>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<!--<style>-->
<!--  .v-input__slot{-->
<!--    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;-->
<!--  }-->
<!--</style>-->
<script>

  import {store} from "~/store/store";
  import {SERVER_BASE_URL} from "~/ajax";
  import {TenderApplicationModel} from "./application_model";
  import {Rules} from "../../admin/validation-rules";
  import ajax from "../../ajax";
  import {errorHandler} from "../../admin/handle-error";
  import moment from "moment";

  export default {
    name: "tender-show",
    data() {
      return {
        server: SERVER_BASE_URL,
        page: 1,
        size: 5,
        len: 6,
        submitting: false,
        valid: false,
        rules: Rules,
        alert: {
          message: "",
          type: "success",
          visible: false
        },
        button_text: 'Upload File',
        application: new TenderApplicationModel(),
        categories: ["Real-Time", "Trial Category", "Conversions"],
        category: 0
      }
    },
    watch: {
      '$route': 'selectTender'
    },
    methods: {
      handleFileUpload() {
        const filename = this.$refs.file.files[0].name;
        this.application.file = this.$refs.file.files[0];
        this.button_text = filename.slice(0, 10);
        this.button_text += filename.length < 10 ? "" : "...";
      },
      submit() {
        this.application.tender_id = this.data.id;
        let formData = new FormData();
        Object.keys(this.application).forEach((key) => {
          formData.append(key, this.application[key])
        });
        let self = this;
        self.submitting = true;
        ajax.post(`tender-application`, formData).then(
          response => {
            self.alert = {
              message: "Successfully Applied",
              type: "success",
              visible: true
            };
          }, error => {
            errorHandler(error);
            if (error.response.status === 500) {
              self.alert = {
                message: "Error: Something went wrong at the server",
                type: "error",
                visible: true
              }
            } else if (error.response.status === 400) {
              self.alert = {
                message: this.serverValidationMessage(error),
                type: "error",
                visible: true
              }
            } else {
              self.alert = {
                message: "Please fix issues before submitting",
                type: "error",
                visible: true
              }
            }
          }
        ).finally(function () {
          self.submitting = false
        });
      },
      selectTender() {
        store.dispatch('setSelectedTender', {id: this.$route.params.id});
      },
      serverValidationMessage(error) {
        let items = "";
        Object.keys(error.response.data).forEach((key) => {
          items += `<li>${error.response.data[key]}</li>`;
        });
        return `
        <strong>Please fix the following issues</strong>
        <ul>${items}</ul>
        `
      },
    },
    created() {
      let id = this.$route.params.id;
      this.selectTender(id);
    },
    computed: {
      data: () => store.getters.getSelectedTender,
      loading: () => store.getters.getLoading,
      daysLeft() {
        return moment(this.data.deadline).diff(moment(new Date()), "days")
      },
      tenderDate() {
        return this.daysLeft >= 0 ? `${this.daysLeft} Days Left` : `${-this.daysLeft} Days Ago`
      }
    },
  }
</script>
