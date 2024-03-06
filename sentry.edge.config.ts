import * as Sentry from '@sentry/nextjs'
import config from '@global/config'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

Sentry.init({
  dsn: SENTRY_DSN,
  release: config.app.VERSION,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
})
