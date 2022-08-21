import { RootState } from "./state";
import { Item, User } from "./type";

enum MutationsEnum {
  // SET_NEWS = "SET_NEWS",
  SET_ASK = "SET_ASK",
  SET_JOBS = "SET_JOBS",
  SET_USER = "SET_USER",
  SET_ITEM = "SET_ITEM",
  SET_LIST = "SET_LIST",
  SET_COMMENTS = "SET_COMMENTS",
}

const mutations = {
  // [MutationTypes.SET_NEWS](state: RootState, news: Item[]): void {
  //   state.news = news;
  // },
  [MutationsEnum.SET_ASK](state: RootState, ask: Item[]): void {
    state.ask = ask;
  },
  [MutationsEnum.SET_JOBS](state: RootState, jobs: Item[]): void {
    state.jobs = jobs;
  },
  [MutationsEnum.SET_USER](state: RootState, user: User): void {
    state.user = user;
  },
  [MutationsEnum.SET_ITEM](state: RootState, item: Item): void {
    state.item = item;
  },
  [MutationsEnum.SET_LIST](state: RootState, list: Item[]): void {
    state.list = list;
  },
  [MutationsEnum.SET_COMMENTS](state: RootState, comments: Item[]): void {
    state.comments = comments;
  },
};

type MutationsType = typeof mutations;

export { mutations, MutationsType, MutationsEnum };

// export default {
//   SET_NEWS(state, news) {
//     state.news = news;
//   },
//   SET_ASK(state, ask) {
//     state.ask = ask;
//   },
//   SET_JOBS(state, jobs) {
//     state.jobs = jobs;
//   },
//   SET_USER(state, user) {
//     state.user = user;
//   },
//   SET_ITEM(state, item) {
//     state.item = item;
//   },
//   SET_LIST(state, list) {
//     state.list = list;
//   },
//   SET_COMMENTS(state, comments) {
//     state.comments = comments;
//   },
// };
