import router from './index'
import store from '@/store/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false }) // 进度环显示/隐藏

// 路由白名单
const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  // 打开进度条
  NProgress.start()

  const hasToken = store.getters.hasToken
  if (hasToken) {
    // 设置标题
    document.title = to.meta.title ? `${to.meta.title} | 桐无敌` : '桐无敌'
    // 已登录状态禁止回到登录页
    if (to.path === '/login') {
      next('/')
    } else {
      const setRoutes = store.getters.setRoutes
      if (!setRoutes) {
        try {
          store.dispatch('permission/generateRouter')
          next()
          // hack方法 确保addRoutes已完成
          // next({ ...to, replace: true })
        } catch (err) {
          console.log(err)
          // 请求失败，移除 token 并跳转登录页
          store.dispatch('permission/logout')
          next(`/login?redirect=${to.path}`)
        }
      } else {
        // if (to.matched.length === 0) {
        //   from.name ? next({ name: from.name }) : next('/404');
        // } else {
        //   next();
        // }
        next()
      }
    }
  } else {
    // 未登录可以访问白名单页面(登录页面)
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      // next('/login')
    }
  }
})

router.afterEach(() => {
  // 关闭进度条
  NProgress.done()
})

// // 重置路由
// const resetRouter = () => {
//   const { routes } = permission.state
//   routes.forEach(route => {
//     const name = route.name
//     if (name && router.hasRoute(name)) {
//       router.removeRoute(name)
//     }
//   })
// }
