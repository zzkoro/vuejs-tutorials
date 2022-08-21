<template lang="">
  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>
</template>
<script lang="ts">
import "@/styles/overrides.sass";
import { reactive, toRefs, defineComponent } from "vue";

export default defineComponent({
  name: "App",

  setup() {
    console.log(process.env);
    // const state = reactive({
    //   count: 0,
    // });
    // return {
    //   ...toRefs(state),
    // };
  },
});
</script>
<style lang=""></style>
