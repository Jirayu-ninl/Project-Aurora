/* eslint-disable prettier/prettier */
import type { AppProps } from 'next/app'

// import { SessionProvider } from 'next-auth/react'
import PageTransition from '@aurora/views/animations/hooks/usePageTransition'

import Tracker from '@aurora/libs/trackers'
import Config from '@app/config'

import Wrapper from './layouts/global/wrapper'
import Toast from '@aurora/modules/toast'

import 'react-toastify/dist/ReactToastify.css'
import 'tailwindcss/tailwind.css'
import './globals.css'

export const metadata = { ...Config.metaData }

type AppPropsWithLayout = AppProps & {
  children: React.ReactNode
}

const App = ({ children }: AppPropsWithLayout) => {
  const Analytics = Tracker.gtm.component

  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <Analytics />
        {/* <SessionProvider session={pageProps.session}> */}
        <Wrapper>
          <PageTransition>{children}</PageTransition>
          <Toast />
        </Wrapper>
        {/* </SessionProvider> */}
      </body>
    </html>
  )
}

export default App
