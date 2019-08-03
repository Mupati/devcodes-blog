<template>
  <div id="post" v-editable="editable">
    <Hero :hero-image="image" :page-title="title" class="post-thumbnail" />
    <main>
      <article class="post-detail">
        <!-- eslint-disable-next-line -->
        <p v-html="$options.filters.markdown(content)"></p>
      </article>
    </main>
    <Author name="Kofi Obrasi Ocran" image="/ocran.jpeg" />
  </div>
</template>

<script>
import Author from '@/components/Blog/Author'
import Hero from '@/components/Hero/Hero'
export default {
  components: {
    Author,
    Hero
  },
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    editable: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
#post {
  margin: 0 0 1rem;
}
main {
  margin: 3rem 20% 6rem;
}
article {
  flex-grow: 1;
}
.post-thumbnail {
  height: 300px;
}
.post-detail {
  margin: 0 auto 10em;
}
@media (max-width: 768px) {
  main {
    margin: 3rem 5%;
  }
}
</style>
