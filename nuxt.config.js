import lang from './lang'
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ECOR | Desarrollador Web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/ecr.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&display=swap' },
      { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/initFirebaseFunctions'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-i18n', lang],
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['@nuxtjs/firebase', {
      config: {
        apiKey: "AIzaSyACbqUUAy_xBYsT9Fr5KUK_YFNaW-3JkM8",
        authDomain: "portafolio-ae893.firebaseapp.com",
        databaseURL: "https://portafolio-ae893.firebaseio.com",
        projectId: "portafolio-ae893",
        storageBucket: "portafolio-ae893.appspot.com",
        messagingSenderId: "775549150763",
        appId: "1:775549150763:web:f3d32cc116223c3931ac6e"
      },
      services: {
      auth: false,
        firestore: false,
        functions: false,
        storage: false,
        database: true,
        messaging: false,
        performance: false,
        analytics: true,
        remoteConfig: false
      },
      analytics: {
        collectionEnabled: true // default
      },
      database: {
        emulatorHost: 'localhost'
      }
    }],
    ['@nuxtjs/recaptcha',{
        siteKey: '6Lc97vMaAAAAACgNMaPn946z6eUz5tIyY-uFtPuC',
        language: 'es',
        size: 'normal',
        hideBadge: true,
        version: 2
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
