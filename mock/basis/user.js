/******************
 * 基础 - 登录、退出登录、获取用户信息 - mock
 *****************/

const accessTokens = {
  admin: 'admin-accessToken',
  editor: 'editor-accessToken',
  test: 'test-accessToken',
}

const Login = {
  code: 200,
  msg: "success",
  data: { accessToken: accessTokens['admin'] }
}

const LoginError = {
  code: 100,
  msg: "账号或密码错误",
  data: {}
}

export default [
  /**
   * 基础 - 登录
   **/
  {
    url:'/login',
    type:'post',
    response: config => {
      const {username,password} = config.body
      if (username !== 'admin' || password !== '123456') return LoginError
      else return Login
    }
  },
  /**
   * 基础 - 退出登录
   **/
  {
    url:'/logout',
    type:'post',
    response: () => {
      return {
        code: 200,
        msg: 'success',
      }
    }
  },
  /**
   * 基础 - 获取用户信息
   **/
  {
    url:'/userInfo',
    type:'post',
    response: config => {
      const { accessToken } = config.body
      console.log('accessToken',accessToken)
      let roles = ['admin']
      let ability = ['READ']
      let username = 'admin'
      if ('admin-accessToken' === accessToken) {
        roles = ['admin']
        ability = ['READ', 'WRITE', 'DELETE']
        username = 'admin'
      }
      if ('editor-accessToken' === accessToken) {
        roles = ['editor']
        ability = ['READ', 'WRITE']
        username = 'editor'
      }
      if ('test-accessToken' === accessToken) {
        roles = ['admin', 'editor']
        ability = ['READ']
        username = 'test'
      }
      return {
        code: 200,
        msg: 'success',
        data: {
          roles,
          ability,
          username,
          'avatar|1': [
            'https://i.gtimg.cn/club/item/face/img/2/15922_100.gif',
            'https://i.gtimg.cn/club/item/face/img/8/15918_100.gif',
          ],
        },
      }
    }
  }
]