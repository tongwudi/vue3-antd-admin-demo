export const setLocal = (key, val) => {
  if (typeof val === 'object') {
    localStorage.setItem(key, JSON.stringify(val))
  } else {
    localStorage.setItem(key, val)
  }
}

export const getLocal = key => {
  let valStr = localStorage.getItem(key)
  if (valStr) {
    return typeof valStr === 'object' ? JSON.parse(valStr) : valStr
  }
  return null
}

export const clearLocal = key => {
  localStorage.removeItem(key)
}
