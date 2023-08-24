import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@server/auth'

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions)

  if (!session) {
    return (
      <main className='m-container w-dvw relative flex flex-col items-center justify-center overflow-hidden'>
        <h4 className='pb-3 text-4xl font-light uppercase'>
          You're <span className='font-bold'>not</span> login
        </h4>
        <Link
          className='Anim rounded-md border border-black bg-white/10 px-2 py-1 hover:bg-white/30 dark:border-white'
          href='/portal'
        >
          LOG IN
        </Link>
      </main>
    )
  }

  return (
    <>
      <div className='m-container w-svw flex items-center justify-center bg-gradient-to-br from-backgroundLight-1 to-blue-200 dark:from-background-3 dark:to-background-0'>
        {children}
      </div>
    </>
  )
}

export default Layout
