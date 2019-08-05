<template>
  <div>
    <header class="main-header">
      <nav class="main-nav">
        <nuxt-link to="/#" class="nav-brand">
          MUPATI
        </nuxt-link>
        <ul class="nav-links">
          <nuxt-link to="/#" tag="li" class="nav-link">
            <a>HOME</a>
          </nuxt-link>
          <nuxt-link to="/about" tag="li" class="nav-link">
            <a>ABOUT</a>
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
    <Humburger
      id="burger"
      :is-open-icon="!displayNav"
      @showMobileNav="toggleNav"
    />
    <nav class="mobile-nav" :style="{ display: displayNav ? 'flex' : 'none' }">
      <ul class="mobile--nav-links" @click="toggleNav">
        <nuxt-link to="/about" tag="li" class="mobile--nav-link">
          <a>ABOUT</a>
        </nuxt-link>
        <nuxt-link to="/wordsmith" tag="li" class="mobile--nav-link">
          <a>WORDSMITH</a>
        </nuxt-link>
        <nuxt-link to="/crosslines" tag="li" class="mobile--nav-link">
          <a>CROSSLINES</a>
        </nuxt-link>
        <nuxt-link to="/tech" tag="li" class="mobile--nav-link">
          <a>TECH</a>
        </nuxt-link>
      </ul>
    </nav>
  </div>
</template>
<script>
import Humburger from '@/components/Humburger/Humburger'
export default {
  components: {
    Humburger
  },
  data() {
    return {
      displayNav: false
    }
  },
  methods: {
    toggleNav() {
      this.displayNav = !this.displayNav
    }
  }
}
</script>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #022d30;
  padding: 1rem 2rem;
  z-index: 3;
}
.main-nav {
  height: 100%;
  display: flex;
}
.nav-brand {
  /* flex-grow: 1; */
  color: #06c4d1;
  font-size: 30px;
  font-weight: bold;
  /* margin: 16px 0; */
}
.nav-links {
  list-style: none;
  display: flex;
  margin-left: auto;
  margin-right: 3em;
}
.nav-link {
  margin: 0 1rem;
  padding: 0.3rem;
  text-transform: uppercase;
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
ul.mobile--nav-links {
  list-style: none;
}
@media (max-width: 480px) {
  .main-header {
    z-index: 3;
  }
  .nav-links {
    display: none;
  }
  #burger {
    position: fixed;
    top: 18px;
    right: 5em;
    z-index: 6;
  }
  .mobile-nav {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    height: 100vh;
    background-color: #022d30;
    opacity: 0.9;
    z-index: 5;
    display: none;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  .mobile--nav-link {
    font-weight: 700;
    text-transform: uppercase;
    margin: 5em 0;
  }
  .mobile--nav-link a {
    color: #fff;
  }
  .mobile--nav-link a:hover {
    color: #06c4d1;
  }
  .mobile--nav-link a:hover::before {
    content: '>';
    font-weight: bolder;
    margin-right: 5px;
    color: #000;
  }
}
</style>
