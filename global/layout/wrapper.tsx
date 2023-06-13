import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import CreateProgress from '@aurora/modules/nprogress'

import { Audio, Setup, SetPageState } from './components/setup'

// IJN Components
import Cursor from './components/cursor'
import { NavBar, NavCanvas /* NavMobile */ } from './components/nav'
import WrapperMobile from './wrapper.mobile'
import { Footer } from './components/footer'
import AppInfo from './components/appInfo'
import Beta from './components/modal.beta'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CreateProgress />
      {/* <SetPageState /> */}
      <Beta />
      <AppInfo />
      <Setup />
      <NavBar />
      <NavCanvas />
      <WrapperMobile>{children}</WrapperMobile>
      <Footer />
      <Cursor />
      <Audio />
    </>
  )
}

export default Wrapper
