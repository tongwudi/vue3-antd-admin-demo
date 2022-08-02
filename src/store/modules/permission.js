import { setLocal, getLocal, clearLocal } from '@/utils/storage'
import { fetchMemu } from '@/api/index'
import { constantRoutes } from '@/router/constant-routes'
import { dynamicRoutes } from '@/router/dynamic-router'
import { filterAsyncRoutes, resetRouter } from '@/router'

const state = {
  token: getLocal('token'),
  routes: []
}

const mutations = {
  setToken(state, val) {
    state.token = val
    setLocal('token', state.token)
  },
  clearToken(state) {
    state.token = null
    clearLocal('token')
  },
  setRoutes(state, routes) {
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  // 根据权限生成菜单
  async generateRoutes(context) {
    const { data: asyncRoutes } = await fetchMemu()

    let routes = filterAsyncRoutes(asyncRoutes, dynamicRoutes)

    // let MainContainer = constantRoutes.find((v) => v.path === "")

    // const children = MainContainer?.children || []
    // children.push(...routes)

    // console.log(routes, MainContainer);

    context.commit('setRoutes', routes)

    return routes
  },
  // 退出登录
  logout(context) {
    setTimeout(() => {
      context.commit('clearToken')
      context.commit('clearRoles')
      resetRouter()
    }, 500)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
