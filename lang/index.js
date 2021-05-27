module.exports = {
  locales: [
    { code: 'en', iso: 'en-US', name: 'EN', file: 'en.js' },
    { code: 'es', iso: 'es-CO', name: 'ES', file: 'es.js' }
  ],
  defaultLocale: 'es',
  seo: false,
  lazy: true,
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    onlyOnRoot: true
  },
  langDir: 'lang/languages',
  parsePages: false,
  vuex: {
    moduleName: 'i18n',
    syncLocale: true,
    syncMessages: false,
    syncRouteParams: true
  },
  vueI18n: {
    fallbackLocale: 'es'
  }
}
