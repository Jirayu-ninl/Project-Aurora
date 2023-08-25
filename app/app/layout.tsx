import Link from 'next/link'
import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { authOptions } from '@server/auth'
import { LayoutClient } from './layout.client'

const AppLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions)

  if (!session) {
    return (
      <main className='m-container w-dvw relative flex flex-col items-center justify-center overflow-hidden'>
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

  return (
    <>
      <div className='m-container w-svw bg-gradient-to-br from-backgroundLight-1 to-blue-200 pt-12 dark:from-background-3 dark:to-background-0 sm:pt-0'>
        <div className='flex h-full w-full px-5 pb-12 pt-[5rem] el:pt-[6.5rem]'>
          <LayoutClient session={session} />
          <div className='h-full w-full rounded-md bg-white/20 shadow-[inset_6px_6px_12px_2px_rgb(0,0,0,0.05)] dark:bg-background-2 dark:shadow-[inset_6px_6px_24px_2px_rgb(0,0,0,0.6)]'>
            <ComingSoon />
            {/* {children} */}
          </div>
        </div>
      </div>
    </>
  )
}

const ComingSoon = () => (
  <>
    <div className='flex h-full w-full'>
      <div className='relative m-auto h-48 w-48 opacity-10 dark:invert lg:h-80 lg:w-80'>
        <Image
          src='/page/coming-soon.png'
          width={512}
          height={512}
          alt='Coming Soon'
        />
      </div>
    </div>
  </>
)

export default AppLayout
