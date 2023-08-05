'use client'

import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'
import { navSecondaryRoutes } from '@global/config/routes'

function Layout({ children }: { children: React.ReactNode }) {
  const Pathname = usePathname().slice(8)

  return (
    <div className='relative flex h-screen w-screen justify-center overflow-y-hidden px-4 pb-4 pt-28'>
      <div className='container h-full w-full overflow-hidden xxl:w-[1440px]'>
        <div className='h-full w-full overflow-y-hidden md:flex'>
          <div className='flex w-full overflow-x-scroll pb-4 pr-2 pt-2 md:w-1/3 md:flex-col md:pb-0'>
            {navSecondaryRoutes.status.route.map((v, i) => (
              <Link
                className={clsx(
                  'Anim AnimTranslate-4 mr-2 cursor-pointer text-right text-4xl font-light uppercase md:pr-0 md:hover:opacity-100',
                  Pathname === v.path.slice(8) ? 'opacity-100' : 'opacity-20',
                )}
                href={v.path}
                key={i}
              >
                {v.title}
              </Link>
            ))}
          </div>
          <div className='SSB h-full grow overflow-y-scroll pb-16 pl-2 pr-2'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
