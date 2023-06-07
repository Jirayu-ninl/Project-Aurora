'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'

import { State } from '@global/store'
// import Data from './data'

function Layout({ children }: { children: React.ReactNode }) {
  const _setPage = State((state) => state.setPage)
  const _setNavRoute = State((state) => state.setNavRoute)
  const _setBackRoute = State((state) => state.setBackRoute)

  useEffect(() => {
    _setPage('Status')
    _setBackRoute('/status')
    _setNavRoute([
      {
        id: 0,
        number: '01',
        title: 'SERVER',
        path: '/status?section=server',
      },
      {
        id: 1,
        number: '02',
        title: 'APP',
        path: '/status?section=app',
      },
      {
        id: 2,
        number: '03',
        title: 'device',
        path: '/status?section=device',
      },
    ])
  }, [_setPage, _setNavRoute, _setBackRoute])

  const Pathname = usePathname().slice(8)
  const sectionName = ['server', 'app', 'device', 'host']

  return (
    <div className='relative flex h-screen w-screen justify-center overflow-y-hidden px-4 pb-4 pt-28'>
      <div className='container h-full w-full overflow-hidden xxl:w-[1440px]'>
        <div className='h-full w-full overflow-y-hidden md:flex'>
          <div className='flex w-full overflow-x-scroll pb-4 pr-2 pt-2 md:w-1/3 md:flex-col md:pb-0'>
            {sectionName.map((v, i) => (
              <Link
                className={clsx(
                  'Anim AnimTranslate-4 mr-2 cursor-pointer text-right text-4xl font-light uppercase md:pr-0 md:hover:opacity-100',
                  Pathname === v ? 'opacity-100' : 'opacity-20',
                )}
                href={`/status/` + v}
                key={i}
              >
                {v}
              </Link>
            ))}
          </div>
          <div className='h-full grow overflow-y-scroll pb-16 pl-2'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
