import Layout from '@/layout/index'

// 动态路由
export const dynamicRoutes = [
  {
    path: '/',
    name: 'home',
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
    path: '/order',
    name: 'order-manage',
    meta: { title: '订单管理', icon: '' },
    // component: '/layout/index.vue',
    children: [
      {
        path: 'order-list',
        name: 'order-list',
        meta: { title: '订单列表', icon: '' },
        component: () => import(/* webpackChunkName: "order" */  '@/views/order/list.vue')
      },
      {
        path: 'order-audit',
        name: 'order-audit',
        meta: { title: '订单审核', icon: '' },
        component: () => import(/* webpackChunkName: "order" */  '@/views/order/audit.vue')
      }
    ]
  },
  {
    path: '/goods',
    name: 'goods-manage',
    meta: { title: '商品管理', icon: '' },
    // component: '/layout/index.vue',
    children: [
      {
        path: 'goods-list',
        name: 'goods-list',
        meta: { title: '商品列表', icon: '' },
        component: () => import(/* webpackChunkName: "goods" */  '@/views/goods/list.vue')
      },
      {
        path: 'goods-audit',
        name: 'goods-audit',
        meta: { title: '商品审核', icon: '' },
        component: () => import(/* webpackChunkName: "goods" */  '@/views/goods/audit.vue')
      }
    ]
  },
  {
    path: '/news',
    name: 'news-manage',
    meta: { title: '新闻管理', icon: '' },
    // component: '/layout/index.vue',
    children: [
      {
        path: 'news-list',
        name: 'news-list',
        meta: { title: '新闻列表', icon: '' },
        component: () => import(/* webpackChunkName: "news" */  '@/views/news/list.vue')
      }
    ]
  },
  {
    path: '/user',
    name: 'user-manage',
    meta: { title: '用户管理', icon: '' },
    // component: '/layout/index.vue',
    children: [
      {
        path: 'user-list',
        name: 'user-list',
        meta: { title: '用户列表', icon: '' },
        component: () => import(/* webpackChunkName: "user" */  '@/views/user/list.vue')
      }
    ]
  },
  {
    path: '/system',
    name: 'system',
    meta: { title: '系统配置', icon: '' },
    component: () => import(/* webpackChunkName: "system" */  '@/views/system/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: '关于', icon: '' },
    component: () => import(/* webpackChunkName: "about" */  '@/views/about/index.vue')
  }
]
