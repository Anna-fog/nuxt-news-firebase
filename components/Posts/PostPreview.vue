<template>
  <nuxt-link :to="'/posts/' + post.id" class="post-preview">
    <article>
      <div
        class="post-thumbnail"
        :style="{backgroundImage: `url('${post.thumbnail}')`}">
      </div>
      <div class="post-content">
        <h1>{{ post.title }}</h1>
        <p>{{ post.previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}


</style>
