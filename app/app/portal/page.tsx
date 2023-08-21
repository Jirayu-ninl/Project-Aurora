/* eslint-disable @typescript-eslint/no-explicit-any */

import { /*getCsrfToken,*/ getProviders } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@server/auth'
import { SignInIceJiVerse, SignInProviders } from './components'
import { SetErrorToast } from '@components/toast'

const Page = async (/*{ ctx }: any*/) => {
  // const csrfToken = await getCsrfToken(ctx)
  const providers = await getProviders()
  const session = await getServerSession(authOptions)

  return (
    <>
      <SetErrorToast />
      <SignInIceJiVerse>
        <SignInProviders providers={providers} session={session} />
      </SignInIceJiVerse>
    </>
  )
}

export default Page
