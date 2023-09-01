'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { SetNavStateWithRoutes } from '@aurora/views/state'
import { DashboardLayout } from '../components'
import { Routes } from './routes'

const LayoutClient = ({ session }: { session: any }) => {
  const reqPath = usePathname()
  const pathname = reqPath.split('/')[3]
  const [pageIndex, setPageIndex] = useState(99)

  useEffect(() => {
    setPageIndex(99)
    Routes.map((v, i) => {
      const path = v.path.split('/')[1]
      if (path === pathname) {
        setPageIndex(i)
      }
    })
    if (pathname === 'settings') {
      setPageIndex(80)
    }
  }, [pathname, reqPath])

  return (
    <>
      <SetNavStateWithRoutes
        Page={pageIndex}
        Pages={Routes.length}
        id={1}
        Routes={Routes.map((v) => v.name)}
      />
      <DashboardLayout.SideBar
        Routes={Routes}
        pageIndex={pageIndex}
        session={session}
      />
    </>
  )
}

export { LayoutClient }
