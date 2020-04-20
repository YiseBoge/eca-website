<template>
  <v-card class="px-5 py-3 shadow-lg">
    <v-alert :type="alert.type" dismissible v-show="alert.visible || false">
      {{ alert.message }}
    </v-alert>

    <v-card-title>
      <span class="headline">Edit News</span>
    </v-card-title>
    <v-fade-transition hide-on-leave>
      <v-card-text v-if="loadingPage">
        <v-skeleton-loader
          type="list-heading, list-item, list-item-three-line, list-item-three-line, list-item, actions"
        />
      </v-card-text>
      <v-card-text v-else>
        <v-form v-model="valid">
          <v-row>
            <v-col cols="9">
              <v-text-field label="Title*" required :rules="rules.required||rules.min_20"
                            v-model="selectedNews.title"/>
            </v-col>
            <v-col cols="3" class="mx-auto">
              <v-switch label="Featured" v-model="selectedNews.is_featured"/>
            </v-col>

            <input type="file" accept="image/png, image/jpeg, image/bmp" v-show="false" ref="file"
                   @change="handleFileUpload" :rules="rules.file"/>

            <v-col cols="12">
              <vue-editor v-model="selectedNews.description"
                          :editorOptions="editorSettings"
                          :customModules="customModulesForEditor"
                          :rules="rules.min_100"/>
            </v-col>

            <v-col cols="8">
              <v-btn class="ma-2 d-block mb-4" large tile color="info" @click="$refs.file.click()">
                <v-icon left>mdi-camera</v-icon>
                {{ button_text }}
              </v-btn>
            </v-col>
            <v-col cols="4" class="mx-auto">
              <v-select label="Select category" v-model="selectedNews.category" :rules="rules.required"
                        :items="categories"/>
            </v-col>
          </v-row>
          <div class="col-md-5 mx-auto" v-if="selectedNews.image_url">
            <v-img :src="selectedNews.image_url"/>
          </div>
          <div class="my-2 mx-auto align-center align-content-center">
            <v-btn :disabled="!valid" color="success" class="d-block mx-auto" :loading="loading" @click="submit"> Update</v-btn>
          </div>
        </v-form>
        <small>*indicates required field</small>
      </v-card-text>
    </v-fade-transition>
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
    name: "Edit News",
    components: {
      VueEditor
    },
    data() {
      return {
        valid: false,
        modal: false,
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
    methods: {
      handleFileUpload() {
        // file upload handler
        const filename = this.$refs.file.files[0].name;
        this.selectedNews.image = this.$refs.file.files[0];
        this.button_text = filename.slice(0, 10);
        this.button_text += filename.length < 10 ? "" : "...";
      },
      submit() {
        console.log(this.selectedNews);
        let formData = new FormData();
        this.selectedNews.is_featured = this.selectedNews.is_featured === 1;
        Object.keys(this.selectedNews).forEach((key) => {
          formData.append(key, this.selectedNews[key])
        });
        formData.append("_method", "put");
        let self = this;

        self.loading = true;
        ajax.post(`news/${this.selectedNews.id}`, formData).then(
          response => {
            self.alert = {
              message: "Successfully Updated News",
              type: "success",
              visible: true
            };
            store.dispatch('setNews', {page: 1, size: 10, year: 'All', category: ''});
            store.dispatch('setSelectedNews', {id: router.currentRoute.params.id});
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
      store.dispatch('setSelectedNews', {id: router.currentRoute.params.id});
      store.dispatch('setNewsCategories');
    },
    mounted() {
      this.news = store.getters.getSelectedNews;
    },
    computed: {
      categories() {
        return store.getters.getNewsCategories;
      },
      selectedNews() {
        return store.getters.getSelectedNews;
      },
      loadingPage: () => store.getters.getLoading,
    }
  }
</script>

<style scoped>
  @import "https://cdn.quilljs.com/1.2.6/quill.snow.css";
</style>
