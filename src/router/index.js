// import Vue from 'vue'
import {createRouter, createWebHistory } from 'vue-router'

// Vue.use(VueRouter)

// createWebHashHistory() 哈希模式
// createWebHistory() history模式

import Home from '@/view/home'
import About from '@/view/about'
import List from '@/view/list'
import Tips from '@/view/tips_10'
import Echarts from '@/view/echarts'


const routerHistory = createWebHistory();
const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/list",
    name: "List",
    component: List
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/tips",
    name: "Tips",
    component: Tips
  },
  {
    path: "/",
    name: "Echarts",
    component: Echarts
  },
]
const router = createRouter({
  routes,
  history: routerHistory,
})

export default router;