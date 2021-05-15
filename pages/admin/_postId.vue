<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "~/components/Admin/AdminPostForm";

export default {
  layout: 'admin',

  components: {
    AdminPostForm
  },

  data () {
    return {
      loadedPost: {
        author: 'Anna',
        title: 'New post',
        content: 'A lot of boring text',
        thumbnailLink: 'https://www.bbva.com/wp-content/uploads/2017/08/innovacion-bbva-100817.jpg'
      }
    }
  }
}
</script>

<style scoped>

.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
