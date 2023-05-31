/* eslint-disable prettier/prettier */
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { Prompt } from 'next/font/google'
import clsx from 'clsx'

// import { SessionProvider } from 'next-auth/react'
import Tracker from '@aurora/libs/trackers'
import Toast from '@aurora/modules/toast'
import PageTransition from '@aurora/views/animations/hooks/usePageTransition'
// import CreateProgress from '@aurora/modules/nprogress'

import Config from '@global/config'

import Wrapper from '@global/layout/wrapper'

import 'tailwindcss/tailwind.css'
import 'react-toastify/dist/ReactToastify.css'
import 'nprogress/nprogress.css'
import './globals.css'

export const metadata = { ...Config.metaData }

const fInter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const fPrompt = Prompt({
  subsets: ['thai'],
  weight: ['100', '200', '300', '400', '600'],
  display: 'swap',
  variable: '--font-prompt',
})

type AppPropsWithLayout = AppProps & {
  children: React.ReactNode
}

const App = ({ children }: AppPropsWithLayout) => {
  const Analytics = Tracker.gtm.component

  return (
    <html
      lang='en'
      className={clsx(
        fInter.className,
        `${fInter.variable} ${fPrompt.variable}`,
      )}
    >
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
