<template>
  <nuxt-link :to="'/' + id" class="post-preview">
    <article>
      <div
        :style="{ backgroundImage: 'url(' + image + ')' }"
        class="post-preview-thumbnail"
      ></div>
      <div class="post-preview-content">
        <h1>{{ title }}</h1>
        <p>{{ excerpt }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #000;
}
.post-preview {
  border-radius: 3px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  /* width: 90%; */
  height: 20rem;
  margin: 1rem;
}

.post-preview:hover {
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
}
.post-preview-thumbnail {
  background-position: center;
  background-size: cover;
  /* width: 20rem; */
  height: 8rem;
}
.post-preview-content {
  text-align: center;
  padding: 1rem;
}
@media (min-width: 35rem) {
  .post-preview {
    width: 25rem;
  }
}
</style>
