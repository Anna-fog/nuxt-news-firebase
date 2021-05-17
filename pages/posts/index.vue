<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"></PostList>
  </div>
</template>

<script>

export default {

  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },

  head: {
    title:  'A blog post'
  }
}
</script>

<style scoped>
  .posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
