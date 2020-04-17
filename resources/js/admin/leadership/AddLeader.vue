<template>
  <v-card class="px-5 py-3 shadow-lg">
    <v-alert :type="alertType" dismissible v-show="showAlert">
      {{ alertType === 'success' ? 'Leader Successfully Inserted.' : 'Error. Something Went Wrong' }}
    </v-alert>
    <v-card-title>
      <span class="headline">Add Leader</span>
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid">
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Full Name*" required :rules="rules.required||rules.min_20"
                          v-model="leader.name"/>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Position*" required :rules="rules.required||rules.min_20"
                          v-model="leader.position"/>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-select :items="levels"
                      label="Level*"
                      required
                      v-model="leader.level"
            />
          </v-col>

          <v-col cols="12">
            <v-textarea
              :rules="rules.min_20"
              label="Description"
              v-model="leader.description"
            />
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
  import {LeaderModel} from "./leader_model.js";
  import {Rules} from "../validation-rules";
  import ajax from "../../ajax";
  import {errorHandler} from "../handle-error";
  import {store} from "../../store/store";

  export default {
    name: "Add Leader",
    components: {
      VueEditor
    },
    data() {
      return {
        valid: false,
        modal: false,
        levels: [1, 2, 3, 4, 5],
        leader: new LeaderModel(),
        rules: Rules,
        showAlert: false,
        alertType: 'success',
        button_text: 'Upload Image',
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
        ajax.post(`leadership`, formData).then(
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
  }
</script>

<style scoped>
  @import "https://cdn.quilljs.com/1.2.6/quill.snow.css";
</style>
