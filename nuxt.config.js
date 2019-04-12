import axios from 'axios'
import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Devcodes Blog',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lato:400,700'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/axios'
    [
      'storyblok-nuxt',
      {
        accessToken:
          process.env.NODE_ENV === 'production'
            ? '4lBKmfH0c8GkkPfryFIBywtt'
            : 'nsd8ctxirqtZAxFQwxYgLwtt',
        cacheProvider: 'memory'
      }
    ]
  ],

  generate: {
    routes: function() {
      return axios
        .get(
          'https://api.storyblok.com/v1/cdn/stories?&version=published&token=4lBKmfH0c8GkkPfryFIBywtt&starts_with=blog&cv=' +
            Math.floor(Date.now() / 1e3)
        )
        .then(res => {
          const blogPosts = res.data.stories.map(el => el.full_slug)
          return ['/', '/blog', '/about', ...blogPosts]
        })
    }
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}