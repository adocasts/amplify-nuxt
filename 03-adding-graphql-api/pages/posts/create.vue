<template>
  <div class="p-6">
    <h1 class="text-3xl font-semibold mb-6">Create New Post</h1>

    <form @submit.prevent="create">
      <label>Title</label>
      <input v-model="form.title" placeholder="Title" class="form-control" />

      <label>Summary</label>
      <input v-model="form.summary" placeholder="Summary" class="form-control" />

      <label>Body</label>
      <textarea v-model="form.body" placeholder="Body" class="form-control"></textarea>

      <button type="submit" class="button--green">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      title: '',
      summary: '',
      body: ''
    }
  }),

  methods: {
    async create() {
      try {
        const post = await this.$store.dispatch(
          'api/createPost',
          this.getPayload()
        )
        this.$router.push('/')
      } catch (error) {
        console.log({ error })
      }
    },

    getPayload() {
      return {
        ...this.form,
        authorId: this.$auth.id,
        createdAt: Date.now() + ''
      }
    }
  }
}
</script>