import { getServerSession } from 'next-auth'
import { signIn } from 'next-auth/react'
import { authOptions } from '@server/auth'

const Page = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    return (
      <main className='relative flex h-screen w-screen items-center justify-center overflow-hidden'>
        <h4 className='text-xl'>You're not login</h4>
        <button
          className='border border-black dark:border-white'
          onClick={() => signIn()}
        >
          LOG IN
        </button>
      </main>
    )
  }
  return (
    <main className='relative flex h-screen w-screen items-center justify-center overflow-hidden'>
      <h1 className='text-xl'>DASHBOARD</h1>
    </main>
  )
}

export default Page
