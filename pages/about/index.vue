<template>
  <section id="about-page" v-editable="editable">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </section>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/about', {
        version: context.isDev ? 'draft' : 'published'
      })
      .then(res => {
        return {
          editable: res.data.story.content,
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
#about-page {
  width: 80%;
  max-width: 700px;
  margin: 9rem auto;
  text-align: justify;
}
#about-page h1 {
  text-align: center;
}
#about-page p {
  white-space: pre-line;
}
</style>
