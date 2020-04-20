<template>
  <v-card class="px-5 py-3 shadow-lg">
    <v-alert :type="alert.type" dismissible v-show="alert.visible || false">
      {{ alert.message }}
    </v-alert>

    <v-card-title>
      <span class="headline">Edit publication</span>
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
            <v-col cols="12" sm="12" md="12">
              <v-text-field label="Title*" required :rules="rules.required||rules.min_20"
                            v-model="selectedPublication.title"/>
            </v-col>
            <v-col cols="12">
              <vue-editor v-model="selectedPublication.description"
                          :editorOptions="editorSettings"
                          :customModules="customModulesForEditor"
                          :rules="rules.min_100"/>
            </v-col>

            <v-col cols="4">
              <template>
                <v-file-input show-size label="Upload Image" v-model="selectedPublication.image"/>
              </template>
            </v-col>
            <v-col cols="4">
              <template>
                <v-file-input show-size label="Upload File" v-model="selectedPublication.file"/>
              </template>
            </v-col>

            <v-col cols="4" class="mx-auto">
              <v-select label="Select category" v-model="selectedPublication.category" :rules="rules.required" :items="categories">
              </v-select>
            </v-col>
          </v-row>

          <div class="my-2 mx-auto align-center align-content-center">
            <v-btn :disabled="!valid" color="success" class="d-block mx-auto" :loading="loading" @click="submit"> Save</v-btn>
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
    name: "Edit Publication",
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

        self.loading = true;
        ajax.post(`publication/${this.selectedPublication.id}`, formData).then(
          response => {
            self.alert = {
              message: "Successfully Updated Publication",
              type: "success",
              visible: true
            };
            store.dispatch('setPublications', {page: 1, size: 10, year: 'All', category: ''});
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
      },
      loadingPage: () => store.getters.getLoading,
    }
  }
</script>

<style scoped>
  @import "https://cdn.quilljs.com/1.2.6/quill.snow.css";
</style>
