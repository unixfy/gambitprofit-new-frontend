import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  loading: {
    color: 'blue'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate(titleChunk) {
      return titleChunk ? `${titleChunk} - GambitProfit` : "GambitProfit"
    },
    title: 'GambitProfit',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'The easy way to profit from Gambit Rewards!'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/logo.png'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/custom.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    '@nuxtjs/google-analytics'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/strapi',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/firebase'
  ],

  // Firebase options
  firebase: {
    config: {
      apiKey: "AIzaSyBQurQkGR2Lg07MiXnd2vKkJLnOBpMpoDE",
      authDomain: "gambitprofit.firebaseapp.com",
      databaseURL: "https://gambitprofit.firebaseio.com",
      projectId: "gambitprofit",
      storageBucket: "gambitprofit.appspot.com",
      messagingSenderId: "920601018579",
      appId: "1:920601018579:web:f53771f6062a8902dd5426",
      measurementId: "G-9WN6X1RHKM"
    },
    services: {
      auth: true
    }
  },
  // PWA
  pwa: {
    icon: {
      source: "/logo.png",
      fileName: 'logo.png'
    },
    meta: {
      name: "GambitProfit",
      description: "The easy way to profit from Gambit Rewards!",
      ogSiteName: "Unixfy",
      ogHost: "https://gambitprofit.com",
      ogImage: true,
      ogUrl: "https://gambitprofit.com",
      theme_color: "#03A9F4",
    },
    manifest: {
      name: 'GambitProfit',
      short_name: 'GambitProfit',
      description: "The easy way to profit from Gambit Rewards!"
    },
  },

  // Sitemap
  sitemap: {
    hostname: 'https://gambitprofit.com',
    gzip: true,
    // Dynamically get routes from nuxt/content
    // Thx https://medium.com/javascript-in-plain-english/generating-sitemap-entries-for-nuxt-content-f7eb7b5fdb3b
    // Note: We use slug instead of path because our files are in a subdirectory, but their slug is not
    routes: async () => {
      const {$content} = require('@nuxt/content')

      const pages = await $content('site-pages')
        .only(['slug'])
        .fetch()

      return pages.map((p) => p.slug)
    }
  },

  // Google Analytics
  googleAnalytics: {
    id: 'UA-133162940-5'
  },

  // Strapi module config
  strapi: {
    entities: ['gambit-plays'],
    url: 'https://api.gambitprofit.com'
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vuetify/lib']
  }
}
