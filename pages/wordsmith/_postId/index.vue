<template>
  <div id="post" v-editable="editable">
    <header
      class="post-thumbnail"
      :style="{ backgroundImage: 'url(' + image + ')' }"
    >
      <h1>{{ title }}</h1>
    </header>
    <main>
      <aside>
        <Author
          name="Bra Krox Effectx"
          image="https://res.cloudinary.com/mupati/image/upload/v1555683114/blog_authors/koc.jpg"
        />
      </aside>
      <article class="post-detail">
        <p>{{ content }}</p>
      </article>
    </main>
  </div>
</template>

<script>
import Author from '@/components/Blog/Author'
export default {
  components: {
    Author
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/wordsmith/' + context.params.postId, {
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
header {
  display: flex;
  justify-content: center;
  align-items: center;
}
main {
  display: flex;
  margin: 3rem 15%;
}
aside {
  margin-top: 2rem;
  margin-right: 2rem;
}
.post-thumbnail {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
}
.post-detail {
  margin: 0 auto;
}
h1 {
  text-align: center;
}
p {
  white-space: pre-line;
}
</style>
