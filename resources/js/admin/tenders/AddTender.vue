<template>
  <v-card class="px-5 py-3 shadow-lg">
    <v-alert :type="alert.type" dismissible v-show="alert.visible || false">
      {{ alert.message }}
    </v-alert>

    <v-card-title>
      <span class="headline">New Tender</span>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid">
        <v-row>
          <v-col cols="12" md="8">
            <v-text-field :rules="rules.required||rules.min_20" label="Title*" required
                          v-model="tender.title"/>
          </v-col>
          <v-col cols="12" md="4">
            <v-menu
              :close-on-content-click="false"
              max-width="290px"
              min-width="290px"
              offset-y
              transition="scale-transition"
              v-model="menu2"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  :rules="rules.required"
                  :value="tender.deadline ? formatToDate(tender.deadline) : null"
                  label="Deadline*"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-on="on"
                />
              </template>
              <v-date-picker @input="menu2 = false" no-title v-model="tender.deadline"/>
            </v-menu>
          </v-col>
          <v-col cols="12">
            <vue-editor :customModules="customModulesForEditor"
                        :editorOptions="editorSettings"
                        :rules="rules.min_100"
                        v-model="tender.description"/>
          </v-col>

          <!-- <input type="file" accept="image/png, image/jpeg, image/bmp" v-show="false" ref="file"
                 @change="handleImageUpload" :rules="rules.file"/> -->

          <v-col cols="4">
            <!-- <v-btn class="ma-2 d-block mx-auto mb-4" large tile color="info" @click="$refs.file.click()">
              <v-icon left>mdi-camera</v-icon>
              {{ image_button_text }}
            </v-btn> -->
            <template>
              <v-file-input label="Upload Image" show-size v-model="tender.image"/>
            </template>
          </v-col>

          <!-- <input type="file" v-show="false" ref="file"
                 @change="handleFileUpload" :rules="rules.file"/> -->
          <v-col cols="4">
            <!-- <v-btn class="ma-2 d-block mx-auto mb-4" large tile color="info" @click="$refs.file.click()">
              <v-icon left>mdi-file</v-icon>
              {{ file_button_text }}
            </v-btn> -->
            <template>
              <v-file-input label="Upload File" show-size v-model="tender.file"/>
            </template>
          </v-col>

          <v-col class="mx-auto" cols="4">
            <v-select :items="categories" :rules="rules.required" label="Select category" v-model="tender.category">
            </v-select>
          </v-col>
        </v-row>

        <div class="my-2 mx-auto align-center align-content-center">
          <v-btn :disabled="!valid" :loading="loading" @click="submit" class="d-block mx-auto" color="success"> Save
          </v-btn>
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
  import {TenderModel} from "./tender_model";
  import {Rules} from "../validation-rules";
  import ajax from "../../ajax";
  import {store} from "../../store/store";
  import {errorHandler} from "../handle-error";

  export default {
    name: "Add Tender",
    components: {
      VueEditor
    },
    data() {
      return {
        valid: false,
        modal: false,
        tender: new TenderModel(),
        rules: Rules,
        loading: false,
        alert: {
          message: "",
          type: "",
          visible: false
        },
        image_button_text: 'Upload Image',
        file_button_text: 'Upload File',
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
        this.$refs.form.reset();
        this.tender = new TenderModel();
        this.alert = {
          message: "",
          type: "success",
          visible: false
        };
      },
      // handleImageUpload() {
      //   // file upload handler
      //   const filename = this.$refs.file.files[0].name;
      //   this.publication.image = this.$refs.file.files[0];
      //   this.image_button_text = filename.slice(0, 10);
      //   this.image_button_text += filename.length < 10 ? "" : "...";
      // },
      // handleFileUpload() {
      //   // file upload handler
      //   const filename = this.$refs.file.files[0].name;
      //   this.publication.file = this.$refs.file.files[0];
      //   this.file_button_text = filename.slice(0, 10);
      //   this.file_button_text += filename.length < 10 ? "" : "...";
      // },
      submit() {
        console.log(this.tender);
        let formData = new FormData();
        Object.keys(this.tender).forEach((key) => {
          formData.append(key, this.tender[key])
        });
        let self = this;

        self.loading = true;
        ajax.post(`tender`, formData).then(
          response => {
            self.alert = {
              message: "Successfully Inserted Tender",
              type: "success",
              visible: true
            };
            store.dispatch('setTenders', {page: 1, size: 10, category: ''});
          }, error => {
            errorHandler(error);
            if (error.response.status === 500) {
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
          }
        ).finally(function () {
          self.loading = false
        });
      }
    },
    created() {
      store.dispatch('setTenderCategories');
    },
    computed: {
      categories() {
        return store.getters.getTenderCategories;
      }
    }
  }
</script>

<style scoped>
  @import "https://cdn.quilljs.com/1.2.6/quill.snow.css";
</style>
