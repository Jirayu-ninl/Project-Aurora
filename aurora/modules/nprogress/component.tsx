'use client'

import { useEffect } from 'react'
// import { usePathname, useSearchParams } from 'next/navigation'
import Router from 'next/router'
import NProgress from 'nprogress'

function NProgressComponent() {
  useEffect(() => {
    const handleRouteStart = () => NProgress.start()
    const handleRouteDone = () => NProgress.done()

    Router.events.on('routeChangeStart', handleRouteStart)
    Router.events.on('routeChangeComplete', handleRouteDone)
    Router.events.on('routeChangeError', handleRouteDone)
    return () => {
      Router.events.off('routeChangeStart', handleRouteStart)
      Router.events.off('routeChangeComplete', handleRouteDone)
      Router.events.off('routeChangeError', handleRouteDone)
    }
  }, [])

  return <div></div>
}

export default NProgressComponent
