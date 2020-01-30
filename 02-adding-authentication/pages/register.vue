<template>
  <div class="max-w-md mx-auto pt-6">
    <div>
      <h1 class="mb-3">Register</h1>

      <!-- Unauthenticated -->
      <div v-if="!$auth.isAuthenticated">
        <!-- Register -->
        <form v-if="step === steps.register" @submit.prevent="register">
          <input v-model="registerForm.email" type="email" placeholder="Email" class="form-control" />
          <input
            v-model="registerForm.password"
            type="password"
            placeholder="Password"
            class="form-control"
          />
          <button type="submit" class="button--green">Register</button>
        </form>

        <!-- Confirm Registration -->
        <form v-else @submit.prevent="confirm">
          <input v-model="confirmForm.email" type="email" placeholder="Email" class="form-control" />
          <input v-model="confirmForm.code" placeholder="Code" class="form-control" />
          <button type="submit" class="button--green">Confirm</button>
        </form>

        <nuxt-link to="/login">Have an account? Login</nuxt-link>
      </div>

      <!-- Authenticated -->
      <div v-else>
        You're logged in as {{ $auth.email }}.
        <button
          @click="$store.dispatch('auth/logout')"
          class="button--green"
        >Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
const steps = {
  register: 'REGISTER',
  confirm: 'CONFIRM'
}

export default {
  data: () => ({
    steps: { ...steps },
    step: steps.register,
    registerForm: {
      email: '',
      password: ''
    },
    confirmForm: {
      email: '',
      code: ''
    }
  }),

  methods: {
    async register() {
      try {
        await this.$store.dispatch('auth/register', this.registerForm)
        this.confirmForm.email = this.registerForm.email
        this.step = this.steps.confirm
      } catch (error) {
        console.log({ error })
      }
    },

    async confirm() {
      try {
        await this.$store.dispatch('auth/confirmRegistration', this.confirmForm)
        await this.$store.dispatch('auth/login', this.registerForm)
        this.$router.push('/')
      } catch (error) {
        console.log({ error })
      }
    }
  }
}
</script>