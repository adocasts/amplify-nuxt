import { Auth } from 'aws-amplify'

export const state = () => ({
  isAuthenticated: false,
  current: null
})

export const mutations = {
  set(state, user) {
    state.isAuthenticated = !!user
    state.current = user
  }
}

export const actions = {
  async load({ commit }) {
    try {
      const user = await Auth.currentAuthenticatedUser()
      commit('set', user)
    } catch (error) {
      commit('set', null)
    }
  },

  async logout({ commit }) {
    commit('set', null)
  }
}
