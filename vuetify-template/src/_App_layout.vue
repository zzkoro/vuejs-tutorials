<template>
  <v-app>
    <v-navigation-drawer app />
    <v-app-bar
      v-if="$vuetify.breakpoint.mobile"
      app
    />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <v-footer app>
      Footer
    </v-footer>
  </v-app>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>
