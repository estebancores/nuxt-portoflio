export default async function({ app }) {
  if (process.client) {
    app.$fire.analytics.setAnalyticsCollectionEnabled(true)
    app.$fire.analytics.logEvent('ready')
  }
}
