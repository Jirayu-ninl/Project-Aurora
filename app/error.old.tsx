/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import * as Sentry from '@sentry/nextjs'
import type { NextPage } from 'next'
// import type { ErrorProps } from 'next/error'
import NextErrorComponent from 'next/error'

const MyError: NextPage<any> = ({ statusCode, hasGetInitialPropsRun, err }) => {
  if (!hasGetInitialPropsRun && err) {
    // getInitialProps is not called in case of
    // https://github.com/vercel/next.js/issues/8592. As a workaround, we pass
    // err via _app.js so it can be captured
    Sentry.captureException(err)
    // Flushing is not required in this case as it only happens on the client
  }

  return <NextErrorComponent statusCode={statusCode} />
}

MyError.getInitialProps = async (contextData) => {
  // In case this is running in a serverless function, await this in order to give Sentry
  // time to send the error before the lambda exits
  await Sentry.captureUnderscoreErrorException(contextData)

  // This will contain the status code of the response
  return NextErrorComponent.getInitialProps(contextData)
}

export default MyError
