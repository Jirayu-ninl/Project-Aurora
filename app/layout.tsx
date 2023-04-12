/* eslint-disable prettier/prettier */
// import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// import { useEffect } from 'react'
// import Router, { useRouter } from 'next/router'
// import Script from 'next/script'
// import NProgress from 'nprogress'
// import { SessionProvider } from 'next-auth/react'
// import PageTransition from '@aurora/libs/animations/hooks/usePageTransition'

import Tracker from '@aurora/libs/trackers'
// import Config from '@app/config'

// import MainLayout from 'layouts/MainLayout'
// import Toast from '@aurora/modules/toast'

import 'react-toastify/dist/ReactToastify.css'
import 'tailwindcss/tailwind.css'
import './globals.css'

// export const metadata = { ...Config.metaData }

type NextPageWithLayout = NextPage & {
  disableFooter?: boolean
  disableNav?: boolean
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  pageProps: any
  children: any
}

const App = ({ children, Component, pageProps }: AppPropsWithLayout) => {
  const Analytics = Tracker.gtm.component

  // const router = useRouter()

  // useEffect(() => {
  //   const handleRouteStart = () => NProgress.start()
  //   const handleRouteDone = () => NProgress.done()
  //   Router.events.on('routeChangeStart', handleRouteStart)
  //   Router.events.on('routeChangeComplete', handleRouteDone)
  //   Router.events.on('routeChangeError', handleRouteDone)
  //   return () => {
  //     Router.events.off('routeChangeStart', handleRouteStart)
  //     Router.events.off('routeChangeComplete', handleRouteDone)
  //     Router.events.off('routeChangeError', handleRouteDone)
  //   }
  // }, [])

  return (
    <html lang='en'>
      <body>
        <Analytics />
        {/* <SessionProvider session={pageProps.session}> */}
        {/* <MainLayout
            showNav={!Component.disableNav}
            showFooter={!Component.disableFooter}
          > */}
        {/* <PageTransition router={router}> */}
        {/* <Component {...pageProps} /> */}
        {children}
        {/* </PageTransition> */}
        {/* <Toast /> */}
        {/* </MainLayout> */}
        {/* </SessionProvider> */}
      </body>
    </html>
  )
}

export default App
