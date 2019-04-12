<template>
  <section id="posts">
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
export default {
  components: {
    PostPreview
  },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories', {
        version: context.isDev ? 'draft' : 'published',
        starts_with: 'blog'
      })
      .then(res => {
        return {
          posts: res.data.stories.map(el => {
            return {
              id: el.slug,
              title: el.content.title,
              previewText: el.content.summary,
              thumbnailUrl: el.content.thumbnail
            }
          })
        }
      })
  }
  // data() {
  //   return {
  //     posts: [
  //       {
  //         title: 'My First Post',
  //         previewText: 'This is me getting started with a Nuxt Blog',
  //         thumbnailUrl: 'http://lorempixel.com/400/200/sports',
  //         id: 'a-new-beginning'
  //       },
  //       {
  //         title: 'My Second Post',
  //         previewText: 'This is an article about slavery in the Bible',
  //         thumbnailUrl: 'http://lorempixel.com/400/200/sports',
  //         id: 'devcodes-blog'
  //       }
  //     ]
  //   }
  // }
}
</script>

<style scoped>
#posts {
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
@media (min-width: 35rem) {
  #posts {
    flex-direction: row;
  }
}
</style>
