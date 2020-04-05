<template>
  <v-card>
     <v-alert :type="alertType" dismissible v-show="showAlert">
      {{ alertType === 'success' ? 'Publication Successfully inserted.' : 'Error something went wrong' }}
    </v-alert>
    <v-card-title>
      <span class="headline">Edit publication</span>
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid">
        <v-row>
          <v-col cols="12" sm="12" md="12">
            <v-text-field label="Title*" required :rules="rules.required||rules.min_20"
                          v-model="selectedPublication.title"></v-text-field>
          </v-col>
          <v-col cols="12">
            <vue-editor v-model="selectedPublication.description"
                        :editorOptions="editorSettings"
                        :customModules="customModulesForEditor"
                        :rules="rules.min_100"></vue-editor>
          </v-col>

          <v-col cols="4">
            <template>
              <v-file-input show-size label="Upload Image" v-model="selectedPublication.image"></v-file-input>
            </template>
          </v-col>
          <v-col cols="4">
            <template>
              <v-file-input show-size label="Upload File" v-model="selectedPublication.file"></v-file-input>
            </template>
          </v-col>

          <v-col cols="4" class="mx-auto">
            <v-select label="Select category" v-model="selectedPublication.category" :rules="rules.required" :items="categories">
            </v-select>
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
    name: "Edit Publication",
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
        console.log(this.selectedPublication);
        let formData = new FormData();
        Object.keys(this.selectedPublication).forEach((key) => {
          formData.append(key, this.selectedPublication[key])
        });
        formData.append("_method", "put");
        let self = this;
        ajax.post(`publication/${this.selectedPublication.id}`, formData).then(
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
      store.dispatch('setSelectedPublication', {id: router.currentRoute.params.id});
      store.dispatch('setPublicationCategories');
    },
    mounted() {
      this.publication = store.getters.getSelectedPublication;
    },
    computed: {
      categories() {
        return store.getters.getPublicationCategories;
      },
      selectedPublication() {
        return store.getters.getSelectedPublication;
      }
    }
  }
</script>

<style scoped>
  @import "https://cdn.quilljs.com/1.2.6/quill.snow.css";
</style>
