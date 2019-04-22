<template>
  <div>
    <TheHeader />
    <main class="main-content">
      <nuxt />
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'

export default {
  components: {
    TheHeader
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: 'Lato', sans-serif;
  margin: 0;
  background-color: #eff1f5;
}
a {
  text-decoration: none;
}
p,
dd,
dt {
  line-height: 1.5rem;
}
.main-content {
  margin-top: 4.5rem;
}
</style>
