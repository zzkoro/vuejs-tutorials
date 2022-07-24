<template lang="">
  <v-navigation-drawer
    v-model="drawer"
    v-bind="$attrs"
    app
    dark
    :src="require('@/assets/sidebar.png')"
  >
    <template v-slot:img="props">
      <v-img
        :gradient="gradient"
        v-bind="props"
      />
    </template>

    <default-drawer-header />

    <v-divider />

    <default-list :items="items" />

    <template #append>
      <div class="pa-4 text-center">
        <v-btn
          block
          class="font-weight-black"
          color="red"
          rounded
          large
          target="_blank"
          href="https://www.youtube.com/channel/UCZ30aWiMw5C8mGcESlAGQbA/?sub_confirmation=1"
        >
          유튜브 짐코딩 채널
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'DefaultDrawer',
  components: {
    DefaultDrawerHeader: () => import('./DrawerHeader'),
    DefaultList: () => import('./List'),
  },
  computed: {
    ...mapState('app', {
      gradient: 'gradient',
      items: 'items'
    }),
    drawer: {
      get() {
        return this.$store.getters['app/getDrawer']
      },
      set(value) {
        return this.$store.commit('app/setDrawer', value)
      }
    }
  },

}
</script>
<style lang="">

</style>
