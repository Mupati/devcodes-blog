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
export default {
  components: {
    Hero,
    Category
  },
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
  margin: 2em 5%;
}
</style>
