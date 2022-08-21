import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

import { state, RootState } from "./state";

Vue.use(Vuex);

const storeOptions: StoreOptions<RootState> = {
  strict: process.env.NODE_ENV !== "production",
  state,
  mutations,
  getters,
  actions,
};

export default new Vuex.Store(storeOptions);

// export default new Vuex.Store({
//   strict: process.env.NODE_ENV !== "production",
//   state: {
//     news: [],
//     ask: [],
//     jobs: [],
//     user: {},
//     item: {} as Item,
//     list: [] as Item[],
//     comments: [] as Item[],
//   },
//   state: state,
//   getters,
//   mutations,
//   actions,
// });
