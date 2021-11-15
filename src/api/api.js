import axios from 'axios'


// 获取图片列表
export function getList(data) {
  return axios.get("/api/getList", {paramas:data,headers:{"Content-Type": "application/json"}})
}

// 登录
export function registerSave(data) {
  return axios.get("/api/regester", data)
}