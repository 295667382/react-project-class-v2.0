// src/utils/request.js
import axios from 'axios'
// 自定义axios
const ins = axios.create({
  baseURL: 'api',
  timeout: 6000
})

// 自定义拦截器
// 请求拦截器
ins.interceptors.request.use((config) => {
  //console.log("请求拦截器")
  config.headers.token = localStorage.getItem('token') || ''
  return config
}, error => Promise.reject(error))

// 响应拦截器
ins.interceptors.response.use((response) => {
    //10119是后端未登录的
  if (response.data.code === '10119') { // +++++++++++++++++++++
    window.location.href = "/#/login"
  }
  return response.data
}, error => Promise.reject(error))

// 自定义各种数据请求 axios({})
export default function request (config) {
  //console.log("request")
    const { url = '', method = '', data = {}, headers = {} } = config
    switch (method.toUpperCase()) {
      case 'GET':
        return ins.get(url, { params: data })
      case 'POST':
        // 表单提交  application/x-www-form-url-encoded
        if (headers['content-type'] === 'application/x-www-form-url-encoded') {
          // 转参数 URLSearchParams/第三方库qs
          const p = new URLSearchParams()
          for (const key in data) {
            p.append(key, data[key])
          }
          return ins.post(url, p, { headers })
        }
        // 文件提交  multipart/form-data
        if (headers['content-type'] === 'multipart/form-data') {
          const p = new FormData()
          for (const key in data) {
            p.append(key, data[key])
          }
          return ins.post(url, p, { headers })
        }
        // 默认 application/json
        return ins.post(url, data)
      case 'PUT': // 修改数据 --- 所有的数据的更新
        return ins.put(url, data)
      case 'DELETE': // 删除数据
        return ins.delete(url, { data })
      case 'PATCH': // 更新局部资源
        return ins.patch(url, data)
      default:
        return ins(config)
    }
  }