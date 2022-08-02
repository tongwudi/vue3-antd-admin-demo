import { createStore } from 'vuex'
import getters from './getters'
import app from './modules/app'
import permission from './modules/permission'

export default createStore({
  getters,
  modules: {
    app,
    permission
  }
})
