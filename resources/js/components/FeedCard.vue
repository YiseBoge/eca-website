<template>
  <v-flex
    xs12
    :class="classes"
  >
    <base-card
      :height="value.prominent ? 450 : 250"
      color="grey lighten-1"
      dark
      :to="'/news/'+value.id"
      class="shadow-lg rounded"
    >
      <v-img
        :src="value.image_url"
        height="100%"
        gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
      >
        <v-layout
          v-if="!value.prominent"
          fill-height
          wrap
          text-xs-right
          ma-0
        >
          <v-flex xs12>
            <v-chip
              label
              class="mx-0 mb-2 text-uppercase"
              color="grey darken-3"
              text-color="white"
              small
              @click.stop=""
            >
              {{ value.category }}
            </v-chip>
            <h3 class="title font-weight-bold">
              {{ value.title }}
            </h3>
            <div class="caption text-truncate">
              {{ htmlToText(value.description) }}
            </div>
            <p class="overline my-1">{{ formatToDate(value.created_at) }}</p>
          </v-flex>
          <v-flex align-self-end>
            <v-chip
              @click.stop="" class="text-uppercase ma-0"
              color="primary" label small
            >
              Read More
            </v-chip>
          </v-flex>
        </v-layout>
      </v-img>
    </base-card>
  </v-flex>
</template>

<script>
  export default {
    props: {
      size: {
        type: Number,
        required: true
      },
      value: {
        type: Object,
        default: () => ({})
      }
    },
    methods: {
      beautifyDate(date) {
        return date
      },
    },
    computed: {
      classes() {
        return {
          'md6': this.size === 2,
          'md4': this.size === 3
        }
      }
    }
  }
</script>

<style>
.v-image__image {
  transition: .3s linear;
}
</style>
