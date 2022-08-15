import Vue from "vue";
import VueRouter from "vue-router";

import type { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "layouts-default-index" */
        "@/layouts/default/Index.vue"
      ),
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: () =>
          import(
            /* webpackChunkName: "views-dashboard" */
            "@/views/Dashboard.vue"
          ),
      },
      {
        path: "/grid-system",
        name: "GridSystem",
        component: () =>
          import(
            /* webpackChunkName: "views-grid-system" */
            "@/views/GridSystem.vue"
          ),
      },
      {
        path: "/grid-list-page",
        name: "GridListPage",
        component: () =>
          import(
            /* webpackChunkName: "views-grid-list-page" */
            "@/views/GridListPage.vue"
          ),
      },
      {
        path: "/breakpoints",
        name: "Breakpoints",
        component: () =>
          import(
            /* webpackChunkName: "views-breakpoints" */
            "@/views/Breakpoints.vue"
          ),
      },
      {
        path: "/typography",
        name: "Typography",
        component: () =>
          import(
            /* webpackChunkName: "views-typography" */
            "@/views/Typography.vue"
          ),
      },
      {
        path: "/tables/app-table",
        name: "AppTables",
        component: () =>
          import(
            /* webpackChunkName: "views-app-tables" */
            "@/views/table/AppTables.vue"
          ),
      },
      {
        path: "/tables/basic-table",
        name: "BasicTables",
        component: () =>
          import(
            /* webpackChunkName: "views-basic-tables" */
            "@/views/table/BasicTables.vue"
          ),
      },
      {
        path: "/forms/validation-form",
        name: "ValidationForm",
        component: () =>
          import(
            /* webpackChunkName: "views-validation-forms" */
            "@/views/form/ValidationForms.vue"
          ),
      },
      {
        path: "/forms/app-form",
        name: "AppForm",
        component: () =>
          import(
            /* webpackChunkName: "views-app-forms" */
            "@/views/form/AppForms.vue"
          ),
      },
      {
        path: "/buttons",
        name: "Buttons",
        component: () =>
          import(
            /* webpackChunkName: "views-buttons" */
            "@/views/Buttons.vue"
          ),
      },
      {
        path: "/icons",
        name: "Icons",
        component: () =>
          import(
            /* webpackChunkName: "views-icons" */
            "@/views/Icons.vue"
          ),
      },
    ],
  },
  {
    path: "/authentication",
    component: () =>
      import(
        /* webpackChunkName: "layouts-authentication-index" */
        "@/layouts/authentication/Index.vue"
      ),
    children: [
      {
        path: "sign-in",
        name: "SignIn",
        component: () =>
          import(
            /* webpackChunkName: "views-sign-in" */
            "@/views/authentication/SignIn.vue"
          ),
      },
      {
        path: "sign-up",
        name: "SignUp",
        component: () =>
          import(
            /* webpackChunkName: "views-sign-up" */
            "@/views/authentication/SignUp.vue"
          ),
      },
    ],
  },
  {
    path: "/page",
    component: () =>
      import(
        /* webpackChunkName: "layouts-page-index" */
        "@/layouts/page/Index.vue"
      ),
    children: [
      {
        path: "product-list",
        name: "ProductList",
        component: () =>
          import(
            /* webpackChunkName: "views-product-list" */
            "@/views/page/ProductList.vue"
          ),
      },
    ],
  },
];
const router = new VueRouter({
  mode: process.env.NODE_ENV === "production" ? "hash" : "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
