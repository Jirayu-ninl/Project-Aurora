import { getServerSession } from 'next-auth'
import { authOptions } from '@server/auth'

import { Client } from './page.client'

const Page = async () => {
  const session = await getServerSession(authOptions)
  const data = {
    session,
  }

  return (
    <main className='relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden'>
      <h1 className='text-xl'>Profile</h1>
      <h1>Server Session</h1>
      <Client data={data} />
      <div className=''>
        <pre>{JSON.stringify(session, undefined, 2)}</pre>
      </div>
    </main>
  )
}

export default Page
