import type { RootState } from "./state";

const getters = {
  fetchedItem(state: RootState) {
    return state.item;
  },
  fetchedUser(state: RootState) {
    return state.user;
  },
  fetchedList(state: RootState) {
    return state.list;
  },
  fetchedComments(state: RootState) {
    return state.comments;
  },
  // ItemView
  userName(state: RootState) {
    return state.item.by;
  },
  userContent(state: RootState) {
    return state.item.text;
  },
  userQuestion(state: RootState) {
    return state.item.title;
  },
  userTimeAgo(state: RootState) {
    return state.item.time;
  },
  contentPoints(state: RootState) {
    return state.item.score;
  },
};

export type GettersType = typeof getters;

export { getters };
