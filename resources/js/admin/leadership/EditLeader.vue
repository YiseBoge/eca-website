<template>
  <v-card class="px-5 py-3 shadow-lg">
    <v-alert :type="alert.type" dismissible v-show="alert.visible || false">
      {{ alert.message }}
    </v-alert>

    <v-card-title>
      <span class="headline">Edit Leader</span>
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
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Full Name*" required :rules="rules.required||rules.min_20"
                            v-model="selectedLeader.name"/>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Position*" required :rules="rules.required||rules.min_20"
                            v-model="selectedLeader.position"/>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-select :items="levels"
                        label="Level*"
                        required
                        v-model="selectedLeader.level"
              />
            </v-col>

            <v-col cols="12">
              <v-textarea
                :rules="rules.min_20"
                label="Description"
                v-model="selectedLeader.description"
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
          <div class="col-md-5 mx-auto" v-if="selectedLeader.image_url">
            <v-img :src="selectedLeader.image_url"/>
          </div>
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
    name: "Add Leader",
    components: {
      VueEditor
    },
    data() {
      return {
        valid: false,
        modal: false,
        rules: Rules,
        levels: [1, 2, 3, 4, 5],
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
        this.selectedLeader.image = this.$refs.file.files[0];
        this.button_text = filename.slice(0, 10);
        this.button_text += filename.length < 10 ? "" : "...";
      },
      submit() {
        console.log(this.selectedLeader);
        let formData = new FormData();
        Object.keys(this.selectedLeader).forEach((key) => {
          formData.append(key, this.selectedLeader[key])
        });
        formData.append("_method", "put");
        let self = this;

        self.loading = true;
        ajax.post(`leadership/${this.selectedLeader.id}`, formData).then(
          response => {
            self.alert = {
              message: "Successfully Updated Leader",
              type: "success",
              visible: true
            };
            store.dispatch('setLeadership', {page: 1, size: 10});
            store.dispatch('setSelectedLeader', {id: router.currentRoute.params.id});
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
      store.dispatch('setSelectedLeader', {id: router.currentRoute.params.id});
    },
    mounted() {
      this.news = store.getters.getSelectedLeader;
    },
    computed: {
      selectedLeader() {
        console.log("In computed");
        console.log(store.getters.getSelectedLeader);
        return store.getters.getSelectedLeader;
      },
      loadingPage: () => store.getters.getLoading,
    }
  }
</script>

<style scoped>
  @import "https://cdn.quilljs.com/1.2.6/quill.snow.css";
</style>
