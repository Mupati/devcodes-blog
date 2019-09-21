<template>
  <div id="home">
    <Hero
      class="homeHero"
      hero-image="/blog-image.jpg"
      page-title="WELCOME TO MY BLOG"
    />
    <main>
      <Category />
    </main>
  </div>
</template>

<script>
import Hero from '@/components/Hero/Hero'
import Category from '@/components/Categories/Category'
import storyblokLivePreview from '@/mixins/storyblokLivePreview'
export default {
  components: {
    Hero,
    Category
  },
  mixins: [storyblokLivePreview],
  data() {
    return {}
  }
}
</script>

<style scoped>
#home {
  color: #000;
}
main {
  margin: 5em 5%;
}
@media (max-width: 768px) {
  main {
    margin: 2em 0;
  }
}
</style>
