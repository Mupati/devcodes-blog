<template>
  <header class="main-header">
    <nav class="main-nav">
      <div class="nav-brand">
        <h1>MUPATI</h1>
      </div>
      <ul class="nav-links">
        <nuxt-link to="/#" tag="li" class="nav-link">
          <a>HOME</a>
        </nuxt-link>
        <nuxt-link to="/wordsmith" tag="li" class="nav-link">
          <a>WORDSMITH</a>
        </nuxt-link>
        <nuxt-link to="/crosslines" tag="li" class="nav-link">
          <a>CROSSLINES</a>
        </nuxt-link>
        <nuxt-link to="/tech" tag="li" class="nav-link">
          <a>TECH</a>
        </nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #022d30;
  height: 4.5rem;
  padding-right: 2rem;
  padding-left: 2rem;
}
.main-nav {
  height: 100%;
  display: flex;
}
.nav-brand {
  flex-grow: 1;
  justify-self: center;
  align-content: center;
  color: #06c4d1;
}
.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
}
.nav-link {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  padding: 0.3rem;
}
.nav-link.nuxt-link-active {
  border-bottom: 3px solid #06c4d1;
}
.nav-link a {
  display: block;
  text-decoration: none;
  color: #fff;
}
.nav-link a:hover,
.nav-link a:active,
.nav-link.nuxt-link-active a {
  color: #06c4d1;
}
@media (max-width: 35rem) {
  .nav-links {
    overflow-x: auto;
  }
}
</style>
