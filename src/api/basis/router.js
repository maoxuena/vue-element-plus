import $http from '@/utils/http'

export const getRouterList = (obj) => {
  return $http.get("/menu/navigate", obj)
}