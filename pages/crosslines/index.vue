<template>
  <section id="posts">
    <Hero id="hero" hero-image="/crosslines.jpg" page-title="CROSSLINES" />
    <PostPreview
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :title="post.title"
      :excerpt="post.previewText"
      :image="post.thumbnailUrl"
    />
  </section>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview'
import Hero from '@/components/Hero/Hero'
export default {
  components: {
    PostPreview,
    Hero
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: context.isDev ? 'draft' : 'published',
        starts_with: 'crosslines'
      })
      .then(res => {
        return {
          posts: res.data.stories.map(el => {
            return {
              id: el.full_slug,
              title: el.content.title,
              previewText: el.content.summary,
              thumbnailUrl: el.content.thumbnail
            }
          })
        }
      })
  }
}
</script>

<style scoped>
#posts {
  display: flex;
  flex-direction: column;
}
#hero {
  height: 60vh;
}
</style>
