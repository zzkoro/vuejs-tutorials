import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

const state = {
  userId: undefined,
  email: undefined,
  isLogin: false,
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
