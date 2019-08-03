<template>
  <div id="category">
    <ul>
      <li class="post-category">
        <nuxt-link to="/crosslines">
          <img src="/crosslines-icon.svg" alt="crosslines icon" /><br />
          CROSSLINES
        </nuxt-link>
      </li>
      <li class="post-category">
        <nuxt-link to="/wordsmith">
          <img src="/wordsmith-icon.svg" alt="wordsmith icon" /><br />
          WORDSMITH
        </nuxt-link>
      </li>
      <li class="post-category">
        <nuxt-link to="/tech">
          <img src="/tech-icon.svg" alt="tech icon" /><br />
          TECHNOLOGY
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
  position: relative;
  margin-bottom: 10px;
}
li::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  opacity: 0.65;
}
li img {
  height: 128px;
  margin-bottom: 20px;
  z-index: 2;
}
.post-category {
  height: 20rem;
  width: 25rem;
  max-width: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
}

.post-category:hover {
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
}
a {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  z-index: 2;
  color: #06c4d1;
}
</style>
