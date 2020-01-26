import Vue from 'vue'
import { Auth } from 'aws-amplify'

class AuthService {
  constructor(store) {
    this.$store = store
  }

  get isAuthenticated() {
    return this.$store.state.user.isAuthenticated
  }

  get user() {
    return this.$store.state.user.current
  }

  get email() {
    return this.user.attributes.email
  }

  async login({ email, password }) {
    const user = await Auth.signIn(email, password)
    this.$store.commit('user/set', user)
    return user
  }

  async register({ email, password }) {
    const user = await Auth.signUp({
      username: email,
      password
    })
    return user
  }

  async confirmRegistration({ email, code }) {
    return await Auth.confirmSignUp(email, code)
  }

  async logout() {
    await Auth.signOut()
    this.$store.dispatch('user/logout')
  }
}

export default async ({ store }) => {
  const authService = new AuthService(store)
  Vue.prototype.$auth = authService
  Vue.$auth = authService

  await store.dispatch('user/load')
}
