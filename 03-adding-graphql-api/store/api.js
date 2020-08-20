import { API } from 'aws-amplify'
import * as gqlQueries from '~/src/graphql/queries'
import * as gqlMutations from '~/src/graphql/mutations'

export const state = {
  posts: [],
  post: null
}

export const getters = {
  authMode: (state, getters, rootState) =>
    rootState.auth.isAuthenticated ? 'AMAZON_COGNITO_USER_POOLS' : 'API_KEY'
}

export const mutations = {
  set(state, { key, value }) {
    state[key] = value
  }
}

export const actions = {
  async listPosts({ dispatch }) {
    return dispatch('query', { key: 'posts', query: 'listPosts' })
  },

  async getPost({ dispatch }, id) {
    return dispatch('get', { key: 'post', query: 'getPost', id })
  },

  async createPost({ dispatch }, input) {
    return dispatch('mutate', { key: 'post', mutation: 'createPost', input })
  },

  async updatePost({ dispatch }, input) {
    return dispatch('mutate', {
      key: 'post',
      mutation: 'updatePost',
      input
    })
  },

  async deletePost({ dispatch }, id) {
    return dispatch('mutate', { mutation: 'deletePost', input: { id } })
  },

  // API HELPERS
  async get({ commit, getters }, { key, query, id }) {
    const { data } = await API.graphql({
      query: gqlQueries[query],
      variables: { id },
      authMode: getters.authMode
    })

    const value = data[query]
    if (key) commit('set', { key, value })
    return value
  },

  async query({ commit, getters }, { key, query, filter }) {
    const { data } = await API.graphql({
      query: gqlQueries[query],
      variables: { filter },
      authMode: getters.authMode
    })

    const value = data[query].items
    if (key) commit('set', { key, value })
    return value
  },

  async mutate({ commit, getters }, { key, mutation, input }) {
    const { data } = await API.graphql({
      query: gqlMutations[mutation],
      variables: { input },
      authMode: getters.authMode
    })

    const value = data[mutation]
    if (key) commit('set', { key, value })
    return value
  }
}
