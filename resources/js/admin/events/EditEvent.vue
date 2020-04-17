<template>
  <v-card class="px-5 py-3 shadow-lg">
    <v-alert :type="alertType" dismissible v-show="showAlert">
      {{ alertType === 'success' ? 'Event Successfully Updated.' : 'Error. Something Went Wrong' }}
    </v-alert>

    <v-card-title>
      <span class="headline">Edit Event</span>
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid">
        <v-row>
          <v-col cols="12" sm="12" md="12">
            <v-text-field label="Title*" required :rules="rules.required||rules.required"
                          v-model="selectedEvent.title"/>
          </v-col>

          <v-col cols="12">
            <v-textarea
              :rules="rules.min_20"
              label="Description"
              v-model="selectedEvent.description"
            />
          </v-col>

          <v-col cols="12" lg="4">
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
          <v-col cols="8">
            <v-text-field class="mx-auto" label="Location" v-model="selectedEvent.location"/>
          </v-col>
        </v-row>

        <div class="my-2 mx-auto align-center align-content-center">
          <v-btn :disabled="!valid" color="success" class="d-block mx-auto" @click="submit"> Save</v-btn>
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
  import {Rules} from "../validation-rules";
  import ajax from "../../ajax";
  import {store} from "../../store/store";
  import {router} from "../../routes/admin-router";
  import {errorHandler} from "../handle-error";

  export default {
    name: "Edit Event",
    components: {
      VueEditor
    },
    data() {
      return {
        valid: false,
        modal: false,
        //event: store.getters.getSelectedEvent,
        rules: Rules,
        showAlert: false,
        alertType: 'success',
        dates: [],
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
    methods: {
      submit() {
        console.log(this.selectedEvent);
        let formData = new FormData();
        Object.keys(this.selectedEvent).forEach((key) => {
          formData.append(key, this.selectedEvent[key])
        });
        formData.append('start_date', this.dates[0]);
        formData.append('end_date', this.dates[1]);
        formData.append("_method", "put");
        let self = this;
        ajax.post(`event/${this.selectedEvent.id}`, formData).then(
          response => {
            self.showAlert = true;
            self.alertType = 'success';
          }, error => {
            self.showAlert = true;
            self.alertType = 'error';
            errorHandler(error);
          }
        )
      }
    },
    created() {
      store.dispatch('setSelectedEvent', {id: router.currentRoute.params.id});
    },
    mounted() {
      this.event = store.getters.getSelectedEvent;
      this.dateRange = this.dates;
    },
    computed: {
      selectedEvent() {
        let event = store.getters.getSelectedEvent;
        this.dates = [event.start_date, event.end_date];
        return event;
      },
      dateRangeText () {
        return this.dates.join("   ~   ");
      },
    }
  }
</script>

<style scoped>
  @import "https://cdn.quilljs.com/1.2.6/quill.snow.css";
</style>
