'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { SetNavState } from '@aurora/views/state'
import { Layout } from './components'
import { Routes } from './routes'

const LayoutClient = ({ session }: { session: any }) => {
  const reqPath = usePathname()
  const pathname = reqPath.split('/')[2]
  const [pageIndex, setPageIndex] = useState(99)

  useEffect(() => {
    setPageIndex(99)
    Routes.map((v, i) => {
      if (v.path === pathname) {
        setPageIndex(i)
      }
    })
    if (pathname === 'settings') {
      setPageIndex(80)
    }
  }, [pathname, reqPath])

  return (
    <>
      <SetNavState
        Page={pageIndex}
        Pages={Routes.length}
        id={!pathname ? 0 : pathname && pageIndex === 80 ? 2 : 1}
        Routes={Routes.map((v) => v.name)}
      />
      <Layout.SideBar Routes={Routes} pageIndex={pageIndex} session={session} />
    </>
  )
}

export { LayoutClient }
