<template>
  <div class="flex flex-col p-12">
    <nuxt-link to="/">&lt; Back</nuxt-link>

    <h1 class="text-4xl mb-3">{{ post.title }}</h1>
    <p class="text-lg mb-3 pb-3 border-b border-grey-light">{{ post.summary }}</p>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ store, params }) {
    return {
      post: await store.dispatch('api/getPost', params.id)
    }
  }
}
</script>