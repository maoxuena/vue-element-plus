/**
 * @description 登录、获取用户信息、退出登录、清除accessToken等
 */
import { getUserInfo, login, logout } from '@/api/basis/user'
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from '@/utils/accessToken'
import { title, tokenName } from '@/config'
import { ElMessageBox, ElNotification } from 'element-plus'

const state = () => ({
  accessToken: getAccessToken(),
  username: '',
  avatar: '',
})

const getters = {
  accessToken: (state) => state.accessToken,
  username: (state) => state.username,
  avatar: (state) => state.avatar,
}

const mutations = {
  /**
   * @description 设置accessToken
   * @param {*} state
   * @param {*} accessToken
   */
  setAccessToken (state, accessToken) {
    state.accessToken = accessToken
    setAccessToken(accessToken)
  },
  /**
   * @description 设置用户名
   * @param {*} state
   * @param {*} username
   */
  setUsername (state, username) {
    state.username = username
  },
  /**
   * @description 设置头像
   * @param {*} state
   * @param {*} avatar
   */
  setAvatar (state, avatar) {
    state.avatar = avatar
  },
}

const actions = {
  /**
   * @description 登录拦截放行时，设置虚拟角色
   * @param {*} { commit, dispatch }
   */
  setVirtualRoles ({ commit, dispatch }) {
    dispatch('acl/setFull', true, { root: true })
    commit('setAvatar', 'https://i.gtimg.cn/club/item/face/img/2/15922_100.gif')
    commit('setUsername', 'admin(未开启登录拦截)')
  },

  /**
   * @description 登录
   * @param {*} { commit }
   * @param {*} userInfo
   */
  async login ({ commit }, userInfo) {
    const data = await login(userInfo)
    const accessToken = data[tokenName]
    console.log('login', userInfo, data, accessToken)
    if (accessToken) {
      commit('setAccessToken', accessToken)
      const hour = new Date().getHours()
      console.log(hour)
      const thisTime =
        hour < 8
          ? '早上好'
          : hour <= 11
            ? '上午好'
            : hour <= 13
              ? '中午好'
              : hour < 18
                ? '下午好'
                : '晚上好'
      ElNotification.success({
        title: `${thisTime}！`,
        message: `欢迎登录${title}`,
      })
    } else {
      ElMessageBox.alert(`登录接口异常，未正确返回${tokenName}...`)
    }
  },

  /**
   * @description 获取用户信息接口
   * @param {*} { commit, dispatch, state }
   * @returns
   */
  async getUserInfo ({ commit, dispatch, state }) {
    const data = await getUserInfo(state.accessToken)
    console.log('getUserInfo', data)
    if (!data) {
      ElMessageBox.alert(`验证失败，请重新登录...`)
      return false
    }
    let { username, avatar, roles, ability } = data
    if (username && roles && Array.isArray(roles)) {
      dispatch('acl/setRole', roles, { root: true })
      if (ability && ability.length > 0)
        dispatch('acl/setAbility', ability, { root: true })
      commit('setUsername', username)
      commit('setAvatar', avatar)
    } else {
      ElMessageBox.alert('用户信息接口异常')
    }
  },

  /**
   * @description 退出登录
   * @param {*} { dispatch }
   */
  async logout ({ dispatch }) {
    await logout(state.accessToken)
    await dispatch('resetAll')
  },

  /**
   * @description 重置accessToken、roles、ability、router等
   * @param {*} { commit, dispatch }
   */
  async resetAll ({ dispatch }) {
    await dispatch('setAccessToken', '')
    await dispatch('acl/setFull', false, { root: true })
    await dispatch('acl/setRole', [], { root: true })
    await dispatch('acl/setAbility', [], { root: true })
    removeAccessToken()
  },

  /**
   * @description 设置token
   */
  setAccessToken ({ commit }, accessToken) {
    commit('setAccessToken', accessToken)
  },
}

export default { state, getters, mutations, actions }
