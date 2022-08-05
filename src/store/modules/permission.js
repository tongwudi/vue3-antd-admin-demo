import { setLocal, getLocal, removeLocal } from '@/utils/storage'
import router from '@/router/index'
import { constantRoutes } from '@/router/constant-routes'
import { dynamicRoutes } from '@/router/dynamic-router'
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
    setRoutes(state, routes) {
      // state.routes = constantRoutes.concat(routes)
      state.routes = routes
    }
  },
  actions: {
    // 根据权限生成菜单
    async generateRouter({ commit }) {
      const { data: asyncRoutes } = await fetchMemu()
      formatRoute(asyncRoutes)
      // let routes = filterAsyncRoutes(asyncRoutes, dynamicRoutes)
      // let MainContainer = constantRoutes.find(v => v.path === '/')
      // let children = MainContainer.children
      // children.push(...routes)

      // commit('setRoutes', children)
      // console.log(constantRoutes)

      // constantRoutes.forEach(route => {
      //   router.addRoute(route)
      // })
    },
    // 退出登录
    logout(context) {
      setTimeout(() => {
        context.commit('clearToken')
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
        component: require(`@/views/${route.component}.vue`).default,
        // component: modules(`@/views/${route.component}.vue`),
        meta: {
          icon: route.icon,
          title: route.title
        }
      }
      route.redirect && (menuObj.redirect = route.redirect)

      menuList.push(menuObj)
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
