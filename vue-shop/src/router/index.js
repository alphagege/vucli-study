/*
 * @Author: dongwenjie
 * @Description 路由文件
 * @Date: 2019-11-12 10:23:26
 * @Last Modified by: dongwenjie
 * @Last Modified time: 2019-11-12 11:26:11
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
