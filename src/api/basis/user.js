import $http from '@/utils/http'
import { tokenName } from '@/config'

// 登录
export const login = (data) => {
  return $http.post("/login", data)
}

// 退出登录
export const logout = () => {
  return $http.post("/logout")
}

// 获取用户信息
export const getUserInfo = (accessToken) => {
  return $http.post("/userInfo", { [tokenName]: accessToken })
}