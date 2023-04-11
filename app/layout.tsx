/* eslint-disable prettier/prettier */
// 'use client'

// import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// import { useEffect } from 'react'
// import Router, { useRouter } from 'next/router'
import Script from 'next/script'
// import NProgress from 'nprogress'
// import { SessionProvider } from 'next-auth/react'
// import PageTransition from '@aurora/libs/animations/hooks/usePageTransition'

import MetaData from '@/resources/contents/global/metaData'
import { Tracker } from '@aurora/libs'
import Config from '@app/config'

// import MainLayout from 'layouts/MainLayout'
// import Toast from '@aurora/modules/toast'

import 'react-toastify/dist/ReactToastify.css'
import 'tailwindcss/tailwind.css'
import './globals.css'

export const metadata = { ...MetaData }

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
  const pageview = Tracker.gtm.pageview
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

  // useEffect(() => {
  //   router.events.on('routeChangeComplete', pageview)
  //   return () => {
  //     router.events.off('routeChangeComplete', pageview)
  //   }
  // }, [router.events])

  return (
    <html lang='en'>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${Config.app.GOOGLE_TAG_MANAGER}`}
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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
        <Script
          strategy='afterInteractive'
          id='GOOGLE_TAG_MANAGER'
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${Config.app.GOOGLE_TAG_MANAGER}');
          `,
          }}
        />
      </body>
    </html>
  )
}

export default App
