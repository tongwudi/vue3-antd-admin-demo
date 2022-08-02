import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index'
import { constantRoutes as routes } from './constant-routes'

const router = createRouter({
  // history: createWebHashHistory(process.env.BASE_URL),
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
  // 刷新时，滚动条始终滚动到顶部
  scrollBehavior: () => ({ top: 0 })
})

// 重置路由
export const resetRouter = () => {
  const { routes } = store.state
  routes.forEach(route => {
    const name = route.name
    if (name && router.hasRoute(name)) {
      router.removeRoute(name)
    }
  })
}

/**
 * 过滤权限路由
 * @param asyncRouter 后端返回的路由
 * @param dynamicRouter
 * @returns
 */
export const filterAsyncRoutes = (asyncRouter, dynamicRouter) => {
  const routes = []
  dynamicRouter.forEach(route => {
    asyncRouter.forEach(item => {
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

// export const setDefaultRoute = (routes[]) => {
//   routes.forEach(v => {
//     if (v.children && v.children.length > 0) {
//       v.redirect = { name: v.children[0].name }
//       setDefaultRoute(v.children)
//     }
//   })
// }

export default router
