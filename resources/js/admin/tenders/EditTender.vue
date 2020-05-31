<template>
  <v-card class="px-5 py-3 shadow-lg">
    <v-alert :type="alert.type" dismissible v-show="alert.visible || false">
      {{ alert.message }}
    </v-alert>

    <v-card-title>
      <span class="headline">Edit Tender</span>
    </v-card-title>
    <v-fade-transition hide-on-leave>
      <v-card-text v-if="loadingPage">
        <v-skeleton-loader
          type="list-heading, list-item, list-item-three-line, list-item-three-line, list-item, actions"
        />
      </v-card-text>
      <v-card-text v-else>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="10" md="8  ">
              <v-text-field :rules="rules.required||rules.min_20" label="Title*" required
                            v-model="selectedTender.title"/>
            </v-col>
            <v-col cols="12" md="4">
              <v-menu
                :close-on-content-click="false"
                max-width="290px"
                min-width="290px"
                offset-y
                transition="scale-transition"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    :rules="rules.required"
                    :value="selectedTender.deadline ? formatToDate(selectedTender.deadline) : null"
                    label="Deadline*"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-on="on"
                  />
                </template>
                <v-date-picker no-title v-model="selectedTender.deadline"/>
              </v-menu>
            </v-col>
            <v-col cols="2" v-if="selectedTender.file_url">
              <a :href="selectedTender.file_url" class="btn btn-primary btn-sm text-white shadow-lg pr-4"
                 target="_blank">
                <v-icon color="white" left small>mdi-download</v-icon>
                File
              </a>
            </v-col>
            <v-col cols="12">
              <vue-editor :customModules="customModulesForEditor"
                          :editorOptions="editorSettings"
                          :rules="rules.min_100"
                          v-model="selectedTender.description"/>
            </v-col>

            <v-col cols="4">
              <template>
                <v-file-input label="Upload Image" show-size v-model="selectedTender.image"/>
              </template>
            </v-col>
            <v-col cols="4">
              <template>
                <v-file-input label="Upload File" show-size v-model="selectedTender.file"/>
              </template>
            </v-col>

            <v-col class="mx-auto" cols="4">
              <v-select :items="categories" :rules="rules.required" label="Select category"
                        v-model="selectedTender.category">
              </v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="5" v-if="selectedTender.image_url">
              <v-img :src="selectedTender.image_url"/>
            </v-col>
            <v-col :md="selectedTender.image_url ? 7 : 12" cols="12">
              <h3 class="primary--text mx-3 mb-5" v-text="'Submitted Applications'"/>
              <v-fade-transition hide-on-leave>
                <v-skeleton-loader
                  type="table"
                  v-if="loading"
                />
                <p class="my-3 grey--text darken-1 text-center"
                   v-else-if="!tenderApplications || tenderApplications.length === 0"
                   v-text="'No Applications Submitted'"/>
                <v-simple-table fixed-header height="300px" v-else>
                  <template v-slot:default>
                    <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Date</th>
                      <th class="text-center">File</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr :key="item.name" v-for="item in tenderApplications">
                      <td>{{ item.name }}</td>
                      <td>{{ item.email }}</td>
                      <td>{{ formatToDate(item.created_at) }}</td>
                      <td class="text-center">
                        <v-btn :href="item.file_url" color="primary" outlined rounded small target="_blank"
                               v-text="'Preview'"/>
                      </td>
                    </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-fade-transition>
            </v-col>
          </v-row>

          <div class="my-2 mx-auto align-center align-content-center">
            <v-btn :disabled="!valid" :loading="loading" @click="submit" class="d-block mx-auto" color="success"> Save
            </v-btn>
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
    name: "Edit Tender",
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
          type: "success",
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
    watch: {
      '$route': 'clear'
    },
    methods: {
      clear() {
        this.$refs.form.reset();
        this.loadData();
        this.alert = {
          message: "",
          type: "",
          visible: false
        };
      },
      loadData() {
        store.dispatch('setSelectedTender', {id: router.currentRoute.params.id});
      },
      submit() {
        console.log(this.selectedTender);
        let formData = new FormData();
        Object.keys(this.selectedTender).forEach((key) => {
          formData.append(key, this.selectedTender[key])
        });
        formData.append("_method", "put");
        let self = this;

        self.loading = true;
        ajax.post(`tender/${this.selectedTender.id}`, formData).then(
          response => {
            self.alert = {
              message: "Successfully Updated Tender",
              type: "success",
              visible: true
            };
            store.dispatch('setSelectedTender', {id: router.currentRoute.params.id});
            store.dispatch('setTenders', {page: 1, size: 10, category: ''});
          }, error => {
            errorHandler(error);
            if (error.response.status === 500) {
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
      store.dispatch('setSelectedTender', {id: router.currentRoute.params.id});
      store.dispatch('setTenderCategories');
    },
    mounted() {
      this.tender = store.getters.getSelectedTender;
    },
    computed: {
      categories() {
        return store.getters.getTenderCategories;
      },
      selectedTender() {
        return store.getters.getSelectedTender;
      },
      tenderApplications() {
        return store.getters.getSelectedApplications;
      },
      loadingPage: () => store.getters.getLoading,
    }
  }
</script>

<style scoped>
  @import "https://cdn.quilljs.com/1.2.6/quill.snow.css";
</style>
