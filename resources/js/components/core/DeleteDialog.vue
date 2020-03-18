<template>
  <v-dialog v-model="open" max-width="290">
    <v-card>
      <v-card-title class="headline">Delete confirmation</v-card-title>
      <v-card-text>
        Are you sure you want to permanently delete <b>{{ title }}</b>?
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="green darken-1" text @click="result(false)">
          Cancel
        </v-btn>

        <v-btn color="red darken-1" text @click="result(true)">
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: "DeleteDialog",
    props: ['open', 'title'],
    methods: {
      result (delItem) {
        this.$emit('onConfirmation', delItem);
      }
    }
  }
</script>

<style scoped>
</style>
