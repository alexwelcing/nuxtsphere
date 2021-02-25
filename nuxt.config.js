export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtsphere',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  module,exports = {
    modules: ['nuxt-ghost'],

    ghost: {
      /**
       * Your Ghost url
       */
      url: 'https://demo.ghost.io/ghost',

      /**
       * Your content api key
       */
      key: '22444f78447824223cefc48062',

      /**
       * Version
       * default: v3
       */
      version: 'v3',
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
};
