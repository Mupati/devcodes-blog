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
#app {
  display: flex;
  flex-direction: column;
  align-content: flex-end;
}
.main-content {
  margin-top: 4.3rem;
}
/* #app-footer {
  
} */
</style>
