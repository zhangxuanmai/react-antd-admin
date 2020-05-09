import Mock from 'mockjs'


export default Mock.mock("/login", "post", {
  "success": 200,
  "data": {
    "username": "admin",
  }
})

export const user = Mock.mock('/list', 'get', {
  "status": 200,
  "total": 35,
  "data|35": [{
    "id|+1": 1,
    "avatar": '@image("200x100", "#1890ff", "#fff", "png", "@character")',
    "username": "@cname",
    "nickname": "@name",
    "createtime": "@date('yyyy-MM-dd HH:mm:ss')",
    "phone": /^1(5|3|7|8)[0-9]{9}$/,
  }]
})