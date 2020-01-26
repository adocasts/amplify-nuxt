<template>
  <div class="max-w-md mx-auto pt-6">
    <div>
      <h1 class="text-xl mb-3">Register</h1>

      <!-- Not Authenticated -->
      <div v-if="!$auth.isAuthenticated">
        <!-- Register Form -->
        <form v-if="step === steps.register" @submit.prevent="register">
          <input v-model="registerForm.email" placeholder="Email" class="form-control" type="email" />
          <input
            v-model="registerForm.password"
            placeholder="Password"
            class="form-control"
            type="password"
          />
          <button type="submit" class="button--green">Register</button>
        </form>

        <!-- Confirm Registration Form -->
        <form v-else @submit.prevent="confirm">
          <input v-model="confirmForm.email" placeholder="Email" class="form-control" type="email" />
          <input v-model="confirmForm.code" placeholder="Code" class="form-control" />
          <button type="submit" class="button--green">Confirm</button>
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
        await this.$auth.register(this.registerForm)
        this.confirmForm.email = this.registerForm.email
        this.step = this.steps.confirm
      } catch (error) {
        console.log({ error })
      }
    },

    async confirm() {
      try {
        await this.$auth.confirmRegistration(this.confirmForm)
        await this.$auth.login(this.registerForm)
        this.$router.push('/')
      } catch (error) {
        console.log({ error })
      }
    }
  }
}
</script>