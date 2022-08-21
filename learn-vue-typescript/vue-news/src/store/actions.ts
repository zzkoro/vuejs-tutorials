import {
  // fetchNews,
  fetchAsk,
  fetchJobs,
  fetchUser,
  fetchItem,
  fetchList,
  fetchComments,
} from "../api/index";

import type { Item } from "./type";
import { ActionContext } from "vuex";
import { MutationsType, MutationsEnum } from "./mutations";
import { RootState } from "./state";

enum ActionsEnum {
  // FETCH_NEWS = "FETCH_NEWS",
  FETCH_ASK = "FETCH_ASK",
  FETCH_JOBS = "FETCH_JOBS",
  FETCH_USER = "FETCH_USER",
  FETCH_ITEM = "FETCH_ITEM",
  FETCH_STORED_ITEM = "FETCH_STORED_ITEM",
  FETCH_LIST = "FETCH_LIST",
  FETCH_COMMENTS = "FETCH_COMMENTS",
}

type MyActionContext = {
  commit<K extends keyof MutationsType>(
    key: K,
    payload: Parameters<MutationsType[K]>[1]
  ): ReturnType<MutationsType[K]>;
} & Omit<ActionContext<RootState, RootState>, "commit">;

const actions = {
  // FETCH_NEWS(context: MyActionContext) {
  //   return fetchNews().then((response) =>
  //     context.commit(MutationTypes.SET_NEWS, response.data)
  //   );
  // },
  [ActionsEnum.FETCH_ASK](context: MyActionContext) {
    return fetchAsk().then((response) =>
      context.commit(MutationsEnum.SET_ASK, response.data)
    );
  },
  [ActionsEnum.FETCH_JOBS](context: MyActionContext) {
    return fetchJobs().then((response) =>
      context.commit(MutationsEnum.SET_JOBS, response.data)
    );
  },
  [ActionsEnum.FETCH_USER](context: MyActionContext, userId: string) {
    return fetchUser(userId).then((res) => {
      context.commit(MutationsEnum.SET_USER, res.data);
    });
  },
  [ActionsEnum.FETCH_ITEM](context: MyActionContext, itemId: string) {
    return fetchItem(itemId).then((res) =>
      context.commit(MutationsEnum.SET_ITEM, res.data)
    );
  },
  [ActionsEnum.FETCH_STORED_ITEM](context: MyActionContext, itemIndex: number) {
    const item: Item = context.state.list[itemIndex];
    context.commit(MutationsEnum.SET_ITEM, item);
    return fetchUser(item.by).then((res) => {
      //TODO
      console.log(res.data);
      context.commit(MutationsEnum.SET_USER, res.data);
    });
  },
  // hoc
  [ActionsEnum.FETCH_LIST](context: MyActionContext, listType: string) {
    return fetchList(listType).then((res) => {
      context.commit(MutationsEnum.SET_LIST, res);
    });
  },
  [ActionsEnum.FETCH_COMMENTS](context: MyActionContext, itemIndex: number) {
    const item: Item = context.state.list[itemIndex];
    if (item && item.kids) {
      return fetchComments(item.kids).then((res) => {
        context.commit(MutationsEnum.SET_COMMENTS, res);
      });
    }
  },
};

type ActionsType = typeof actions;

export { ActionsEnum, ActionsType, actions };
