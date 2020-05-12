import Mock from 'mockjs'


export default Mock.mock('/login', 'post', {
  "status": 200,
  "data": {
    "username": "admin",
  }
})

export const user = Mock.mock('/table', 'get', {
  "status": 200,
  "total": 35,
  "data|35": [{
    "id": "@id()",
    "img": "@image('200x100')",
    "name": "@name",
    "type": "@string(10)",
    "status|1": [0, 1],
    "message": "@string(20)",
    "user": "@name",
    "ip": "@ip()",
    "password": "@string(8)",
    "date": "@date('yyyy-MM-dd HH:mm:ss')",
    "phone": /^1(5|3|7|8)[0-9]{9}$/,
    "total": "@natural(10, 50)"
  }]
})