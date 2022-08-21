<template lang="">
  <v-app>
    <default-bar />
    <default-drawer />
    <default-view />
  </v-app>
</template>
<script lang="ts">
import DefaultBar from "./AppBar.vue";
import DefaultDrawer from "./Drawer.vue";
import DefaultView from "./View.vue";

export default {
  name: "DefaultLayout",
  components: {
    DefaultBar,
    DefaultDrawer,
    DefaultView,
  },
};
</script>
<style lang=""></style>
