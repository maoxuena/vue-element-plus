import $http from '@/utils/http'

export const getBarData = (obj) => {
  return $http.get("/charts/barData", obj)
}