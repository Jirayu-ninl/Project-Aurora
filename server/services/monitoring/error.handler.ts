import { env } from '@global/env.mjs'
import { serverLog } from '@aurora/libs/monitor/log.server'
import { captureToSentry } from '@aurora/libs/monitor/sentry.capture'

const ErrorHandler = (e: any) => {
  captureToSentry(e, 'error')
  const log = serverLog()
  let message: string = 'Database connection failed'
  if (
    typeof e === 'object' &&
    e &&
    'message' in e &&
    typeof e.message === 'string'
  ) {
    if (env.NODE_ENV !== 'production') console.log(e)
    message = e.message
  }
  log.error(message)
}

export { ErrorHandler }
