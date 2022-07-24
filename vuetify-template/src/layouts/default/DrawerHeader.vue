<template lang="">
  <v-list-item>
    <v-list-item-avatar>
      <v-img :src="require('@/assets/logo-bg.png')" />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title class="text-h6">
        Application
      </v-list-item-title>
      <v-list-item-subtitle>
        subtext
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
export default {
  name: 'DefaultDrawerHeader'
}
</script>
<style lang="">

</style>
