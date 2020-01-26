<template>
  <div class="max-w-md mx-auto pt-6">
    <div>
      <h1 class="text-xl mb-3">Login</h1>

      <!-- Not Authenticated -->
      <div v-if="!$auth.isAuthenticated">
        <form @submit.prevent="login">
          <input v-model="form.email" placeholder="Email" class="form-control" type="email" />
          <input
            v-model="form.password"
            placeholder="Password"
            class="form-control"
            type="password"
          />
          <button type="submit" class="button--green">Login</button>
        </form>
      </div>

      <!-- Authenticated -->
      <div v-else>
        <p>You're logged in as {{ $auth.email }}</p>
        <button @click="$auth.logout()" class="button--grey">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),

  methods: {
    async login() {
      try {
        await this.$auth.login(this.form)
        this.$router.push('/')
      } catch (error) {
        console.log({ error })
      }
    }
  }
}
</script>