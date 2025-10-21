/**
 * author: LuluTao
 * date: 2024-06-12 14:135:00
 * description: 用户token的本地存储操作
 */

const KEY = "USER_TOKEN"
export function setToken(token: string) {
  localStorage.setItem(KEY, token)
}
export function getToken() {
  return localStorage.getItem(KEY) || ""
}
export function removeToken() {
  localStorage.removeItem(KEY)
}
