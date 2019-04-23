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
        <p v-html="$options.filters.markdown(content)"></p>
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
  margin: 4.5rem 0;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
}
main {
  display: flex;
  margin: 3rem 5%;
}
aside {
  margin-top: 2rem;
  margin-right: 2rem;
  flex-grow: 3;
}
article {
  flex-grow: 9;
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
@media (max-width: 480px) {
  main {
    flex-direction: column;
  }
  aside {
    order: 2;
  }
  article {
    order: 1;
  }
}
</style>
