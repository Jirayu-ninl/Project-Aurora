/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverLog } from 'aurora/libs/log/log.server'

import { getProviders } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@server/auth'
import { SignInIceJiVerse, SignInProviders } from './components'
import { SetErrorToast } from '@components/toast'
import { SetNavState } from '@aurora/views/state'

const Page = async () => {
  const log = serverLog()
  log.info('Page request', { page: 'Auth portal' })

  const providers = await getProviders()
  const session = await getServerSession(authOptions)

  return (
    <>
      <SetErrorToast />
      <SetNavState id={0} title='Log in' />
      <SignInIceJiVerse>
        <SignInProviders providers={providers} session={session} />
      </SignInIceJiVerse>
    </>
  )
}

export default Page
