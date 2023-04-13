/* eslint-disable prettier/prettier */
// import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// import { SessionProvider } from 'next-auth/react'
// import PageTransition from '@aurora/libs/animations/hooks/usePageTransition'

import Tracker from '@aurora/libs/trackers'
import Config from '@app/config'

// import MainLayout from 'layouts/MainLayout'
import Toast from '@aurora/modules/toast'

import 'react-toastify/dist/ReactToastify.css'
import 'tailwindcss/tailwind.css'
import './globals.css'

export const metadata = { ...Config.metaData }

type NextPageWithLayout = NextPage & {
  disableFooter?: boolean
  disableNav?: boolean
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  pageProps: any
  children: any
}

const App = ({ children }: AppPropsWithLayout) => {
  const Analytics = Tracker.gtm.component

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
        <Toast />
        {/* </MainLayout> */}
        {/* </SessionProvider> */}
      </body>
    </html>
  )
}

export default App
