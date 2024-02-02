'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import * as Sentry from '@sentry/nextjs'

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <>
      <div className='flex h-screen w-screen flex-col items-center justify-center'>
        <h4 className='-mb-8 text-10xl font-thin text-primary-0'>404</h4>
        <h2 className='text-5xl font-bold uppercase'>Something went wrong!</h2>
        <p className='font-light'>Internal Error has occurred</p>
        <Link
          className='Anim mt-8 rounded-md border border-primary-0 bg-primary-0/20 px-3 py-1 text-xs hover:bg-primary-0 hover:text-black'
          href='/home'
        >
          Comeback home
        </Link>
      </div>
    </>
  )
}
