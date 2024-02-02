/* eslint-disable prettier/prettier */
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { Prompt } from 'next/font/google'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { AxiomWebVitals } from 'next-axiom'
import clsx from 'clsx'

import { GoogleAnalytics } from '@aurora/libs/analytics'
import { Toast } from '@aurora/views/module.toast'
import Config from '@global/config'
import Wrapper from '@global/layout/wrapper'

import 'react-toastify/dist/ReactToastify.css'
import 'nprogress/nprogress.css'
import './globals.css'

export const metadata = { ...Config.metaData }
export const viewport = { ...Config.viewport }

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

  return (
    <html
      lang='en'
      className={clsx(
        fInter.className,
        `${fInter.variable} ${fPrompt.variable}`,
      )}
    >
      <AxiomWebVitals />
      <body suppressHydrationWarning={true}>
        <GoogleAnalytics />
        <Wrapper>
          {children}
          <Toast />
        </Wrapper>
        <VercelAnalytics />
      </body>
    </html>
  )
}

export default App
