import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes as routes } from './constant-routes'

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes,
  // 刷新时，滚动条始终滚动到顶部
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router
