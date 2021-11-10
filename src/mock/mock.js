import Mock from 'mockjs'

let getList = Mock.mock('/api/getList', 'get', (options) => {
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
  getList
}
