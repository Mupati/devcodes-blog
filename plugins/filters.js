import Vue from 'vue'
import marked from 'marked'

Vue.filter('markdown', markdown => {
  if (typeof markdown !== 'undefined') {
    return marked(markdown)
  }
  return null
})
