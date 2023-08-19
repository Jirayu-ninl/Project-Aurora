import { getServerSession } from 'next-auth'
import { authOptions } from '@server/auth'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import CreateProgress from '@aurora/modules/nprogress'

import WrapperMobile from './wrapper.mobile'
import { Audio, Setup /*, SetPageState */ } from './components/setup'
import { SetPageState } from './components/setup'

// IJN Components
import Cursor from './components/cursor'
import { NavBar, NavCanvas /* NavMobile */ } from './components/nav'
import { Footer } from './components/footer'
import AppInfo from './components/appInfo'
// import Beta from './components/modal.beta'

const Wrapper = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions)

  return (
    <>
      <CreateProgress />
      <SetPageState />
      {/* <Beta /> */}
      <AppInfo />
      <Setup />
      <NavBar session={session} />
      <NavCanvas />
      <WrapperMobile session={session}>{children}</WrapperMobile>
      <Footer />
      <Cursor />
      <Audio />
    </>
  )
}

export default Wrapper
