<template>
  <div id="author">
    <div class="author--image">
      <img :src="image" alt="author" />
    </div>
    <div class="author--description">
      <p>Author<br />{{ name }}</p>
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
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
}
.author--image img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}
.author--description {
  padding: 0.1 rem 0;
  text-align: center;
}
</style>
