/*
 * @Author: dongwenjie
 * @Description axios封装，请求拦截、相应拦截、错误统一处理
 * @Date: 2019-11-12 09:52:17
 * @Last Modified by: dongwenjie
 * @Last Modified time: 2019-11-13 17:24:03
 */

import axios from 'axios'
import router from '@/router'
import { Message } from 'element-ui'
import store from '../store/index'
const $axios = axios.create({
  // 请求超时时间
  baseURL: '/api/private/v1/',
  timeout: 30000 // 30s
})

// 请求拦截器
$axios.interceptors.request.use(
  config => {
    if (!config.headers) {
      config.headers = {
        'Content-Type': 'application/json'
      }
    }
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = store.state.token
    token && (config.headers.Authorization = token)
    return config
  },
  error => {
    return Promise.error(error)
  })

// 响应拦截器
$axios.interceptors.response.use(
  response => {
    return response
  },
  // 服务器状态码不是200的情况
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 400:
          Message.error('请求的地址不存在或者包含不支持的参数')
          break
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }
          })
          break
          // 403 token过期
          // 登录过期对用户进行提示
          // 清除本地token和清空vuex中token对象
          // 跳转登录页面
        case 403:
          Message.error('登录过期，请重新登录')
          // 清除token
          //  localStorage.removeItem('token')
          //   store.commit('loginSuccess', null)
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            })
          }, 1000)
          break
          // 404请求不存在
        case 404:
          Message.error('请求的资源不存在')
          break
          // 其他错误，直接抛出错误提示
        default:
          Message.error(error.response.data)
      }
      return Promise.reject(error.response)
    }
  }
)

export default $axios
