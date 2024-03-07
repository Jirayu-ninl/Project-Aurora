import * as Sentry from '@sentry/nextjs'
import config from '@global/config'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
  dsn: SENTRY_DSN,
  release: config.app.VERSION,
  environment: process.env.NODE_ENV,
  debug: process.env.NODE_ENV === 'development',
  // debug: false,
  tracesSampleRate: 1.0,
  // replaysSessionSampleRate: 0.1,
  // integrations: [
  //   Sentry.replayIntegration({
  //     maskAllText: true,
  //     blockAllMedia: true,
  //   }),
  // ],
})
