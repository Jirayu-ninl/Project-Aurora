import Link from 'next/link'
// import { cookies } from 'next/headers'
import { getSession } from '@server/auth'

const AppLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getSession()
  // const cookieStore = cookies()
  // const sessionToken = cookieStore.get('next-auth.session-token')
  // const sessionSecureToken = cookieStore.get('__Secure-next-auth.session-token')

  if (!session) {
    return (
      <main className='m-container relative flex w-dvw flex-col items-center justify-center overflow-hidden'>
        <h4 className='pb-3 text-xl font-light uppercase md:text-2xl xl:text-4xl'>
          You're <span className='font-bold'>not</span> login
        </h4>
        <Link
          className='Anim rounded-md border border-black bg-white/10 px-2 py-1 text-xs hover:bg-white/30 dark:border-white md:text-sm xl:text-base'
          href='/portal'
        >
          LOG IN
        </Link>
      </main>
    )
  }

  return <>{children}</>
}

export default AppLayout
