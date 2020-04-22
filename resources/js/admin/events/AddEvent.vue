<template>
  <v-card class="px-5 py-3 shadow-lg">
    <v-alert :type="alert.type" dismissible v-show="alert.visible || false">
      {{ alert.message }}
    </v-alert>
    <v-card-title>
      <span class="headline">Add Event</span>
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid">
        <v-row>
          <v-col cols="12" sm="12" md="12">
            <v-text-field label="Title*" required :rules="rules.required||rules.required"
                          v-model="event.title"/>
          </v-col>

          <v-col cols="12">
            <v-textarea
              :rules="rules.min_20"
              label="Description"
              v-model="event.description"
            />
          </v-col>

          <v-col cols="12" lg="6">
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="dateRangeText"
                  label="Events date"
                  hint="YYYY-MM-DD format"
                  persistent-hint
                  prepend-icon="mdi-calendar"
                  readonly
                  v-on="on"
                />
              </template>
              <v-date-picker @input="menu2 = false" no-title range v-model="dates"/>
            </v-menu>
          </v-col>
          <v-col cols="6">
            <v-text-field class="mx-auto" label="Location" v-model="event.location"/>
          </v-col>
        </v-row>

        <div class="my-2 mx-auto align-center align-content-center">
          <v-btn :disabled="!valid" color="success" class="d-block mx-auto" :loading="loading" @click="submit"> Save</v-btn>
        </div>
      </v-form>
      <small>*indicates required field</small>
    </v-card-text>
  </v-card>

</template>

<script>

  import {VueEditor} from 'vue2-editor';
  import {ImageDrop} from 'quill-image-drop-module';
  import ImageResize from '@taoqf/quill-image-resize-module';
  import {EventModel} from "./event_model";
  import {Rules} from "../validation-rules";
  import ajax from "../../ajax";
  import moment from "moment";
  import {errorHandler} from "../handle-error";
  import {store} from "../../store/store";

  export default {
    name: "Add Event",
    components: {
      VueEditor
    },
    data() {
      return {
        loading: false,
        alert: {
          message: "",
          type: "",
          visible: false
        },
        valid: false,
        modal: false,
        event: new EventModel(),
        rules: Rules,
        dates: [moment(Date.now()).format('YYYY-MM-DD'), moment(Date.now()).format('YYYY-MM-DD')],
        editorSettings: {
          modules: {
            imageDrop: true,
            imageResize: {}
          }
        },
        customModulesForEditor: [
          {alias: 'imageDrop', module: ImageDrop},
          {alias: 'imageResize', module: ImageResize}
        ],
      };
    },
    watch: {
      '$route': 'clear'
    },
    methods: {
      clear() {
        this.event = new EventModel();
        this.dates = [moment(Date.now()).format('YYYY-MM-DD'), moment(Date.now()).format('YYYY-MM-DD')];
        this.alert = {
          message: "",
          type: "",
          visible: false
        };
      },
      submit() {
        console.log(this.event);
        let formData = new FormData();
        Object.keys(this.event).forEach((key) => {
          formData.append(key, this.event[key])
        });
        formData.append('start_date', this.dates[0]);
        formData.append('end_date', this.dates[1]);
        let self = this;

        self.loading = true;
        ajax.post(`event`, formData).then(
          response => {
            self.alert = {
              message: "Successfully Inserted Event",
              type: "success",
              visible: true
            };
            store.dispatch('setEvents', {page: 1, size: 10});
          }, error => {
            if (error.response.status === 500){
              self.alert = {
                message: "Error: Something went wrong at the server",
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
            errorHandler(error);
          }
        ).finally(function () {
          self.loading = false
        });
      }
    },
    computed : {
      dateRangeText () {
        return this.dates.join('    ~    ')
      },
    }
  }
</script>

<style scoped>
  @import "https://cdn.quilljs.com/1.2.6/quill.snow.css";
</style>
