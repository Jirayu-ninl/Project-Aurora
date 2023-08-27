import { Client } from './page.client'
import { getServerSession } from 'next-auth'
import prisma from '@aurora/libs/database/prisma'
import { authOptions } from '@server/auth'
import { appRouter } from '@server/api/root'

const Page = async () => {
  const session = await getServerSession(authOptions)

  const caller = appRouter.createCaller({ session, prisma })
  const result = await caller.example.hello({ text: 'tRPC' })

  return (
    <>
      <div className='m-container w-dvw flex flex-col items-center justify-center'>
        <h6 className='text-xl'>Client:</h6>
        <Client session={session} />
        <h6 className='pt-6 text-xl'>Server:</h6>
        {result ? (
          <p>{result.greeting} from Server</p>
        ) : (
          <p>Server not working</p>
        )}
      </div>
    </>
  )
}

export default Page
