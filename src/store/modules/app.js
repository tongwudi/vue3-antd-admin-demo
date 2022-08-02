const state = {
  collapsed: false
}

const mutations = {
  toggleCollapse: (state, val) => {
    state.collapsed = val
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
