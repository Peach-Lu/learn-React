const { url } = require("koa-router");
const Mock = require("mockjs")
const { Random } = Mock;
const mocklist = [

]
module.exports = [
  {
    // 获取用户信息
    url: '/api/user/info',
    method: 'get',
    response () {
      return {
        erron: 0,
        data: {
          username: Random.title(),
          nickname: Random.cname(),
        }
      }
    }
  },
  {
    // 注册
    url: '/api/user/register',
    method: 'post',
    response () {
      return {
        erron: 0,
      }
    }
  },
  {
    // 登录
    url: '/api/user/login',
    method: 'post',
    response () {
      return {
        erron: 0,
        data: {
          token: Random.word(20)
        }
      }
    }
  }
]