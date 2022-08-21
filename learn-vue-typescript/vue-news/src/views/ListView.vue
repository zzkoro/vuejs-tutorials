<template>
  <div>
    <ListItem :newsIds="newsIds"></ListItem>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ListItem from "../components/ListItem.vue";
import { fetchNews } from "@/api";

import { reactive, toRefs, defineComponent } from "vue";

export default defineComponent({
  components: {
    ListItem,
  },

  // data() {
  //   return {
  //     newsIds: [] as number[],
  //   };
  // },

  // methods: {
  //   async fetchNewsItems() {
  //     const response = await fetchNews();
  //     this.newsIds = response.data;
  //   },
  // },

  // created() {
  //      this.fetchNewsItems();
  // },

  setup(props, context) {
    const state = reactive({
      newsIds: [] as number[],
    });

    const fetchNewsItems = async () => {
      const response = await fetchNews();

      state.newsIds = response.data;
    };

    fetchNewsItems();

    return {
      ...toRefs(state),
      fetchNewsItems,
    };
  },
});
</script>

<style></style>
