import axios from 'axios'
import pkg from './package'

export default {
  mode: 'universal',
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'BLOG - KOFI OBRASI OCRAN',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      {
        property: 'og:title',
        content: 'BLOG - KOFI OBRASI OCRAN'
      },
      {
        property: 'og:description',
        content: 'Great content with a great depth of thought'
      },
      {
        property: 'og:image',
        content: 'https://www.devcodes.co/seo-image.jpg'
      },
      {
        property: 'og:url',
        content: 'https://www.devcodes.co'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        name: 'twitter:card',
        content: 'https://www.devcodes.co/seo-image.jpg'
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
  plugins: ['~/plugins/fetchSinglePost.js', '~/plugins/filters.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'storyblok-nuxt',
      {
        accessToken:
          process.env.NODE_ENV === 'production'
            ? '4lBKmfH0c8GkkPfryFIBywtt'
            : 'nsd8ctxirqtZAxFQwxYgLwtt',
        cacheProvider: 'memory'
      }
    ],
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-131436918-3'
      }
    ]
  ],

  generate: {
    // generate: {
    routes: function(callback) {
      const token = `4lBKmfH0c8GkkPfryFIBywtt`
      const version = 'published'
      let cacheVersion = 0

      // other routes that are not in Storyblok with their slug.
      const routes = ['/', '/about'] // adds / directly

      // Load space and receive latest cache version key to improve performance
      axios
        .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
        .then(spaceRes => {
          // timestamp of latest publish
          cacheVersion = spaceRes.data.space.version
          // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
          axios
            .get(
              `https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cacheVersion}`
            )
            .then(res => {
              // eslint-disable-next-line
              Object.keys(res.data.links).forEach(key => {
                if (res.data.links[key].slug !== 'home') {
                  routes.push('/' + res.data.links[key].slug)
                }
              })
              callback(null, routes)
            })
        })
    }
    // }
    // routes: function() {
    //   return axios
    //     .get(
    //       'https://api.storyblok.com/v1/cdn/stories?&version=published&token=4lBKmfH0c8GkkPfryFIBywtt&starts_with=crosslines&cv=' +
    //         Math.floor(Date.now() / 1e3)
    //     )
    //     .then(res => {
    //       const crossLines = res.data.stories.map(el => el.full_slug)
    //       return ['/', '/crosslines', '/about', ...crossLines]
    //     })
    // }
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
          exclude: /(node_modules)/,
          options: {
            formatter: require('eslint-friendly-formatter'),
            fix: true
          }
        })
      }
    }
  }
}
