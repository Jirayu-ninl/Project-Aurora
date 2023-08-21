import { env } from '@aurora/env.mjs'
import { captureToSentry } from '@aurora/libs/monitor/sentry.capture'

const ErrorHandler = (e: any) => {
  captureToSentry(e, 'error')
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
  return message
}

export { ErrorHandler }
