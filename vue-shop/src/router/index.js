/*
 * @Author: dongwenjie
 * @Description 路由文件
 * @Date: 2019-11-12 10:23:26
 * @Last Modified by: dongwenjie
 * @Last Modified time: 2019-11-17 10:29:46
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
/* Layout */
import Layout from '@/layout/index.vue'

import { getToken } from '@/utils/auth.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunkName: 'login' */ '../views/Login')
  },
  {
    name: 'home',
    path: '/',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard'
      }
    ]
  }
  // {
  //   name: 'home',
  //   path: '/home',
  //   component: () => import(/* webpackChunkName: 'home' */ '../views/Home')
  // }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数 表示放行
  // next() // 放行  next("/xxx")强制跳转路径
  if (to.path === '/login') {
    next()
  } else {
    // 获取token
    const tokenStr = getToken()
    if (!tokenStr) {
      next('/login')
    } else {
      next()
    }
  }
})
export default router
