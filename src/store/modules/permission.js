import { setLocal, getLocal, removeLocal, clearLocal } from '@/utils/storage'
import { constantRoutes } from '@/router/constant-routes'
// import { dynamicRoutes } from '@/router/dynamic-router'
import { fetchMemu } from '@/api/index'

const permission = {
  namespaced: true,
  state: {
    token: getLocal('token'),
    routes: []
  },
  mutations: {
    setToken(state, val) {
      state.token = val
      setLocal('token', state.token)
    },
    clearToken(state) {
      state.token = null
      removeLocal('token')
    },
    SET_ROUTES(state, routes) {
      state.routes = constantRoutes.concat(routes)
    }
  },
  actions: {
    // // 根据权限生成菜单
    // async generateRouter({ commit }) {
    //   // 获取路由数据
    //   const { data: asyncRoutes } = await fetchMemu()
    //   // 筛选匹配路由
    //   let accessedRouters = filterAsyncRoutes(asyncRoutes, dynamicRoutes)
    //   // 全部路由
    //   commit('SET_ROUTES', accessedRouters)
    //   return accessedRouters
    // },
    // 根据权限生成菜单
    async generateRouter({ commit }) {
      // 获取路由数据
      const { data: asyncRoutes } = await fetchMemu()
      // 组装路由
      const accessedRouters = formatRoute(asyncRoutes)
      // 全部路由
      commit('SET_ROUTES', accessedRouters)
      return accessedRouters
    },
    // 退出登录
    logout(context) {
      setTimeout(() => {
        clearLocal()
      }, 500)
    }
  }
}

// webpack 使用 require
// vite 使用 import.meta.glob
const formatRoute = routes => {
  const menuList = []
  if (routes?.length > 0) {
    routes.forEach(route => {
      // const modules = import.meta.glob("@/views/**/**.vue")
      const menuObj = {
        path: route.path,
        name: route.name,
        meta: {
          icon: route.icon,
          title: route.title
        }
      }

      if (route.component === 'Layout') {
        menuObj.component = require(`@/layout/index.vue`).default
      } else {
        menuObj.component = require(`@/views/${route.component}.vue`).default
        // menuObj.component: modules(`@/views/${route.component}.vue`),
      }
      route.noMultilevel && (menuObj.meta.noMultilevel = route.noMultilevel)
      route.redirect && (menuObj.redirect = route.redirect)

      menuList.push(menuObj)

      if (route.children) {
        menuObj.children = formatRoute(route.children)
      }
    })
  }
  return menuList
}

/**
 *
 * @param asyncRouter 后端返回的路由
 * @param dynamicRouter 前端配置好的路由
 * @returns 过滤之后符合条件的路由
 */
const filterAsyncRoutes = (asyncRouter, dynamicRouter) => {
  const routes = []
  asyncRouter.forEach(item => {
    dynamicRouter.forEach(route => {
      if (item.name === route.meta.title) {
        if (item.children?.length) {
          route.children = filterAsyncRoutes(item.children, route.children)
        }
        routes.push(route)
      }
    })
  })
  return routes
}

export default permission
