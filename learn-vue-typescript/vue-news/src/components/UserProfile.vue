<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user-circle"></i>
    </div>
    <div class="user-description">
      <router-link :to="'/user/' + userInfo.id">{{ userInfo.id }}</router-link>
      <slot name="userDescription"></slot>
      <div class="time">
        {{
          itemInfo
            ? "Created " + new Date(itemInfo.time * 1000).toLocaleString()
            : "Joined " +
              new Date(userInfo.created * 1000).toLocaleString() +
              ","
        }}
        <slot name="userKarma"></slot>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex';

export default {
  props: {
    userInfo: {
      type: Object
    },
    itemInfo: {
      type: Object
    }, 
  },
  computed: {
    ...mapGetters([
      'userContent', 'userQuestion', 'userName', 'userTimeAgo', 'contentPoints',
    ]),
  },
};
</script>

<style scoped>
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
  color: #828282;
}
</style>
