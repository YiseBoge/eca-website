<template>
  <v-card>
    <v-card-title>
      <span class="headline">New publication</span>
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid">
        <v-row>
          <v-col cols="12" sm="12" md="12">
            <v-text-field label="Title*" required :rules="rules.required||rules.min_20"
                          v-model="publication.title"></v-text-field>
          </v-col>

          <input type="file" accept="image/png, image/jpeg, image/bmp" v-show="false" ref="file"
                 @change="handleFileUpload" :rules="rules.file"/>

          <v-col cols="12">
            <vue-editor v-model="publication.description"
                        :editorOptions="editorSettings"
                        :customModules="customModulesForEditor"
                        :rules="rules.min_100"></vue-editor>
          </v-col>

          <v-col cols="3">
            <v-btn class="ma-2 d-block mx-auto mb-4" large tile color="info" @click="$refs.file.click()">
              <v-icon left>mdi-camera</v-icon>
              {{ button_text }}
            </v-btn>
          </v-col>

          <v-col cols="2" class="mx-auto">
            <v-switch v-model="publication.is_featured" label="Featured"></v-switch>
          </v-col>
          <v-col cols="2" class="mx-auto">
            <v-select label="Select category" v-model="publication.category" :rules="rules.required" :items="categories">
            </v-select>
          </v-col>

          <v-col cols="4">
            <v-text-field v-model="publication.link" label="File Url"></v-text-field>
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
  import {PublicationModel} from "./publications-model";
  import {Rules} from "../validation-rules";
  import ajax from "../../ajax";

  export default {
    name: "Add publication",
    components: {
      VueEditor
    },
    data() {
      return {
        valid: false,
        modal: false,
        publication: PublicationModel,
        rules: Rules,
        button_text: 'Upload Image',
        categories: [
          'Category 1',
          'Category 2',
          'Category 3',
        ],
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
      handleFileUpload() {
        // file upload handler
        const filename = this.$refs.file.files[0].name;
        this.publication.image = this.$refs.file.files[0];
        this.button_text = filename.slice(0, 10);
        this.button_text += filename.length < 10 ? "" : "...";
      },
      submit() {
        console.log(this.publication);
        let formData = new FormData();
        Object.keys(this.publication).forEach((key) => {
          formData.append(key, this.publication[key])
        });
        let self = this;
        ajax.post(`publication`, formData).then(
          response => {
            console.log(response);
          }, error => {
            console.log(error);
          }
        )
      }
    },
    computed: {
    }
  }
</script>

<style scoped>
  @import "https://cdn.quilljs.com/1.2.6/quill.snow.css";
</style>
