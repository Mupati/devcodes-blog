<template>
  <div id="category">
    <ul>
      <li class="post-category">
        <nuxt-link to="/wordsmith">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          molestias reprehenderit magnam repellendus. Sunt fugit repudiandae
          debitis accusamus, doloremque possimus facilis voluptatem consequatur
          aliquam dignissimos eius dicta reprehenderit magni iusto!
        </nuxt-link>
      </li>
      <li class="post-category">
        <nuxt-link to="/wordsmith" tag="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          molestias reprehenderit magnam repellendus. Sunt fugit repudiandae
          debitis accusamus, doloremque possimus facilis voluptatem consequatur
          aliquam dignissimos eius dicta reprehenderit magni iusto!
        </nuxt-link>
      </li>
      <li class="post-category">
        <nuxt-link to="/wordsmith" tag="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          molestias reprehenderit magnam repellendus. Sunt fugit repudiandae
          debitis accusamus, doloremque possimus facilis voluptatem consequatur
          aliquam dignissimos eius dicta reprehenderit magni iusto!
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
p {
  /* justify-content: center;
  align-items: center; */
  padding: 1em;
}
ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
li {
  list-style: none;
  margin-bottom: 10px;
}
.post-category {
  border: 1px solid #000;
  background-size: cover;
  background-position: center;
  height: 20rem;
  width: 20rem;
}
</style>
