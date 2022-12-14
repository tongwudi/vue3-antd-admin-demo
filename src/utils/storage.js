// 设置永久缓存
export const setLocal = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val))
}

// 获取永久缓存
export const getLocal = key => {
  const json = localStorage.getItem(key)
  return JSON.parse(json)
}

// 移除永久缓存
export const removeLocal = key => {
  localStorage.removeItem(key)
}

// 移除全部永久缓存
export const clearLocal = () => {
  localStorage.clear()
}
