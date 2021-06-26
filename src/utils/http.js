import axios from 'axios'
import { ElMessageBox } from 'element-plus'

// 创建一个 axios 实例
const $http = axios.create({
  baseURL: '',
  timeout: 1000
});

// 添加请求拦截器
$http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
$http.interceptors.response.use(function (response) {
  const res = response.data
  console.log(res)
  if (typeof res !== 'object') {
    ElMessageBox.alert("服务器异常，请稍后再试！")
    return Promise.reject(response)
  }
  if (res.code !== 200) {
    if (res.msg) ElMessageBox.alert(res.msg)
    return Promise.reject(res.msg || 'Error')
  }
  return res.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default $http
