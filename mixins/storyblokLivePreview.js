export default {
  mounted() {
    this.$storybridge.on('change', event => {
      // if (!event.slugChanged) {
      //   // Reload the page on save events (publish, save button or autosave)
      //   this.$nuxt.$router.go({
      //     path: this.$nuxt.$router.currentRoute,
      //     force: true
      //   })
      // }
      location.reload(true)
    })
  }
}

// mounted() {
//     this.$storybridge.on('change', () => {
//       location.reload(true)
//     })
//   }
