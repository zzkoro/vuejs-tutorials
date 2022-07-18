<template>
  <v-container>
    <v-card>
      <v-card-title>
        $vuetify.breakpoint.name: {{ $vuetify.breakpoint.name }}
      </v-card-title>
      <v-container>
        <v-card height="100">
          콘텐츠
        </v-card>
      </v-container>
    </v-card>
  </v-container>
</template>
<script>
export default {
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 100
        case 'sm': return 200
        case 'md': return 300
        case 'lg': return 400
        default: return 500
      }
    }
  },

}
</script>
<style lang="">

</style>
