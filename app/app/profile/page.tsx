import { getSession } from '@server/auth/aurora'
import { SetNavState } from '@aurora/views/state'
import { Client } from './page.client'

const Page = async () => {
  const session = await getSession()
  return (
    <>
      <SetNavState id={0} title={session?.user.name ?? 'Profile'} />
      <Client session={session} />
    </>
  )
}

export default Page
