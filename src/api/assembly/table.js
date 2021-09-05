import $http from '@/utils/http'

export const getList = (obj) => {
  return $http.get("/table/list", obj)
}