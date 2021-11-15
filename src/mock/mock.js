import Mock from 'mockjs'
import stroe from '../store'

// 注册接口
const registerSave = Mock.mock('/api/regester', 'get' , (options) => {
  //有参
  let data =  [
    {

        "description":"模拟一个带参数的get请求",
        "request":{
            "uri":"/getwithparam",
            "method":"get",
            "queries":options
        },
        "response":{
            "text": "我胡汉三又回来啦",
            "headers": {
                "Content-Type":"text/html;charset=gbk"
            }
        }
    }
  ]
  return data
  // let data = {
  //   body: {
  //     message : "ok" ,
  //     req: options
  //   },
  //   meta: {
  //     code: 200,
  //     message: "登录成功"
  //   }
  // }
  // return data
})

// 获取图片接口
const getList = Mock.mock('/api/getList', 'get', (options) => {
  let listImg = [
    { 
      id: 1,
      url: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/290077.jpg'
    }, {
      id: 2,
      url: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/289416.jpeg'
    }, {
      id: 3,
      url: 'http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/290256.jpg'
    }
  ]
  let data = {
    body: {
      listImg: listImg
    },
    meta: {
      code: 200,
      message: '获取成功'
    }
  }
  return data
})

export default {
  getList,
  registerSave
}
