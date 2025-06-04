import Layout from '@/layout/index.vue'
import Login from '@/views/login/index.vue'
import Forbidden from '@/views/errorPage/403.vue'
import NotFound from '@/views/errorPage/404.vue'

// 公共路由
export const constantRoutes = [
  {
    path: '/login',
    meta: { title: '登录' },
    component: Login,
    hidden: true
  },
  {
    path: '/',
    meta: { title: '首页', icon: '', noMultilevel: true },
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: { title: '首页' },
        component: () =>
          import(/* webpackChunkName: "index" */ '@/views/dashboard/index.vue')
      }
    ]
  },
  {
    path: '/403',
    component: Forbidden,
    hidden: true
  },
  // vue2 使用 *
  // vue3 使用 '/:catchAll(.*)' 或 '/:pathMatch(.*)'
  {
    path: '/:pathMatch(.*)', // 不识别的path自动匹配404
    component: NotFound,
    hidden: true
  }
]
