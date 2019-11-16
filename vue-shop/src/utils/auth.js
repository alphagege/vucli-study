/*
 * @Author: dongwenjie
 * @Description 关于token的操作
 * @Date: 2019-11-12 09:52:17
 * @Last Modified by: dongwenjie
 * @Last Modified time: 2019-11-16 12:08:39
 */

const TokenKey = 'token'

export function getToken () {
  return window.sessionStorage.getItem(TokenKey)
}

export function setToken (token) {
  return window.sessionStorage.setItem(TokenKey, token)
}

export function removeToken () {
  return window.sessionStorage.removeItem(TokenKey)
}
