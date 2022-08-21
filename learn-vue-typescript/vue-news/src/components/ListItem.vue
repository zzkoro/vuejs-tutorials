<template>
  <ul class="news-list">
    <li v-for="(news, itemIndex) in listItems" :key="news.id" class="post">
      <div class="points">
        {{ news.score || 0 }}
      </div>
      <div>
        <p class="news-title">
          <template v-if="news.url">
            <a :href="news.url">{{ news.title }}</a
            ><small class="link-text" v-if="news.domain"
              >({{ news.domain }})</small
            >
          </template>
          <template v-else>
            <router-link :to="`/item/${itemIndex}`">{{
              news.title
            }}</router-link
            ><small
              ><a class="link-text" :href="news.domain" v-if="news.domain"
                >({{ news.domain }})</a
              ></small
            >
          </template>
        </p>
        <small v-if="news.by" class="link-text">
          by
          <router-link :to="`/user/${news.by}`" class="link-text">{{
            news.by
          }}</router-link>
        </small>
        <small v-if="news.time" class="link-text">
          {{ localNewsTime(news.time) }}
        </small>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, PropType } from "vue";
import store from "@/store";

import Vue, { reactive, toRefs, defineComponent } from "vue";

export default Vue.extend({
  props: {
    newsIds: {
      type: Array as PropType<number[]>,
    },
  },

  // computed: {
  //   listItems(): any {
  //     return this.$store.getters.fetchedList;
  //   },
  // },

  // methods: {
  //   localNewsTime(time: number): string {
  //     return new Date(time * 1000).toLocaleString();
  //   },
  // },

  setup(props, context) {
    // const state = reactive({
    //   count: 0,
    // });

    const listItems = computed(() => store.getters.fetchedList);

    const localNewsTime = (time: number): string => {
      return new Date(time * 1000).toLocaleString();
    };

    return {
      // ...toRefs(state),
      listItems,
      localNewsTime,
    };
  },
});
</script>

<style scoped>
.news-list {
  padding: 0;
  margin: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  color: #42b883;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-text {
  color: #828282;
}
.news-title {
  margin: 0;
}
</style>
