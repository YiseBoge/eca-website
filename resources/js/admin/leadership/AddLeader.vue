<template>
  <v-card>
    <v-card-title>
      <span class="headline">Add leader</span>
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid">
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Full Name*" required :rules="rules.required||rules.min_20"
                          v-model="leader.title"></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Position*" required :rules="rules.required||rules.min_20"
                          v-model="leader.position"></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Level*" required :rules="rules.required||rules.min_20"
                          v-model="leader.level"></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-textarea
              v-model="leader.description"
              clearable
              clear-icon="mdi-close"
              label="Description"
            ></v-textarea>
          </v-col>

          <input type="file" accept="image/png, image/jpeg, image/bmp" v-show="false" ref="file"
                 @change="handleFileUpload" :rules="rules.file"/>

          <v-col cols="12">
            <v-btn class="ma-2 d-block mx-auto mb-4" large tile color="info" @click="$refs.file.click()">
              <v-icon left>mdi-camera</v-icon>
              {{ button_text }}
            </v-btn>
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
  import {LeaderModel} from "./leader-model";
  import {Rules} from "../validation-rules";
  import ajax from "../../ajax";

  export default {
    name: "Add News",
    components: {
      VueEditor
    },
    data() {
      return {
        valid: false,
        modal: false,
        leader: LeaderModel,
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
        this.leader.image = this.$refs.file.files[0];
        this.button_text = filename.slice(0, 10);
        this.button_text += filename.length < 10 ? "" : "...";
      },
      submit() {
        console.log(this.leader);
        let formData = new FormData();
        Object.keys(this.leader).forEach((key) => {
          formData.append(key, this.leader[key])
        });
        let self = this;
        ajax.post(`leader`, formData).then(
          response => {
            console.log(response);
          }, error => {
            console.log(error);
          }
        )
      }
    },
    computed: {}
  }
</script>

<style scoped>
  @import "https://cdn.quilljs.com/1.2.6/quill.snow.css";
</style>
