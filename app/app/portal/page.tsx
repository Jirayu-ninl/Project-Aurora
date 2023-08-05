/* eslint-disable @typescript-eslint/no-explicit-any */

import { getCsrfToken } from 'next-auth/react'
import { SignIn } from './components'
import { SetErrorToast } from '@components/toast'

const Page = async ({ ctx }: any) => {
  const csrfToken = await getCsrfToken(ctx)

  return (
    <>
      <SetErrorToast />
      <SignIn csrfToken={csrfToken} />
    </>
  )
}

export default Page
