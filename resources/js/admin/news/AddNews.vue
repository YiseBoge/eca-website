<template>
  <v-card class="px-5 py-3 shadow-lg">
    <v-alert :type="alert.type" dismissible v-show="alert.visible || false">
      {{ alert.message }}
    </v-alert>

    <v-card-title>
      <span class="headline">Add news</span>
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid">
        <v-row>
          <v-col md="9" sm="12">
            <v-text-field label="Title*" required :rules="rules.required||rules.min_20"
                          v-model="news.title"/>
          </v-col>
          <v-col class="mx-auto" md="3">
            <v-switch label="Featured" v-model="news.is_featured"/>
          </v-col>

          <input type="file" accept="image/png, image/jpeg, image/bmp" v-show="false" ref="file"
                 @change="handleFileUpload" :rules="rules.file"/>

          <v-col cols="12">
            <vue-editor v-model="news.description"
                        :editorOptions="editorSettings"
                        :customModules="customModulesForEditor"
                        :rules="rules.min_100"/>
          </v-col>

          <v-col cols="6">
            <v-btn @click="$refs.file.click()" class="d-block" color="info" large tile>
              <v-icon left>mdi-camera</v-icon>
              {{ button_text }}
            </v-btn>
          </v-col>

          <v-col class="mx-auto" cols="6">
            <v-select :items="categories" :rules="rules.required" label="Select category" v-model="news.category"/>
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
  import {NewsModel} from "./news_model";
  import {Rules} from "../validation-rules";
  import ajax from "../../ajax";
  import {store} from "../../store/store";
  import {errorHandler} from "../handle-error";
  import {EventModel} from "../events/event_model";
  import moment from "moment";

  export default {
    name: "Add News",
    components: {
      VueEditor
    },
    data() {
      return {
        valid: false,
        modal: false,
        news: new NewsModel(),
        rules: Rules,
        loading: false,
        alert: {
          message: "",
          type: "",
          visible: false
        },
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
    watch: {
      '$route': 'clear'
    },
    methods: {
      clear() {
        this.news = new NewsModel();
        this.alert = {
          message: "",
          type: "",
          visible: false
        };
      },
      handleFileUpload() {
        // file upload handler
        const filename = this.$refs.file.files[0].name;
        this.news.image = this.$refs.file.files[0];
        this.button_text = filename.slice(0, 10);
        this.button_text += filename.length < 10 ? "" : "...";
      },
      submit() {
        console.log(this.news);
        let formData = new FormData();
        Object.keys(this.news).forEach((key) => {
          formData.append(key, this.news[key])
        });
        let self = this;

        self.loading = true;
        ajax.post(`news`, formData).then(
          response => {
            self.alert = {
              message: "Successfully Inserted News",
              type: "success",
              visible: true
            };
            store.dispatch('setNews', {page: 1, size: 10, year: 'All', category: ''});
          }, error => {
            errorHandler(error);
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
          }
        ).finally(function () {
          self.loading = false
        });
      }
    },
    created() {
      store.dispatch('setNewsCategories');
    },
    computed: {
      categories () {
        return store.getters.getNewsCategories;
      }
    }
  }
</script>

<style scoped>
  @import "https://cdn.quilljs.com/1.2.6/quill.snow.css";
</style>
