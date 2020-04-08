<template>
  <v-card class="px-5 py-3">
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
            <vue-editor v-model="selectedEvent.description"
                        :editorOptions="editorSettings"
                        :customModules="customModulesForEditor"
                        :rules="rules.min_20"/>
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
              <v-date-picker v-model="dates" no-title @input="menu2 = false" range></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="8">
            <v-text-field label="Location" v-model="selectedEvent.location" class="mx-auto"></v-text-field>
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
        return store.getters.getSelectedEvent;
      },
      dates() {
          return [this.selectedEvent.start_date, this.selectedEvent.end_date];
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
