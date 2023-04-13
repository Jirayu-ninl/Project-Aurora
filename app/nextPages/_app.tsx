/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */

import { SessionProvider } from 'next-auth/react'
import PageTransition from 'views/animations/hooks/usePageTransition'

import MainLayout from 'layouts/MainLayout'


const App = ({ Component, pageProps }: AppPropsWithLayout) => {

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <MainLayout
          showNav={!Component.disableNav}
          showFooter={!Component.disableFooter}
        >
          <PageTransition router={router}>
            <Component {...pageProps} />
          </PageTransition>
          <Toast />
        </MainLayout>
      </SessionProvider>
    </>,
  )
}

export default App
