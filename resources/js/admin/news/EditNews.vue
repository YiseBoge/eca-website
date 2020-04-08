<template>
  <v-card>
    <v-alert :type="alertType" dismissible v-show="showAlert">
      {{ alertType === 'success' ? 'News Successfully updated.' : 'Error something went wrong' }}
    </v-alert>

    <v-card-title>
      <span class="headline">Edit News</span>
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid">
        <v-row>
          <v-col cols="12" sm="12" md="12">
            <v-text-field label="Title*" required :rules="rules.required||rules.min_20"
                          v-model="selectedNews.title"/>
          </v-col>

          <input type="file" accept="image/png, image/jpeg, image/bmp" v-show="false" ref="file"
                 @change="handleFileUpload" :rules="rules.file"/>

          <v-col cols="12">
            <vue-editor v-model="selectedNews.description"
                        :editorOptions="editorSettings"
                        :customModules="customModulesForEditor"
                        :rules="rules.min_100"/>
          </v-col>

          <v-col cols="3">
            <v-btn class="ma-2 d-block mx-auto mb-4" large tile color="info" @click="$refs.file.click()">
              <v-icon left>mdi-camera</v-icon>
              {{ button_text }}
            </v-btn>
          </v-col>

          <v-col cols="2" class="mx-auto">
            <v-switch label="Featured" v-model="selectedNews.is_featured"/>
          </v-col>
          <v-col cols="2" class="mx-auto">
            <v-select label="Select category" v-model="selectedNews.category" :rules="rules.required"
                      :items="categories"/>
          </v-col>
        </v-row>
        <div class="col-md-5 mx-auto">
          <v-img :src="selectedNews.image_url"/>
        </div>
        <div class="my-2 mx-auto align-center align-content-center">
          <v-btn :disabled="!valid" color="success" class="d-block mx-auto" @click="submit"> Update</v-btn>
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
    name: "Edit News",
    components: {
      VueEditor
    },
    data() {
      return {
        valid: false,
        modal: false,
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
        this.selectedNews.image = this.$refs.file.files[0];
        this.button_text = filename.slice(0, 10);
        this.button_text += filename.length < 10 ? "" : "...";
      },
      submit() {
        console.log(this.selectedNews);
        let formData = new FormData();
        Object.keys(this.selectedNews).forEach((key) => {
          formData.append(key, this.selectedNews[key])
        });
        formData.append("_method", "put");
        let self = this;
        ajax.post(`news/${this.selectedNews.id}`, formData).then(
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
      }
    }
  }
</script>

<style scoped>
  @import "https://cdn.quilljs.com/1.2.6/quill.snow.css";
</style>
