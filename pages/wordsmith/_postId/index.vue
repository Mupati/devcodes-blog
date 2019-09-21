<template>
  <div id="wordsmith">
    <SinglePost
      :editable="editable"
      :image="image"
      :title="title"
      :content="content"
    />
  </div>
</template>

<script>
import SinglePost from '@/components/Blog/SinglePost'
import storyblokLivePreview from '@/mixins/storyblokLivePreview'
export default {
  components: {
    SinglePost
  },
  mixins: [storyblokLivePreview],
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
  }
}
</script>
