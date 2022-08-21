<template>
  <div class="home">
    <section class="header-container">
      <UserProfile :user-info="fetchedUser"></UserProfile>
    </section>
    <section>
      <h2>{{ userQuestion }}</h2>
      <div v-html="userContent" class="content"></div>
    </section>
    <section>
      <h3>Comments</h3>
      <div v-for="item in fetchedComments" :key="item.id" class="content">
        <UserProfile
          :user-info="{ id: item.by }"
          :item-info="item"
        ></UserProfile>
        <div v-html="item.text"></div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";
import bus from "../utils/bus";

export default {
  components: {
    UserProfile,
  },
  created() {
    bus.$emit("off:progress");
  },
  computed: {
    ...mapGetters([
      "fetchedItem",
      "fetchedUser",
      "userQuestion",
      "userContent",
      "fetchedComments",
    ]),
  },
};
</script>

<style scoped>
.home {
  padding: 0 1.8rem;
}
.header-container {
  padding-top: 1rem;
}
.user-container {
  display: flex;
  align-items: center;
}
.fa-user-circle {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
h3 {
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
}
.content {
  border: ridge;
  padding: 0.5rem;
}
</style>
