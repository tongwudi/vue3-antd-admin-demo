import Layout from '@/layout/index'

// 动态路由
export const dynamicRoutes = [
  {
    path: '/order',
    name: 'order',
    meta: { title: '订单管理', icon: '' },
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'orderList',
        meta: { title: '订单列表' },
        component: () =>
          import(/* webpackChunkName: "order" */ '@/views/order/list.vue')
      },
      {
        path: 'audit',
        name: 'orderAudit',
        meta: { title: '订单审核' },
        component: () =>
          import(/* webpackChunkName: "order" */ '@/views/order/audit.vue')
      }
    ]
  },
  {
    path: '/goods',
    name: 'goods',
    meta: { title: '商品管理', icon: '' },
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'goodsList',
        meta: { title: '商品列表' },
        component: () =>
          import(/* webpackChunkName: "goods" */ '@/views/goods/list.vue')
      },
      {
        path: 'audit',
        name: 'goodsAudit',
        meta: { title: '商品审核' },
        component: () =>
          import(/* webpackChunkName: "goods" */ '@/views/goods/audit.vue')
      }
    ]
  },
  {
    path: '/news',
    name: 'news',
    meta: { title: '新闻管理', icon: '' },
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'newsList',
        meta: { title: '新闻列表', showParent: true },
        component: () =>
          import(/* webpackChunkName: "news" */ '@/views/news/list.vue')
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    meta: { title: '用户管理', icon: '' },
    component: Layout,
    children: [
      {
        path: 'list',
        name: 'userList',
        meta: { title: '用户列表', showParent: true },
        component: () =>
          import(/* webpackChunkName: "user" */ '@/views/user/list.vue')
      }
    ]
  },
  {
    path: '/system',
    name: 'system',
    meta: { title: '系统配置', icon: '', noMultilevel: true },
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'system',
        meta: { title: '系统配置' },
        component: () =>
          import(/* webpackChunkName: "system" */ '@/views/system/index.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: '关于', icon: '', noMultilevel: true },
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'about',
        meta: { title: '关于' },
        component: () =>
          import(/* webpackChunkName: "about" */ '@/views/about/index.vue')
      }
    ]
  }
]
