// import Vue from 'vue'
import {createRouter, createWebHistory } from 'vue-router'

// Vue.use(VueRouter)

// createWebHashHistory() 哈希模式
// createWebHistory() history模式

import Home from '@/view/home'
import About from '@/view/about'
import List from '@/view/list'
const routerHistory = createWebHistory();
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/list",
    component: List
  },
  {
    path: "/about",
    component: About
  },
]
const router = createRouter({
  routes,
  history: routerHistory,
})

export default router;