<template>
  <section class="posts-list">
    <PostPreview :is-admin="isAdmin" v-for="post in posts" :post="post" :key="post.id" />
  </section>
</template>

<script>
import PostPreview from '~/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  },

  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      posts: [
        {
          id: 1,
          thumbnail: 'https://www.bbva.com/wp-content/uploads/2017/08/innovacion-bbva-100817.jpg',
          title: 'Title 1',
          previewText: 'This is a post'
        },
        {
          id: 2,
          thumbnail: 'https://www.orfonline.org/wp-content/uploads/2020/09/tech-1280x720.jpg',
          title: 'Title 2',
          previewText: 'This is another post'
        },
        {
          id: 3,
          thumbnail: 'https://www.bbva.com/wp-content/uploads/2017/08/innovacion-bbva-100817.jpg',
          title: 'Title 3',
          previewText: 'This is a third post'
        }
      ]
    }
  }
}
</script>

<style scoped>

.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
