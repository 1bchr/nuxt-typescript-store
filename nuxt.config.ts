export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  publicRuntimeConfig: {
    axios: {
      baseURL: (process.env.API_URL || '') + process.env.STORE_ID,
      https: true
    }
  },

  privateRuntimeConfig: {},

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt.js-TypeScript store',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'nuxt-typescript-store' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: {
    color: '#dc3545',
    height: '3px',
    continuous: true
  },
  dir: {
    assets: 'src/assets',
    app: 'src/app',
    layouts: 'src/layouts',
    middleware: 'src/middleware',
    pages: 'src/pages',
    static: 'public',
    store: 'src/store'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/src/plugins/axios', ssr: true },
    { src: '~/src/plugins/resize', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  rootDir: __dirname,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    [
      '@nuxt/typescript-build',
      {
        typeCheck: {
          eslint: {
            files: './**/*.{js,ts,vue}'
          },
          typescript: {
            extension: {
              vue: true
            }
          }
        }
      }
    ],
    '@nuxtjs/dotenv',
    'nuxt-typed-vuex',
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ]
}
