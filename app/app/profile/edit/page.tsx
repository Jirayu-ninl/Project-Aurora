import { getSession } from '@server/auth/aurora'
import { Client } from './page.client'

const Page = async () => {
  const session = await getSession()
  return (
    <>
      <div className='h-full w-full'>
        <Client session={session} />
      </div>
    </>
  )
}

export default Page
