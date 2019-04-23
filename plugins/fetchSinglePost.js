/* eslint-disable no-console */
export default ({ app }, inject) => {
  inject('fetchSinglPost', (context, path) => {
    return context.app.$storyapi
      .get(`cdn/stories/${path}/` + context.params.postId, {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      })
      .then(res => {
        return {
          editable: res.data.story.content,
          image: res.data.story.content.thumbnail,
          title: res.data.story.content.title,
          content: res.data.story.content.content
        }
      })
  })
}
// export default ({ app }, inject) => {
//   inject('myInjectedFunction', string => console.log('That was easy!', string))
// }
