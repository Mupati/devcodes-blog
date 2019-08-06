<template>
  <div id="app">
    <TheHeader />
    <main class="main-content">
      <nuxt />
    </main>
    <TheFooter id="app-footer" />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'
import TheFooter from '@/components/TheFooter/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body,
#__nuxt,
#__layout,
#app {
  height: 100%;
}
body {
  font-family: 'Lato', sans-serif;
  background-color: #eff1f5;
}
.main-content {
  margin-top: 2.28rem;
  min-height: 100%;
}

a {
  text-decoration: none;
}
p,
dd,
dt {
  line-height: 1.5rem;
}
</style>
