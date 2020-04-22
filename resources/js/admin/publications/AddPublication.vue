<template>
  <v-card class="px-5 py-3 shadow-lg">
    <v-alert :type="alert.type" dismissible v-show="alert.visible || false">
      {{ alert.message }}
    </v-alert>

    <v-card-title>
      <span class="headline">New publication</span>
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid">
        <v-row>
          <v-col cols="12" sm="12" md="12">
            <v-text-field label="Title*" required :rules="rules.required||rules.min_20"
                          v-model="publication.title"/>
          </v-col>
          <v-col cols="12">
            <vue-editor v-model="publication.description"
                        :editorOptions="editorSettings"
                        :customModules="customModulesForEditor"
                        :rules="rules.min_100"/>
          </v-col>

          <!-- <input type="file" accept="image/png, image/jpeg, image/bmp" v-show="false" ref="file"
                 @change="handleImageUpload" :rules="rules.file"/> -->

          <v-col cols="4">
            <!-- <v-btn class="ma-2 d-block mx-auto mb-4" large tile color="info" @click="$refs.file.click()">
              <v-icon left>mdi-camera</v-icon>
              {{ image_button_text }}
            </v-btn> -->
            <template>
              <v-file-input label="Upload Image" show-size v-model="publication.image"/>
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
              <v-file-input label="Upload File" show-size v-model="publication.file"/>
            </template>
          </v-col>

          <v-col cols="4" class="mx-auto">
            <v-select label="Select category" v-model="publication.category" :rules="rules.required" :items="categories">
            </v-select>
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
  import {PublicationModel} from "./publication_model";
  import {Rules} from "../validation-rules";
  import ajax from "../../ajax";
  import {store} from "../../store/store";
  import {errorHandler} from "../handle-error";

  export default {
    name: "Add Publication",
    components: {
      VueEditor
    },
    data() {
      return {
        valid: false,
        modal: false,
        publication: new PublicationModel(),
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
    methods: {
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
        console.log(this.publication);
        let formData = new FormData();
        Object.keys(this.publication).forEach((key) => {
          formData.append(key, this.publication[key])
        });
        let self = this;

        self.loading = true;
        ajax.post(`publication`, formData).then(
          response => {
            self.alert = {
              message: "Successfully Inserted Publication",
              type: "success",
              visible: true
            };
            store.dispatch('setPublications', {page: 1, size: 10, year: 'All', category: ''});
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
    created() {
      store.dispatch('setPublicationCategories');
    },
    computed: {
      categories () {
        return store.getters.getPublicationCategories;
      }
    }
  }
</script>

<style scoped>
  @import "https://cdn.quilljs.com/1.2.6/quill.snow.css";
</style>
