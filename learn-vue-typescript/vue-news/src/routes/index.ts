import Vue from "vue";
import VueRouter, { NavigationGuardNext, Route, RouteConfig } from "vue-router";
import { ItemView, UserView } from "../views";
import createListView from "../views/CreateListView";
import bus from "../utils/bus";
import store from "../store";
import { MyStore } from "@/store/type";
import { ActionsEnum } from "@/store/actions";

Vue.use(VueRouter);

const myStore: MyStore = store as MyStore;

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      component: createListView("NewsView"),
      async beforeEnter(
        routeTo: Route,
        routeFrom: Route,
        next: NavigationGuardNext
      ) {
        bus.$emit("on:progress");
        try {
          await myStore.dispatch(
            ActionsEnum.FETCH_LIST,
            routeTo.name as string
          );
          next();
        } catch (error) {
          // console.log(error);
          new Error("failed to fetch news items");
          // next("/error");
          next();
        }
      },
    },
    {
      path: "/ask",
      name: "ask",
      component: createListView("AskView"),
      beforeEnter(routeTo: Route, routeFrom: Route, next: NavigationGuardNext) {
        bus.$emit("on:progress");
        store
          .dispatch("FETCH_LIST", routeTo.name)
          .then(() => next())
          .catch(() => {
            new Error("failed to fetch ask items");
            next();
          });
      },
    },
    {
      path: "/jobs",
      name: "jobs",
      component: createListView("JobsView"),
      beforeEnter(routeTo: Route, routeFrom: Route, next: NavigationGuardNext) {
        bus.$emit("on:progress");
        store
          .dispatch("FETCH_LIST", routeTo.name)
          .then(() => next())
          .catch(() => {
            new Error("failed to fetch news items");
            next();
          });
      },
    },
    {
      path: "/item/:itemIndex",
      component: ItemView,
      beforeEnter(routeTo: Route, routeFrom: Route, next: NavigationGuardNext) {
        bus.$emit("on:progress");
        const itemIndex = routeTo.params.itemIndex;
        store
          .dispatch("FETCH_STORED_ITEM", itemIndex)
          .then(() => {
            store.dispatch("FETCH_COMMENTS", itemIndex);
          })
          .then(() => next())
          .catch((err) => new Error("failed to fetch item details"));
      },
    },
    {
      path: "/user/:id",
      component: UserView,
      beforeEnter(routeTo: Route, routeFrom: Route, next: NavigationGuardNext) {
        bus.$emit("on:progress");
        const userId = routeTo.params.id;
        store
          .dispatch("FETCH_USER", userId)
          .then(() => next())
          .catch((err) => new Error("failed to fetch user profile"));
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
