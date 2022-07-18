import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import GridListPage from '../views/GridListPage.vue'
import Breakpoints from '../views/Breakpoints.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/grid-system',
    name: 'GridSystem',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GridSystem.vue')
  },
  {
    path: '/grid-list-page',
    name: 'GridListPage',
    component: GridListPage
  },
    {
    path: '/breakpoints',
    name: 'Breakpoints',
    component: Breakpoints
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
