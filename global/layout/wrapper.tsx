import { getServerSession } from 'next-auth'
import { authOptions } from '@server/auth'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { CreateProgress } from '@aurora/views/module.nprogress'

import { Providers } from './providers'
import WrapperMobile from './wrapper.mobile'
import { Audio, Setup /*, SetPageState */ } from './components/setup'
import { SetPageState } from './components/setup'

// IJN Components
import Cursor from './components/cursor'
import { NavBar, NavCanvas /* NavMobile */ } from './components/nav'
import { Footer } from './components/footer'
import AppInfo from './components/appInfo'

const Wrapper = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions)

  return (
    <>
      <Providers>
        <CreateProgress />
        <SetPageState />
        <AppInfo />
        <Setup />
        <NavBar session={session} />
        <NavCanvas />
        <WrapperMobile session={session}>{children}</WrapperMobile>
        <Footer />
        <Cursor />
        <Audio />
      </Providers>
    </>
  )
}

export default Wrapper
