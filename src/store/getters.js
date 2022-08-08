export default {
  // 是否已登录
  hasToken: state => !!state.permission.token,
  // 是否已生成菜单
  hasRoutes: state => state.permission.routes.length > 0
}
