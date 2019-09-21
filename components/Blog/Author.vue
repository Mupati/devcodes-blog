<template>
  <div id="author">
    <div class="author--image">
      <img :src="image" alt="author" />
    </div>
    <div class="author--description">
      <h3 class="author--name">Author: {{ name }}</h3>
      <p class="author--biography">
        I am a Software Engineer and a Wordsmith by Inspiration.<br />
        I write about topical issues in the society from a Christian perspective
        and share my experience as a Software Developer on this blog.
        <br />
        Read more <nuxt-link to="/about">about me.</nuxt-link>
      </p>
      <ul class="author--social-links">
        <li>
          <a
            href="https://www.linkedin.com/in/kofiobrasiocran"
            target="_blank"
            rel="noreferrer noopenerI"
            ><img src="/linkedin.png" alt="linkedin-link"
          /></a>
        </li>
        <li>
          <a
            href="https://github.com/Mupati"
            target="_blank"
            rel="noreferrer noopenerI"
            ><img src="/github.png" alt="github-link"
          /></a>
        </li>
        <li>
          <a
            href="https://mupati.devcodes.co"
            target="_blank"
            rel="noreferrer noopener"
            ><img src="/domain.png" alt="website-link"
          /></a>
        </li>
        <li>
          <a
            href="https://www.twitter.com/kofi_mupati"
            target="_blank"
            rel="noreferrer noopenerI"
            ><img src="/twitter.png" alt="twitter-link"
          /></a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/brakroxeffectx"
            target="_blank"
            rel="noreferrer noopenerI"
            ><img src="/facebook.png" alt="facebook-link"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },

    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
#author {
  display: flex;
  padding: 1em 2em;
  border: 1px solid #022d30;
  border-radius: 3px;
  margin: 0 20%;
}
.author--image {
  padding-right: 2em;
  flex-grow: 1;
}
.author--image img {
  height: 300px;
  width: 300px;
  border-radius: 50%;
}
.author--description {
  padding: 0.1rem 2rem;
  flex-grow: 2;
}
ul > li {
  display: inline-block;
}
li {
  margin-right: 1em;
}
@media (max-width: 768px) {
  img {
    display: block;
    margin: 0 auto;
  }
  #author {
    flex-direction: column;
    border: 0;
    margin: 0;
    padding: 0.2em 0.2em;
  }
  .author--description {
    border: 0;
    padding: 0.1rem 0.5rem;
  }
}
</style>
