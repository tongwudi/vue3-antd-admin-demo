import Layout from '@/layout/index.vue'
import Login from '@/views/login/index.vue'
import Forbidden from '@/views/errorPage/403.vue'
import NotFound from '@/views/errorPage/404.vue'

// 公共路由
export const constantRoutes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: '首页', icon: 'dashboard' },
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        meta: { title: '仪表盘', icon: '' },
        component: () => import(/* webpackChunkName: "index" */ '@/views/dashboard/index.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录' },
    component: Login
  },
  {
    path: '/403',
    component: Forbidden
  },
  {
    path: '/404',
    component: NotFound
  },
  // vue2 使用 *
  // vue3 使用 '/:catchAll(.*)' 或 '/:pathMatch(.*)'
  {
    path: '/:catchAll(.*)', // 不识别的path自动匹配404
    redirect: '/404'
  }
]
