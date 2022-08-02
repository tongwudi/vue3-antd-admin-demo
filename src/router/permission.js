import router from './index'
import store from '@/store/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false }) // 进度环显示/隐藏

// 白名单
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  // 打开进度条
  NProgress.start()

  const hasToken = store.getters.hasToken
  if (hasToken) {
    // 已登录状态禁止回到登录页
    if (to.path === '/login') {
      next('/')
    } else {
      console.log(to)

      // const hasRoutes = store.getters.hasRoutes
      // if (!hasRoutes) {
      //   try {
      //     const accessRoutes = await store.dispatch('permission/generateRoutes')
      //     console.log(router, accessRoutes);

      //     router.options.routes = store.state.permission.routes

      //     accessRoutes.forEach(route => {
      //       router.addRoute(route)
      //     })

      //     next({ ...to, replace: true })
      //   } catch (err) {
      //     // 请求失败，移除 token 并跳转登录页
      //     await store.dispatch('permission/logout')
      //     next(`/login?redirect=${to.path}`)
      //   }
      // } else {
      next()
      // }
    }
  } else {
    // 未登录可以访问白名单页面(登录页面)
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})

router.afterEach(() => {
  // 关闭进度条
  NProgress.done()
})
