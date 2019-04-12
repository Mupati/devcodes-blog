<template>
  <div id="post" v-editable="editable">
    <div
      class="post-thumbnail"
      :style="{ backgroundImage: 'url(' + image + ')' }"
    ></div>
    <article class="post-detail">
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
    </article>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/blog/' + context.params.postId, {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      })
      .then(res => {
        return {
          editable: res.data.story.content,
          image: res.data.story.content.thumbnail,
          title: res.data.story.content.title,
          content: res.data.story.content.content
        }
      })
  },

  mounted() {
    this.$storybridge.on('change', () => {
      location.reload(true)
    })
  }
}
</script>

<style scoped>
#post {
  margin: 4.5rem 0;
}
.post-thumbnail {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
}
.post-detail {
  margin: 3rem 15%;
}
h1 {
  text-align: center;
}
p {
  white-space: pre-line;
}
</style>
